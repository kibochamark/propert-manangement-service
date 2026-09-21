/*
  Warnings:

  - The values [DEPOSIT] on the enum `ChargeType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ChargeType_new" AS ENUM ('RENT', 'WATER', 'RENTDEPOSIT', 'WATERDEPOSIT', 'TRASH', 'TRASHDEPOSIT', 'SECURITYDEPOSIT', 'SECURITY', 'SERVICEFEE', 'OTHER');
ALTER TABLE "Charge" ALTER COLUMN "type" TYPE "ChargeType_new" USING ("type"::text::"ChargeType_new");
ALTER TYPE "ChargeType" RENAME TO "ChargeType_old";
ALTER TYPE "ChargeType_new" RENAME TO "ChargeType";
DROP TYPE "public"."ChargeType_old";
COMMIT;
