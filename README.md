# Starter Pocketbase And React Kit

A full-stack application combining PocketBase backend with a React frontend.

## Prerequisites

- [Go](https://golang.org/dl/) (for PocketBase backend)
- [Node.js](https://nodejs.org/) and [pnpm](https://pnpm.io/) (for React client)

## Quick Start

### 1. Setup

```bash
# Install root dependencies
pnpm i

# Install client dependencies
cd client && pnpm i

# Tidy Go modules
go mod tidy
```

### 2. Development

```bash
# Start both Pocketbase server and React client concurrently
pnpm dev
```

This will start:
- PocketBase server + client: http://localhost:8090
- REST API: http://localhost:8090/api/
- Admin UI: http://localhost:8090/_/

```bash
# Run React client only
pnpm dev:client

# Run PocketBase server only
pnpm dev:server
```

### 3. Test the Connection

Open the app at http://localhost:8090/ and click "Test API Connection" to verify the backend is working.

## Project Structure

```
├── main.go              # PocketBase server with custom routes
├── client/              # React frontend
│   ├── src/
│   │   ├── App.tsx      # Main React component
│   │   ├── main.tsx     # React entry point
│   │   └── style.css    # Tailwind CSS
│   └── package.json     # Frontend dependencies
├── pb_migrations/       # Database migrations
└── pb_public/          # Static files (client build output)
```

## Available Scripts

### Root
- `pnpm dev` - Start both backend and frontend concurrently
- `pnpm build` - Build frontend for production
- `pnpm watch:build` - Watch and rebuild frontend

### Frontend (client/)
- `pnpm dev` - Start development server
- `pnpm build` - Build for production (outputs to ../pb_public)
- `pnpm lint` - Run linter
- `pnpm format` - Format code

## Tech Stack

**Backend:**
- PocketBase (Go-based backend)
- SQLite database

**Frontend:**
- React with TypeScript
- Vite for development and building
- Tailwind CSS for styling
- DaisyUI for utility class components
- Biome for linting and formatting
