# WF4 Backend

Express.js backend service for the WF4 documentation platform. Provides REST APIs for document management, link suggestions, and document search capabilities.

## Prerequisites

- Node.js (v18 or higher recommended)
- PostgreSQL (with pgvector extension)
- npm or yarn

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Database Setup

Create the database and required tables:

```bash
psql -U postgres < db/schema.sql
```

This will:

- Create the `wf4` database
- Install the `vector` extension (for embeddings)
- Create tables: `docs` and `doc_embeddings`

## Running the Service

### Development Mode

Start the server with hot-reload:

```bash
npm run dev
```

The server will start on `http://localhost:3001` by default.

### Running the Indexer

To index documents and generate embeddings:

```bash
npm run index
```

## API Endpoints

### Documentation Endpoints

#### GET `/api/docs`

List all documents (for sidebar navigation).

**Response:**

```json
[
  {
    "id": 1,
    "slug": "getting-started",
    "title": "Getting Started"
  }
]
```

**Example:**

```bash
curl -s http://localhost:3001/api/docs
```

#### GET `/api/docs/:slug`

Retrieve a specific document by slug.

**Response:**

```json
{
  "id": 1,
  "slug": "getting-started",
  "title": "Getting Started",
  "body": "# Getting Started\n\nWelcome to WF4..."
}
```

**Example:**

```bash
curl -s http://localhost:3001/api/docs/getting-started
```

### Link Suggestions

#### POST `/api/link-suggestions`

Get AI-powered link suggestions for a broken or dead URL.

**Request Body:**

```json
{
  "deadUrl": "https://example.com/old-page",
  "context": "Optional surrounding text context"
}
```

**Response:**

```json
{
  "suggestions": [
    {
      "url": "https://example.com/new-page",
      "title": "New Page Title",
      "score": 0.95
    }
  ]
}
```

**Example:**

```bash
curl -s http://localhost:3001/api/link-suggestions \
  -H "Content-Type: application/json" \
  -d '{"deadUrl": "https://example.com/old-page", "context": "Some context"}'
```

## Testing the Service

### Quick Health Check

```bash
# Check if server is running
curl -s http://localhost:3001/api/docs

# Should return an array of documents (or empty array if no docs yet)
```

### Test All Endpoints

```bash
# 1. List all documents
curl -s http://localhost:3001/api/docs | jq

# 2. Get specific document (replace 'your-slug' with actual slug)
curl -s http://localhost:3001/api/docs/your-slug | jq

# 3. Test link suggestions
curl -s http://localhost:3001/api/link-suggestions \
  -H "Content-Type: application/json" \
  -d '{
    "deadUrl": "https://example.com/broken-link",
    "context": "This is some context around the link"
  }' | jq
```

### Using HTTPie (Alternative)

If you have HTTPie installed:

```bash
# List docs
http :3001/api/docs

# Get specific doc
http :3001/api/docs/your-slug

# Link suggestions
http POST :3001/api/link-suggestions \
  deadUrl="https://example.com/broken" \
  context="Some context"
```

## Project Structure

```
backend/
├── db/
│   └── schema.sql          # Database schema
├── src/
│   ├── server.ts           # Main Express server
│   ├── docsApi.ts          # Document API routes
│   ├── linkSuggestions.ts  # Link suggestion logic
│   ├── indexer.ts          # Document indexer
│   ├── embed.ts            # Embedding utilities
│   └── db.ts               # Database connection
├── package.json
└── tsconfig.json
```

## Features

- **Document Management**: Store and retrieve markdown documentation
- **Link Suggestions**: AI-powered suggestions for broken/dead links
- **Vector Search**: Semantic search using pgvector embeddings
- **CORS**: Configured for local frontend development
- **Request Logging**: Built-in request/response logging

## Common Issues

### Database Connection Errors

If you see connection errors, ensure:

1. PostgreSQL is running: `brew services start postgresql` (macOS)
2. Database exists: `psql -U postgres -c "\l" | grep wf4`
3. Connection settings match your PostgreSQL setup

### CORS Errors

If frontend requests are blocked:

1. Check `WF4_FRONTEND_ORIGIN` matches your frontend URL
2. Default allowed origins: `http://localhost:5173`, `http://localhost:8080`

### Empty Document List

If `/api/docs` returns `[]`:

1. No documents have been indexed yet
2. Run the indexer: `npm run index`
3. Or manually insert documents into the database

## Development

### TypeScript Compilation

```bash
# Compile TypeScript
npm run build

# Output will be in dist/
```

### Database Queries

The service uses parameterized queries via the `pg` library for security.

See [src/db.ts](src/db.ts) for database connection configuration.

## Contributing

When adding new endpoints:

1. Add route handlers to appropriate router (e.g., `docsApi.ts`)
2. Update this README with endpoint documentation
3. Add example curl commands for testing

## License

Private - Internal Use Only
