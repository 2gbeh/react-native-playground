import { vercelPgPool } from "@/lib/vercel/postgres.config";

// MVP *auth, *lists, users, patients, apppointments

export class BrandsApi {
  static async getAll() {
    const { rows } = await vercelPgPool.sql`SELECT * FROM shopera_brands;`;
    return rows || [];
  }
}
