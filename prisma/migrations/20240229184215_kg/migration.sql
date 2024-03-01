/*
  Warnings:

  - Added the required column `kg` to the `addToCart` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "addToCart" ADD COLUMN     "kg" INTEGER NOT NULL;
