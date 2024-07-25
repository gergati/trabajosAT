/*
  Warnings:

  - You are about to drop the column `LugarTrabajo` on the `Work` table. All the data in the column will be lost.
  - Added the required column `lugarTrabajo` to the `Work` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Work" DROP COLUMN "LugarTrabajo",
ADD COLUMN     "lugarTrabajo" TEXT NOT NULL;
