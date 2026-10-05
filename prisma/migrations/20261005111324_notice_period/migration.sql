-- AlterTable
ALTER TABLE "Property" ADD COLUMN     "defaultNoticePeriodDays" INTEGER NOT NULL DEFAULT 30;

-- AlterTable
ALTER TABLE "Tenancy" ADD COLUMN     "noticePeriodDays" INTEGER NOT NULL DEFAULT 30;
