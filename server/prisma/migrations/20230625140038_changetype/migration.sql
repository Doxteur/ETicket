/*
  Warnings:

  - The `dateLimit` column on the `Ticket` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Ticket" DROP COLUMN "dateLimit",
ADD COLUMN     "dateLimit" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
