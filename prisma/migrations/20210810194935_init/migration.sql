-- CreateTable
CREATE TABLE "Banner" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "href" TEXT NOT NULL,
    "images" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "oldPrice" INTEGER,
    "images" TEXT NOT NULL,
    "categoryId" INTEGER,
    FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Category" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ProductToTag" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    FOREIGN KEY ("A") REFERENCES "Product" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("B") REFERENCES "Tag" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Banner.name_unique" ON "Banner"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_ProductToTag_AB_unique" ON "_ProductToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductToTag_B_index" ON "_ProductToTag"("B");
