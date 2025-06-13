import express, { Request, Response } from 'express';
import cors from 'cors';
import path from 'path';
import OpenAI from 'openai';

const IS_PROD = process.env.NODE_ENV === 'production';

let llm: OpenAI | undefined;

if (process.env.DMG_API_KEY || process.env.DMG_API_BASE) {
  const apiKey = process.env.DMG_API_KEY;
  const baseURL = process.env.DMG_API_BASE;

  llm = new OpenAI({ apiKey, baseURL });
} else {
  console.warn('No API key or base URL provided. You will be unable to reach the LLM backend.')
}

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

// Enable CORS in development
if (!IS_PROD) {
  app.use(cors());
}

// API routes
app.get('/api/models', async (req: Request, res: Response) => {
  try {
    const response = await llm?.models.list();
    res.json(response?.data || []);
  } catch (error) {
    console.error('Error fetching models: ', error);
    res.status(500).json({ error: 'Failed to fetch models' });
  }
});

// This route is required by Render for health checking services.
// Don't modify or delete unless you know what you're doing.
app.get('/api/health', (req: Request, res: Response) => {
  res.status(204).send();
});

if (IS_PROD) {
  // Serve static files from the dist/public directory
  app.use(express.static(path.join(__dirname, './public')));

  // Serve the frontend for all other routes
  app.get('*', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
  });
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
