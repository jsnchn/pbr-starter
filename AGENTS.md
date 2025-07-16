# Agent Instructions for SPARK Kit

## Build/Lint/Test Commands
```bash
# Development
pnpm dev              # Run both client and server concurrently
pnpm dev:client       # Run client only (Vite dev server)
pnpm dev:server       # Run server only (Go with Air hot reload)

# Build
pnpm build            # Build client to pb_public directory

# Lint/Format (client only)
cd client && pnpm lint      # Run Biome linter
cd client && pnpm format    # Format code with Biome
cd client && pnpm check     # Run Biome check and apply fixes
```

## Code Style Guidelines
- **Frontend**: React + TypeScript, use Biome for formatting (2 spaces, single quotes, semicolons as needed)
- **Backend**: Go with PocketBase framework, follow standard Go conventions
- **Imports**: Organize imports automatically via Biome, React imports first
- **Types**: Use TypeScript strict mode, define types for all data structures
- **Components**: Functional components with hooks, export as default
- **Styling**: Tailwind CSS with DaisyUI components, use utility classes
- **Error Handling**: Use try-catch blocks, display user-friendly error messages via toast
- **API**: PocketBase client at `http://127.0.0.1:8090`, handle errors gracefully