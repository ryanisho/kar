import pg from "pg";

const { Pool } = pg;

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL ?? "postgres://postgres:wf4pass@localhost:5432/wf4",
});

export async function query<T = any>(text: string, params?: any[]): Promise<{ rows: T[] }> {
  const res = await pool.query<T>(text, params);
  return res;
}
