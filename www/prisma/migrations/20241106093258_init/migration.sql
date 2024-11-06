-- DropForeignKey
ALTER TABLE "Todo" DROP CONSTRAINT "Todo_author_fkey";

-- AlterTable
ALTER TABLE "Todo" ALTER COLUMN "author" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "Todo" ADD CONSTRAINT "Todo_author_fkey" FOREIGN KEY ("author") REFERENCES "User"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;
