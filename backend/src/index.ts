import express, { Request, Response } from 'express';
import cors from 'cors';
import path from 'path';

const app = express();
const port = process.env.PORT || 4000;

// Enable CORS in development
if (process.env.NODE_ENV !== 'production') {
  app.use(cors());
}

app.use(express.json());

// API routes
app.get('/api/hello', (req: Request, res: Response) => {
  res.json({ message: 'Hello from the Express backend!' });
});

// Serve static files in production
// if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'public')));

  // Handle client-side routing
  app.get('*', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });
// }

app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});
