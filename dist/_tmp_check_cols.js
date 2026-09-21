"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const adapter_pg_1 = require("@prisma/adapter-pg");
const client_1 = require("./generated/prisma/client");
require("dotenv/config");
const adapter = new adapter_pg_1.PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new client_1.PrismaClient({ adapter });
async function main() {
    const cols = await prisma.$queryRawUnsafe(`
    SELECT table_name, column_name FROM information_schema.columns
    WHERE table_name IN ('Tenancy','House','Charge','Payment')
    ORDER BY table_name, column_name;
  `);
    console.log(JSON.stringify(cols, null, 2));
    await prisma.$disconnect();
}
main();
//# sourceMappingURL=_tmp_check_cols.js.map