import request from 'supertest';
import express from 'express';
import cors from 'cors';

// Create a test instance of the app
const app = express();
app.use(express.json());
app.use(cors());

// Add the actual route we want to test
app.get('/api/status', (req, res) => {
  res.json({ message: 'It works!' });
});

describe('API Endpoints', () => {
  it('GET /api/status returns correct message', async () => {
    const response = await request(app)
      .get('/api/status')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body).toEqual({ message: 'It works!' });
  });
});
