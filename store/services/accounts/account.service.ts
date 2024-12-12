import { db } from "@/lib/pg/pg.config";

export class AccountService {
  static async getAll() {
    const { rows } = await db.sql`SELECT * FROM shopera_products;`;
    return rows;
  }
}
