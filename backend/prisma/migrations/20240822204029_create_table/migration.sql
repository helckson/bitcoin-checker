-- CreateTable
CREATE TABLE "CachedBitcoinPrice" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL,
    "price" REAL NOT NULL,
    "cachedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "CachedBitcoinPrice_date_key" ON "CachedBitcoinPrice"("date");
