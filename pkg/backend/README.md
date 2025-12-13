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

### Test Insertion
```bash
psql wf4
```

```bash
INSERT INTO docs (slug, title, body)
VALUES (
  'jetstream_dynamics',
  '💨 Jetstream Dynamics',
  $$
# 💨 Jetstream Dynamics

Jet streams are **narrow bands of very strong winds** in the upper troposphere and lower stratosphere, typically found near the **tropopause** between 8–12 km (25,000–40,000 ft). They form along strong horizontal **temperature gradients** and play a major role in shaping **weather fronts, storm tracks, and large-scale weather patterns**.

---

## 🌍 Where Jet Streams Live

Jet streams tend to form:

- Near the **polar front**, where cold polar air meets warm mid-latitude air.
- Close to the **tropopause**, where vertical temperature changes rapidly.
- In regions of **strong baroclinicity** (strong horizontal temperature gradients).

There are two primary jets in each hemisphere:

- **Polar Jet** – Stronger and more variable; closely tied to mid-latitude cyclones and cold fronts.
- **Subtropical Jet** – Generally higher and more zonal; linked with Hadley cell outflow.

**Related:**  
- [Atmospheric Layers](/docs/atmospheric_layers)  
- [Weather Patterns](/docs/weather_patterns)

---

## ⚖️ Thermal Wind & Why Jets Exist

Jet streams are a direct consequence of the **thermal wind relationship**:

- Strong **horizontal temperature gradients** (cold vs. warm side) cause winds **aloft** to increase with height.
- Above strong **surface fronts**, winds accelerate, forming a **jet core**.

Key ideas:

- **Stronger temperature gradient → stronger vertical wind shear → stronger jet.**
- The jet typically sits **above** the strongest temperature gradient at the surface (e.g., along a cold or warm front).

**Related:**  
- [Weather Fronts](/docs/weather_fronts)  
- [Storm Systems](/docs/storm_systems)

---

## 🌀 Jet Streaks & Ageostrophic Circulations

Within a jet stream, local maxima in wind speed are called **jet streaks**. They produce distinct **entrance** and **exit** regions that help force **rising and sinking air**.

Idealized **straight-line jet streak** (Northern Hemisphere):

- **Left-exit region** → Upper-level **divergence**, rising motion, surface **low pressure deepening**.  
- **Right-entrance region** → Also favors divergence and ascent (in many classic setups).  
- **Right-exit & left-entrance** → Often associated with convergence and sinking motion.

These circulations are driven by **ageostrophic components** of the wind (departures from perfect geostrophic balance) as the jet accelerates or decelerates.

Practical effects:

- Enhanced **cloud development** and **precipitation** beneath upper-level divergence.
- Preferred regions for **cyclogenesis** and **severe weather outbreaks** when combined with moisture and instability.

**Related:**  
- [Storm Systems](/docs/storm_systems)  
- [Weather Patterns](/docs/weather_patterns)

---

## 📉 Meanders, Rossby Waves & Blocking

Jet streams rarely flow as perfect west-to-east ribbons. Instead, they form **large-scale meanders** known as **Rossby waves**.

Characteristics:

- **Ridges** – Poleward bulges of warm air, typically associated with fair weather and high pressure.
- **Troughs** – Equatorward dips of cold air, often associated with clouds, precipitation, and low pressure.

When these waves **amplify** and **slow down**, they can lead to:

- **Blocking patterns** – Persistent high-pressure systems that stall weather systems.  
- **Extended extremes** – Long-lasting heat waves, cold spells, or prolonged wet/dry periods.

**Related:**  
- [Weather Patterns](/docs/weather_patterns)  
- [Storm Systems](/docs/storm_systems)

---

## 🌦️ Jet Streams & Surface Weather

The position and strength of the jet stream strongly influence:

- **Storm tracks** – Cyclones tend to follow along, or just poleward of, the main jet.
- **Front evolution** – Jet streaks can intensify surface **cold fronts**, **warm fronts**, and **occlusions**.
- **Precipitation distribution** – Lift from jet-induced divergence helps organize cloud bands and rain shields.

Classic mid-latitude scenario:

- A **deep trough** aloft with a **polar jet streak** on its downstream side:
  - Enhances ascent ahead of the trough.
  - Supports surface **low-pressure deepening**.
  - Produces widespread clouds and precipitation along associated fronts.

**Related:**  
- [Weather Fronts](/docs/weather_fronts)  
- [Cloud Formations](/docs/clouds)

---

## ✈️ Jet Streams & Aviation

For aviation, jet streams matter because:

- Eastbound flights may **ride the jet** to save fuel and time.
- Westbound flights try to **avoid the core** to reduce headwinds.
- Strong jets often coincide with **clear-air turbulence**, especially near:
  - Jet streak entrance/exit regions.
  - Sharp vertical or horizontal wind shear zones.

Pilots watch **jet position forecasts** closely when planning routes and cruise altitudes.

---

## 🌡️ Seasonal & Climate Connections

Jet streams are not fixed; they shift and change:

- **Seasonal cycle**:
  - Stronger and more equatorward in **winter** (larger temperature contrasts).
  - Weaker and more poleward in **summer**.
- **Interannual variability**:
  - Patterns like **El Niño / La Niña** can shift jet latitude and strength, altering storm tracks.

Changes in **Arctic amplification** and global temperature gradients may influence long-term jet stream behavior, with implications for future **extreme weather**.

**Related:**  
- [Weather Patterns](/docs/weather_patterns)

---

## 🔗 See Also

- [Atmospheric Layers](/docs/atmospheric_layers)  
- [Weather Fronts](/docs/weather_fronts)  
- [Storm Systems](/docs/storm_systems)  
- [Cloud Formations](/docs/clouds)
$$
)
ON CONFLICT (slug) DO UPDATE
SET
  title = EXCLUDED.title,
  body = EXCLUDED.body,
  updated_at = NOW();

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
