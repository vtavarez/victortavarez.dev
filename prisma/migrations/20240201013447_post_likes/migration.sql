/*
  Warnings:

  - The primary key for the `PostLikes` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PostLikes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "likes" INTEGER NOT NULL DEFAULT 0
);
INSERT INTO "new_PostLikes" ("id", "likes") SELECT "id", "likes" FROM "PostLikes";
DROP TABLE "PostLikes";
ALTER TABLE "new_PostLikes" RENAME TO "PostLikes";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
