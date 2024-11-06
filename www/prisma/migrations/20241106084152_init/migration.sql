-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Todo" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "datetime" TIMESTAMP(3) NOT NULL,
    "author" INTEGER NOT NULL,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_uuid_key" ON "User"("uuid");

-- AddForeignKey
ALTER TABLE "Todo" ADD CONSTRAINT "Todo_author_fkey" FOREIGN KEY ("author") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
