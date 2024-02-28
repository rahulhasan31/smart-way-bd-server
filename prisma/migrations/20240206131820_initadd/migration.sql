/*
  Warnings:

  - You are about to drop the `OnlineOrder` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "OnlineOrder" DROP CONSTRAINT "OnlineOrder_UserID_fkey";

-- DropTable
DROP TABLE "OnlineOrder";

-- CreateTable
CREATE TABLE "OnlineOrders" (
    "id" TEXT NOT NULL,
    "productID" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "productpPrice" INTEGER NOT NULL,
    "productImageUrl" TEXT NOT NULL,
    "productContent" TEXT,
    "paymentMethod" TEXT NOT NULL,
    "paymentNumber" INTEGER NOT NULL,
    "payTrxID" TEXT NOT NULL,
    "userNumber" INTEGER NOT NULL,
    "userAddress" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "UserID" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OnlineOrders_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "OnlineOrders" ADD CONSTRAINT "OnlineOrders_UserID_fkey" FOREIGN KEY ("UserID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
