# Full Stack TypeScript Application

This is a full-stack TypeScript application with React frontend and Express backend, designed for deployment on Render. The application uses a monorepo structure with shared build tooling.

## Prerequisites

- Node.js (v14 or higher)
- pnpm (v7 or higher)

## Project Structure

The application is organized as a monorepo with the following structure:

```
├── src/
│   ├── frontend/          # React frontend application
│   │   ├── App.tsx        # Main React component
│   │   ├── index.tsx      # Frontend entry point
│   │   ├── styles.css     # Global styles
│   │   └── __tests__/     # Frontend tests
│   ├── backend/           # Express backend application
│   │   ├── index.ts       # Backend entry point
│   │   ├── server.ts      # Server configuration
│   │   ├── config/        # Backend configuration
│   │   ├── types/         # TypeScript type definitions
│   │   └── __tests__/     # Backend tests
│   └── setupTests.ts      # Jest test setup
├── public/                # Static assets
│   └── index.html         # HTML template
├── dist/                  # Build output (generated)
├── webpack.config.js      # Webpack configuration for frontend
├── jest.config.js         # Jest test configuration
├── tsconfig.json          # Base TypeScript configuration
├── tsconfig.frontend.json # Frontend-specific TypeScript config
└── tsconfig.test.json     # Test-specific TypeScript config
```

## Setup

1. Install dependencies:
```bash
pnpm install
```

2. Set up environment variables (optional):
   - `DMG_API_KEY`: API key for LLM backend
   - `DMG_API_BASE`: Base URL for LLM API
   - `PORT`: Server port (defaults to 4000)

3. Start development servers:
```bash
pnpm dev
```

This will start both the frontend and backend servers concurrently:
- Frontend: http://localhost:3000 (with hot reload)
- Backend: http://localhost:4000 (with auto-restart)

## Development

### Frontend Development
- React 18 with TypeScript
- Webpack dev server with hot module replacement
- CSS modules support
- Proxy configuration to backend API

### Backend Development
- Express.js with TypeScript
- CORS enabled in development
- OpenAI integration for LLM functionality
- Health check endpoint for Render deployment
- Auto-restart on file changes with ts-node-dev

### Testing
- Jest with ts-jest for TypeScript support
- React Testing Library for frontend tests
- Supertest for backend API testing
- Coverage reporting

Run tests with:
```bash
pnpm test              # Run all tests
pnpm test:watch        # Run tests in watch mode
pnpm test:coverage     # Run tests with coverage report
```

## Building for Production

To build both frontend and backend:

```bash
pnpm build
```

This will:
1. Clean the `dist` directory
2. Build the frontend with Webpack (production mode)
3. Compile the backend TypeScript to JavaScript

The built files will be in:
- Frontend: `/dist/public/` (HTML, CSS, JS bundles)
- Backend: `/dist/` (compiled JavaScript)

## Production Deployment

The application is designed for deployment on Render:

1. **Environment Variables**: Set `NODE_ENV=production` and any required API keys
2. **Build Command**: `pnpm build`
3. **Start Command**: `pnpm start`

In production mode:
- The backend serves static files from `/dist/public`
- All non-API routes serve the React app (SPA routing)
- CORS is disabled for security
- Health check endpoint available at `/api/health`

## API Endpoints

- `GET /api/health` - Health check (returns 204)
- `GET /api/models` - List available LLM models (requires API key)

## Key Features

- **Monorepo Structure**: Shared tooling and dependencies
- **TypeScript**: Full type safety across frontend and backend
- **Hot Reloading**: Fast development experience
- **Testing**: Comprehensive test setup with coverage
- **Production Ready**: Optimized builds and deployment configuration
- **Render Integration**: Health checks and static file serving
