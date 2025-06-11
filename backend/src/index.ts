import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

app.get('/api/status', (req: Request, res: Response) => {
  res.json({ message: 'It works!' });
});

app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});
