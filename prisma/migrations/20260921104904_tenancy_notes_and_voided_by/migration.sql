-- DropForeignKey
ALTER TABLE "House" DROP CONSTRAINT "House_propertyId_fkey";

-- AlterTable
ALTER TABLE "Charge" ADD COLUMN     "voidedById" TEXT;

-- AlterTable
ALTER TABLE "Payment" ADD COLUMN     "voidedById" TEXT;

-- AlterTable
ALTER TABLE "Tenancy" ADD COLUMN     "notes" TEXT,
ADD COLUMN     "openingWaterReading" DECIMAL(65,30);

-- AddForeignKey
ALTER TABLE "House" ADD CONSTRAINT "House_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Charge" ADD CONSTRAINT "Charge_voidedById_fkey" FOREIGN KEY ("voidedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_voidedById_fkey" FOREIGN KEY ("voidedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
