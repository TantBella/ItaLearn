-- CREATE TABLE ItaLearn (
--   id serial PRIMARY KEY,
--   swedish text UNIQUE NOT NULL,
--   italian text UNIQUE NOT NULL
-- );

-- ALTER TABLE ItaLearn
-- ADD COLUMN categories TEXT NOT NULL;


-- INSERT INTO ItaLearn (swedish, italian, categories )
--   VALUES ('katt', 'gato', 'djur'),('hund', 'cane', 'djur'), ('häst', 'cavallo', 'djur'), ('ko', 'mucca', 'djur'), ('fisk', 'pesce', 'djur'), ('åsna', 'asino', 'djur'), ('älg', 'alce', 'djur'), ('elefant', 'elefante', 'djur');

-- DROP TABLE italearn;

CREATE TABLE users (
  id serial PRIMARY KEY,
  us_name text UNIQUE NOT NULL,
  us_email text UNIQUE NOT NULL,
  us_password text NOT NULL,
  selectedAvatar text NOT NULL
);

-- ALTER TABLE users
-- ADD COLUMN selectedAvatar text NOT NULL;

CREATE TABLE italearncategories (
  categoryId serial PRIMARY KEY,
  category text NOT NULL
);

CREATE TABLE italearnwords (
  italearnId serial PRIMARY KEY,
  swedish text UNIQUE NOT NULL,
  italian text UNIQUE NOT NULL,
  category_id INT,
  FOREIGN KEY (category_id) REFERENCES italearncategories(categoryId)
);

INSERT INTO italearncategories (category) VALUES ('Djur'), ('Mat'), ('Kroppsdelar')
, ('OrdOchUttryck'),('Möbler');

INSERT INTO italearnwords (swedish, italian, category_id)
VALUES ('katt', 'gato', 1),('hund', 'cane', 1), ('häst', 'cavallo', 1), ('ko', 'mucca', 1), ('fisk', 'pesce', 1), ('åsna', 'asino', 1), ('älg', 'alce', 1), ('elefant', 'elefante', 1);

INSERT INTO italearnwords (swedish, italian, category_id)
VALUES ('äpple', 'mela', 2),('Jordgubbe', 'fragola', 2), ('gurka', 'cetriolo', 2), ('lök', 'cipolla', 2), ('päron', 'pera', 2), ('tomat', 'pomodoro', 2), ('melon', 'melone', 2), ('banan', 'banana', 2);

SELECT italearnwords.swedish, italearnwords.italian
FROM italearnwords
JOIN italearncategories ON italearnwords.category_id = italearncategories.categoryId
WHERE italearncategories.category = 'Djur';

SELECT italearnwords.swedish, italearnwords.italian
FROM italearnwords
JOIN italearncategories ON italearnwords.category_id = italearncategories.categoryId
WHERE italearncategories.category = 'Mat';
