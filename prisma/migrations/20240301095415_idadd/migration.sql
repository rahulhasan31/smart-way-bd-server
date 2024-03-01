/*
  Warnings:

  - You are about to drop the `addToCart` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "addToCart" DROP CONSTRAINT "addToCart_UserID_fkey";

-- DropTable
DROP TABLE "addToCart";

-- CreateTable
CREATE TABLE "addtocart" (
    "id" TEXT NOT NULL,
    "productID" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "content" TEXT,
    "kg" INTEGER NOT NULL,
    "UserID" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "addtocart_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "addtocart" ADD CONSTRAINT "addtocart_UserID_fkey" FOREIGN KEY ("UserID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
