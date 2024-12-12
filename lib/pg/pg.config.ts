import { createPool } from "@vercel/postgres";

export const db = createPool({
  connectionString: process.env.EXPO_PUBLIC_POSTGRES_URL,
});
