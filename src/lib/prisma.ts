import { PrismaClient } from "../generated/prisma/client";

export const prisma = new PrismaClient({
  log: ["query"],
});

async function test() {
  const dbPath = await prisma.$queryRaw`PRAGMA database_list;`;
  console.log(dbPath);
}

test();
