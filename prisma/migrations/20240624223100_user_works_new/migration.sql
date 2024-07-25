/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `Work` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Work_userId_key" ON "Work"("userId");
