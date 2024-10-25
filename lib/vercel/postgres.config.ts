import { createPool } from "@vercel/postgres";

export const vercelPgPool = createPool({
  connectionString: process.env.EXPO_PUBLIC_POSTGRES_URL,
});
