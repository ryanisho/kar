import { query } from "./db";
import { embedText } from "./embed";

const EMBEDDING_DIM = 384; // must match your model & pgvector column

async function fetchDocsToIndex() {
  // docs with no embedding yet OR updated after embedding
  const { rows } = await query<{
    id: number;
    slug: string;
    title: string;
    body: string;
  }>(
    `
    SELECT d.id, d.slug, d.title, d.body
    FROM docs d
    LEFT JOIN doc_embeddings e ON e.doc_id = d.id
    WHERE e.doc_id IS NULL
       OR d.updated_at > e.updated_at
    ORDER BY d.id ASC
    `
  );
  return rows;
}

export async function runIndexer() {
  console.log("[wf4] Indexer starting...");
  const docs = await fetchDocsToIndex();
  console.log(`[wf4] Found ${docs.length} docs to index`);

  for (const doc of docs) {
    const textForEmbedding = [doc.title, doc.body].join("\n\n");
    const embedding = await embedText(textForEmbedding);

    if (embedding.length !== EMBEDDING_DIM) {
      throw new Error(
        `Embedding dimension mismatch: expected ${EMBEDDING_DIM}, got ${embedding.length}`
      );
    }

    // pgvector wants a Postgres array literal or a vector cast
    const embeddingLiteral = `[${embedding.join(",")}]`;

    await query(
      `
      INSERT INTO doc_embeddings (doc_id, embedding, updated_at)
      VALUES ($1, $2::vector, NOW())
      ON CONFLICT (doc_id)
      DO UPDATE SET embedding = EXCLUDED.embedding, updated_at = NOW()
      `,
      [doc.id, embeddingLiteral]
    );

    console.log(`[wf4] Indexed doc id=${doc.id} slug=${doc.slug}`);
  }

  console.log("[wf4] Indexer done.");
}

// If you want to run standalone: `ts-node src/indexer.ts`
if (require.main === module) {
  runIndexer().then(
    () => process.exit(0),
    (err) => {
      console.error(err);
      process.exit(1);
    }
  );
}
