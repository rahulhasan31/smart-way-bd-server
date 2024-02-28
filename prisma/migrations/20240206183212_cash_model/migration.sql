/*
  Warnings:

  - Added the required column `orderStatus` to the `OnlineOrders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OnlineOrders" ADD COLUMN     "orderStatus" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "CashOnOrder" (
    "id" TEXT NOT NULL,
    "productID" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "productpPrice" INTEGER NOT NULL,
    "productImageUrl" TEXT NOT NULL,
    "productContent" TEXT,
    "paymentMethod" TEXT NOT NULL,
    "userNumber" INTEGER NOT NULL,
    "userAddress" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "orderStatus" TEXT NOT NULL,
    "UserID" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CashOnOrder_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CashOnOrder" ADD CONSTRAINT "CashOnOrder_UserID_fkey" FOREIGN KEY ("UserID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
