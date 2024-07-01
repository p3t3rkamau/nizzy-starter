import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
}

const databaseUrl = process.env.POSTGRES_PRISMA_URL;
const directUrl = process.env.POSTGRES_URL_NON_POOLING;

export const db = globalThis.prisma || new PrismaClient({
  datasources: {
    db: {
      url: databaseUrl,
    }
  }
});

if (process.env.NODE_ENV !== 'production') globalThis.prisma = db;
