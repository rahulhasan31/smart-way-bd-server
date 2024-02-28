-- CreateTable
CREATE TABLE "OnlineOrder" (
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

    CONSTRAINT "OnlineOrder_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "OnlineOrder" ADD CONSTRAINT "OnlineOrder_UserID_fkey" FOREIGN KEY ("UserID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
