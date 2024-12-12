// https://www.prisma.io/docs/orm/more/help-and-troubleshooting/help-articles/nextjs-prisma-client-dev-practices
import { Prisma, PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prismaClient = globalThis.prismaGlobal ?? prismaClientSingleton();

export { Prisma, prismaClient };

if (process.env.NODE_ENV !== "production")
  globalThis.prismaGlobal = prismaClient;
