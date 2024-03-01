/*
  Warnings:

  - Added the required column `kg` to the `CashOnOrder` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kg` to the `OnlineOrders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CashOnOrder" ADD COLUMN     "kg" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "OnlineOrders" ADD COLUMN     "kg" INTEGER NOT NULL;
