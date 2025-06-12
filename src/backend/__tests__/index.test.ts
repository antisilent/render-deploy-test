import request from 'supertest';
import express from 'express';
import cors from 'cors';

// Create a test instance of the app
const app = express();
app.use(express.json());
app.use(cors());

// Add the actual route we want to test
app.get('/api/health', (req, res) => {
  res.status(204).send();
});

describe('API Endpoints', () => {
  it('GET /api/health returns 204', async () => {
    await request(app)
      .get('/api/health')
      .expect(204);
  });
});
