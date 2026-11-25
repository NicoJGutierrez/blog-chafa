-- 1. Un usuario por cada autor distinto
INSERT INTO "users" ("username")
SELECT DISTINCT "author"
FROM "blogs"
ON CONFLICT ("username") DO NOTHING;

-- 2. Asignar el id correspondiente a cada blog
UPDATE "blogs" b
SET "user_id" = u."id"
FROM "users" u
WHERE b."author" = u."username";