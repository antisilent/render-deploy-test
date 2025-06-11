# Full Stack TypeScript Application

This is a full-stack TypeScript application with React frontend and Express backend, using Webpack for bundling and hot reloading.

## Prerequisites

- Node.js (v14 or higher)
- pnpm (v7 or higher)

## Setup

1. Install dependencies:
```bash
pnpm install
```

2. Start development servers:
```bash
pnpm dev
```

This will start both the frontend and backend servers concurrently:
- Frontend: http://localhost:3000
- Backend: http://localhost:4000

## Project Structure

- `/frontend` - React frontend application
  - `/src` - Source files
  - `webpack.config.js` - Webpack configuration
  - `tsconfig.json` - TypeScript configuration

- `/backend` - Express backend application
  - `/src` - Source files
  - `tsconfig.json` - TypeScript configuration

## Development

- Frontend changes will automatically trigger a hot reload
- Backend changes will automatically restart the server
- Both servers run concurrently in development mode

## Building for Production

To build both frontend and backend:

```bash
pnpm build
```

The built files will be in:
- Frontend: `/frontend/dist`
- Backend: `/backend/dist`
