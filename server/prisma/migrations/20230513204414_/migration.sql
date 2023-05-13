/*
  Warnings:

  - You are about to drop the `_AffectedUsers` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `affectedUserId` to the `Ticket` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_AffectedUsers" DROP CONSTRAINT "_AffectedUsers_A_fkey";

-- DropForeignKey
ALTER TABLE "_AffectedUsers" DROP CONSTRAINT "_AffectedUsers_B_fkey";

-- AlterTable
ALTER TABLE "Ticket" ADD COLUMN     "affectedUserId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "_AffectedUsers";

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_affectedUserId_fkey" FOREIGN KEY ("affectedUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
