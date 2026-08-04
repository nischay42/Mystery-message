/*
  Warnings:

  - You are about to drop the column `isAcceptingMessage` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "isAcceptingMessage",
ADD COLUMN     "isAcceptingMessages" BOOLEAN DEFAULT true;
