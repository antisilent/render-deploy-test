import express, { Request, Response } from 'express';
import cors from 'cors';
import path from 'path';

const IS_PROD = process.env.NODE_ENV === 'production';

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

// Enable CORS in development
if (!IS_PROD) {
  app.use(cors());
}

// API routes
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
