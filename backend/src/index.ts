import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import type { Context } from 'hono';

const app = new Hono();
const port = 4000;

// Enable CORS
app.use('*', cors());

// API routes
app.get('/api/status', (c: Context) => {
  return c.json({ message: 'It works!' });
});

// Start the server
serve({
  fetch: app.fetch,
  port
}, (info: { port: number }) => {
  console.log(`Backend server running at http://localhost:${info.port}`);
});
