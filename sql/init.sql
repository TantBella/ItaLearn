CREATE TABLE users (
  id serial PRIMARY KEY,
  us_name text UNIQUE NOT NULL,
  us_email text UNIQUE NOT NULL,
  us_password text NOT NULL
);

-- INSERT INTO users ('us_name', 'us_email', 'us_password')
--   VALUES ('Bella', 'email', 'password');


CREATE TABLE ItaLearn (
  id serial PRIMARY KEY,
  swedish text UNIQUE NOT NULL,
  italian text UNIQUE NOT NULL
);

ALTER TABLE ItaLearn
ADD COLUMN categories TEXT NOT NULL;


INSERT INTO ItaLearn (swedish, italian, categories )
  VALUES ('katt', 'gato', 'djur'),('hund', 'cane', 'djur'), ('häst', 'cavallo', 'djur'), ('ko', 'mucca', 'djur'), ('fisk', 'pesce', 'djur'), ('åsna', 'asino', 'djur'), ('älg', 'alce', 'djur'), ('elefant', 'elefante', 'djur');
