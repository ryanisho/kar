# wf4: Intelligent Search Platform

AI-powered search and documentation management platform for technical content. Built with modern web technologies and machine learning for contextual document discovery.

**CS 4701 AI Practicum** - Cornell University, Fall 2025

## 🚀 Features

- **Intelligent Search**: Natural language queries with semantic understanding
- **Document Management**: Create, view, and manage markdown documentation
- **Link Suggestions**: AI-powered recommendations for broken/dead links
- **Vector Search**: Semantic search using pgvector embeddings
- **Real-time Preview**: Live markdown preview when creating documents
- **Responsive Design**: Modern UI with shadcn/ui components

## 📁 Project Structure

```
wf4/
├── pkg/
│   ├── backend/              # Express.js REST API
│   │   ├── src/
│   │   │   ├── server.ts     # Main server
│   │   │   ├── docsApi.ts    # Document endpoints
│   │   │   ├── linkSuggestions.ts  # Link suggestion logic
│   │   │   ├── indexer.ts    # Document indexing
│   │   │   ├── embed.ts      # Embedding utilities
│   │   │   └── db.ts         # Database connection
│   │   ├── db/
│   │   │   └── schema.sql    # PostgreSQL schema
│   │   └── package.json
│   │
│   └── embed_service/        # Python embedding microservice
│       ├── app/
│       │   └── main.py       # FastAPI embedding server
│       └── requirements.txt
│
└── wf4-frontend/             # React + TypeScript frontend
    ├── src/
    │   ├── components/       # UI components
    │   ├── pages/           # Page components
    │   └── contexts/        # React contexts
    └── package.json
```

## 🛠️ Tech Stack

### Frontend

- **React** + **TypeScript** + **Vite**
- **TailwindCSS** for styling
- **shadcn/ui** component library
- **React Router** for navigation
- **React Markdown** for rendering

### Backend

- **Node.js** + **Express** + **TypeScript**
- **PostgreSQL** with **pgvector** extension
- **FastAPI** (Python) for embeddings

### AI/ML

- Sentence transformers for embeddings
- Vector similarity search
- Semantic document retrieval

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- PostgreSQL (with pgvector extension)
- Python 3.9+
- npm or yarn

### 1. Database Setup

```bash
# Install PostgreSQL and pgvector
# macOS:
brew install postgresql pgvector

# Start PostgreSQL
brew services start postgresql

# Create database
psql < pkg/backend/db/schema.sql
# Or manually:
psql
CREATE DATABASE wf4;
\c wf4;
CREATE EXTENSION IF NOT EXISTS vector;
# Then run the schema from db/schema.sql
```

### 2. Backend Setup

```bash
cd pkg/backend
npm install

# Start development server
npm run dev

# Server runs on http://localhost:3001
```

### 3. Embedding Service Setup

```bash
cd pkg/embed_service
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt

# Start embedding service
uvicorn app.main:app --host 0.0.0.0 --port 7001 --reload

# Service runs on http://localhost:7001
```

### 4. Frontend Setup

```bash
cd wf4-frontend
npm install

# Start development server
npm run dev

# Frontend runs on http://localhost:5173
```

### 5. Index Documents

```bash
cd pkg/backend
npm run index
```

## 📖 API Documentation

### Document Endpoints

#### `GET /api/docs`

List all documents

```bash
curl http://localhost:3001/api/docs
```

#### `GET /api/docs/:slug`

Get document by slug

```bash
curl http://localhost:3001/api/docs/getting-started
```

#### `POST /api/docs`

Create new document (auto-indexes)

```bash
curl -X POST http://localhost:3001/api/docs \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My Document",
    "slug": "my-document",
    "body": "# Hello\n\nDocument content..."
  }'
```

### Link Suggestions

#### `POST /api/link-suggestions`

Get AI-powered link suggestions

```bash
curl -X POST http://localhost:3001/api/link-suggestions \
  -H "Content-Type: application/json" \
  -d '{
    "deadUrl": "https://example.com/old-page",
    "context": "surrounding text context"
  }'
```

### Embedding Service

#### `POST /embed`

Generate text embeddings

```bash
curl -X POST http://localhost:7001/embed \
  -H "Content-Type: application/json" \
  -d '{"text": "sample text to embed"}'
```

## 🎨 Frontend Features

- **Home Page**: Overview with animated logo and project information
- **Document Viewer**: Rendered markdown with syntax highlighting
- **Document Creator**: Live markdown preview, auto-slug generation
- **Search Interface**: Natural language search with AI-powered results
- **Responsive Design**: Mobile-friendly with sidebar navigation

## 🔧 Development

### Running Tests

```bash
# Backend
cd pkg/backend
npm test

# Frontend
cd wf4-frontend
npm test
```

### Building for Production

```bash
# Backend
cd pkg/backend
npm run build
npm start

# Frontend
cd wf4-frontend
npm run build
# Serve dist/ folder with your preferred static server
```

## 🗄️ Database Schema

- **docs**: Document storage (id, slug, title, body, updated_at)
- **doc_embeddings**: Vector embeddings (doc_id, embedding[384], updated_at)

## 🤖 How It Works

1. **Document Indexing**: When documents are created, content is sent to the embedding service
2. **Vector Generation**: Python service generates 384-dimensional embeddings using sentence transformers
3. **Vector Storage**: Embeddings stored in PostgreSQL with pgvector extension
4. **Semantic Search**: User queries are embedded and compared against stored vectors
5. **Results Ranking**: Documents ranked by cosine similarity for relevance

## 🎯 Use Cases

- Technical documentation search
- Internal knowledge base
- API documentation management
- Broken link detection and fixing
- Content discovery and exploration

## 👥 Team

- **Katherine** - Fullstack Developer
- **Ashley** - Frontend Developer
- **Ryan** - Backend and Infrastructure Developer

## 📝 Environment Variables

### Backend (.env in pkg/backend/)

```env
PORT=3001
WF4_FRONTEND_ORIGIN=http://localhost:5173
DB_HOST=localhost
DB_PORT=5432
DB_NAME=wf4
DB_USER=postgres
DB_PASSWORD=your_password
```

### Embedding Service

```env
PORT=7001
```

## 🐛 Troubleshooting

### Database Connection Issues

- Ensure PostgreSQL is running: `brew services list`
- Check database exists: `psql -l | grep wf4`
- Verify pgvector extension: `psql wf4 -c "\dx"`

### CORS Errors

- Update `WF4_FRONTEND_ORIGIN` in backend .env
- Check allowed origins in server.ts

### Embedding Service Not Responding

- Verify Python virtual environment is activated
- Check port 7001 is not in use: `lsof -i :7001`
- Review logs for model download progress

## 📄 License

Private - Internal Use Only

## 🔗 Related Documentation

- [Backend README](pkg/backend/README.md)
- [Embedding Service README](pkg/embed_service/README.md)

---

Built with ❤️ for CS 4701 AI Practicum at Cornell University
