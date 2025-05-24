/*
  Warnings:

  - Added the required column `userId` to the `sendMessage` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "sendMessage" DROP CONSTRAINT "sendMessage_msgId_fkey";

-- AlterTable
ALTER TABLE "sendMessage" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "sendMessage" ADD CONSTRAINT "sendMessage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "userChats"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
