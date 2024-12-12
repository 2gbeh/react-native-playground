// import { db } from "@/lib/pg/pg.config";

// export class AccountService {
//   static async create() {
//     const { rows } = await db.sql`CREATE TABLE fedora_accounts (
//       brand VARCHAR(255),
//       model VARCHAR(255),
//       year INT

//         id           INT           @id @default(autoincrement())
//   avatar       VARCHAR(255)?       @db.VarChar
//   name         VARCHAR(255)        @unique @db.VarChar
//   displayName  VARCHAR(255)?       @db.VarChar
//   phone        VARCHAR(255)?       @db.VarChar
//   bio          VARCHAR(255)?       @db.VarChar
//   isFavorite   Boolean       @default(false) @db.Boolean
//   isPrivate    Boolean       @default(false) @db.Boolean
//   // common
//   createdAt    DateTime      @default(now())
//   updatedAt    DateTime      @updatedAt
//   deletedAt    DateTime?
//     );`;
//   }

//   static async getAll() {
//     const { rows } = await db.sql`SELECT * FROM shopera_products;`;
//     return rows;
//   }
// }
