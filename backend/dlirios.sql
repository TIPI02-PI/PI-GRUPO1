
-- ===================================================
-- Drop the database if it already exists to avoid conflicts when creating it again.
-- ===================================================
DROP DATABASE IF EXISTS dlirios_db;


CREATE DATABASE IF NOT EXISTS dlirios_db
DEFAULT CHARACTER SET utf8mb4
DEFAULT COLLATE utf8mb4_unicode_ci;

USE dlirios_db;

--  ==============================================
-- Drop the tables if they already exists to avoid conflicts when creating them again.
--  ==============================================
DROP TABLE IF EXISTS book_languages;
DROP TABLE IF EXISTS books;


CREATE TABLE IF NOT EXISTS book_languages (
  language_id INT AUTO_INCREMENT PRIMARY KEY,

  language_name VARCHAR(100) NOT NULL,
  -- I think is a good idea to use a language code too. What do you think?
  language_tag VARCHAR(35) NOT NULL UNIQUE
  --  Recommended to use BCP 47 codes for language representation


)


CREATE TABLE IF NOT EXISTS books_tb (
  book_id INT AUTO_INCREMENT PRIMARY KEY,
  -- Book Identification
  book_isbn VARCHAR(20) NOT NULL UNIQUE,
  book_title VARCHAR(255) NOT NULL,
  book_subtitle VARCHAR(255) DEFAULT NULL,
  -- Book Publication Information
  book_author VARCHAR(255) NOT NULL,
  book_publisher VARCHAR(255) DEFAULT NULL,
  book_year_original_publication SMALLINT DEFAULT NULL,
  book_year_edition_publication SMALLINT DEFAULT NULL,
  -- Book cover
  book_url_cover VARCHAR(500) DEFAULT NULL,
  -- Book characteristics
  book_format VARCHAR(50) DEFAULT NULL,
  book_page_number INT DEFAULT NULL,
  book_genre VARCHAR(100) DEFAULT NULL,
  -- Book Timestamps
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  -- Foreign Keys
  -- Book Language Information
  language_id INT NOT NULL,

  CONSTRAINT fk_books_languages
    FOREIGN KEY (language_id)
    REFERENCES book_languages(language_id)
    ON UPDATE CASCADE
    ON DELETE RESTRICT

);

/*ENGINE=InnoDB 
DEFAULT CHARSET=utf8mb4 
COLLATE=utf8mb4_unicode_ci;
*/


-- ==============================================
--  INSERT TABLES WITH SOME SAMPLE DATA
-- ==============================================

INSERT INTO book_languages (
    language_name,
    language_tag
)
VALUES
    ('Português (Brasil)', 'pt-BR'),
    ('Português (Portugal)', 'pt-PT'),
    ('English', 'en'),
    ('English (United States)', 'en-US'),
    ('English (United Kingdom)', 'en-GB'),
    ('Español', 'es'),
    ('Français', 'fr'),
    ('Deutsch', 'de'),
    ('Italiano', 'it'),
    ('日本語', 'ja');



INSERT INTO books_tb (
    book_isbn,
    book_title,
    book_subtitle,
    book_author,
    book_publisher,
    book_year_original_publication,
    book_year_edition_publication,
    book_url_cover,
    book_format,
    book_page_number,
    book_genre,
    language_id
)
VALUES

(
    '9788535902778',
    'Dom Casmurro',
    'Obra Prima da Literatura Brasileira',
    'Machado de Assis',
    'Companhia das Letras',
    1899,
    2019,
    'https://exemplo.com/capa-dom-casmurro.jpg',
    'Físico',
    256,
    'Romance',
    (SELECT language_id
     FROM book_languages
     WHERE language_tag = 'pt-BR')
),

(
    '9788535914849',
    'O Cortiço',
    NULL,
    'Aluísio Azevedo',
    'Penguin Classics',
    1890,
    2013,
    'https://exemplo.com/capa-o-cortico.jpg',
    'E-book',
    304,
    'Naturalismo',
    (SELECT language_id
     FROM book_languages
     WHERE language_tag = 'pt-BR')
);




SHOW DATABASES;

USE dlirios_db;

CREATE TABLE IF NOT EXISTS user_tb (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    user_first_name VARCHAR(100) NOT NULL,
    user_last_name VARCHAR(255) NOT NULL,
    user_cpf CHAR(11) UNIQUE NOT NULL,
    user_birth_date DATE NOT NULL,
    user_genre ENUM("male", "female", "unspecified" ) NOT NULL,

    user_address_cep VARCHAR(10) NOT NULL,
    user_address_patio VARCHAR(255) NOT NULL,
    user_address_number VARCHAR(20) NOT NULL,
    user_address_complement VARCHAR(255) NULL,
    user_address_reference_point VARCHAR(255) NULL,
    user_address_district VARCHAR(100) NOT NULL,
    user_address_city VARCHAR(100) NOT NULL,
    user_address_state VARCHAR(100) NOT NULL,
    user_address_federal_unit VARCHAR(2) NOT NULL,

    user_email VARCHAR(255) UNIQUE NOT NULL,
    user_password VARCHAR(255) NULL,
    user_role ENUM("admin", "user") NOT NULL DEFAULT "user",
    user_auth_provider ENUM("local","google") NOT NULL DEFAULT "local",

    user_google_id VARCHAR(255) UNIQUE NULL,
    user_photo_url VARCHAR(255) NULL,
    user_created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
 
-- =================================================
-- Does not delete these queries, everything allright? 
-- =================================================

SHOW TABLES;

USE dlirios_db;
SELECT * FROM user_tb

SHOW CREATE TABLE user_tb;
DROP TABLE user_tb;



-- -- ALTER TABLE user_tb ADD CONSTRAINT FK_user_tb_2
-- --     FOREIGN KEY (address_district)
-- --     REFERENCES associative_user_newsletter (id_user_vestibular);
 
-- -- ALTER TABLE user_tb ADD CONSTRAINT FK_user_tb_3
-- --     FOREIGN KEY (password)
-- --     REFERENCES associative_user_ia_chat (id_user_vestibular);




-- -- );


CREATE TABLE author (
    author_id INT AUTO_INCREMENT PRIMARY KEY,
    author_first_name VARCHAR(100) NOT NULL,
    author_last_name VARCHAR(100) NOT NULL,
    author_birthdate DATE NOT NULL

);

-- CREATE TABLE book(
--     book_id INT AUTO_INCREMENT PRIMARY KEY,
--     book_title VARCHAR(100) NOT NULL,
--     book_release_date DATE NOT NULL,
--     fk_author_id INT NOT NULL, 

--     FOREIGN KEY (fk_author_id)
--         REFERENCES author(author_id)

-- );



USE dlirios_db;

-- INSERT INTO users (
--     user_first_name,
--     user_last_name,
--     user_cpf,
--     user_birth_date,
--     user_genre,

--     user_address_cep,
--     user_address_patio,
--     user_address_number,
--     user_address_complement,
--     user_address_reference_point,
--     user_address_district,
--     user_address_city,
--     user_address_state,
--     user_address_federal_unit,

--     user_email,
--     user_password,
--     user_role,
--     user_auth_provider,

--     user_google_id,
--     user_photo_url,
--     user_created_at

-- )
-- VALUES
-- ('Gabriel', 'Silva', '12345678901', '2002-05-15', 'Masculino', 'gabriel@email.com', '123456', 'admin'),

-- ('Maria', 'Santos', '23456789012', '2001-08-22', 'Feminino', 'maria@email.com', 'maria123', 'student'),

-- ('João', 'Oliveira', '34567890123', '2000-03-10', 'Masculino', 'joao@email.com', 'joao123', 'student'),

-- ('Ana', 'Souza', '45678901234', '2003-11-28', 'Feminino', 'ana@email.com', 'ana123', 'student'),

-- ('Carlos', 'Costa', '56789012345', '1999-07-19', 'Masculino', 'carlos@email.com', 'carlos123', 'guest');

-- INSERT INTO author (
--     author_first_name,
--     author_last_name,
--     author_birthdate
-- )
-- VALUES
-- ('George', 'Orwell', '1903-06-25'),

-- ('J.K.', 'Rowling', '1965-07-31'),

-- ('J.R.R.', 'Tolkien', '1892-01-03'),

-- ('Machado', 'de Assis', '1839-06-21'),

-- ('Stephen', 'King', '1947-09-21');

-- INSERT INTO book (
--     book_title,
--     book_release_date,
--     fk_author_id
-- )
-- VALUES
-- ('1984', '1949-06-08', 1),

-- ('A Revolução dos Bichos', '1945-08-17', 1),

-- ('Harry Potter e a Pedra Filosofal', '1997-06-26', 2),

-- ('Harry Potter e a Câmara Secreta', '1998-07-02', 2),

-- ('O Hobbit', '1937-09-21', 3),

-- ('O Senhor dos Anéis: A Sociedade do Anel', '1954-07-29', 3),

-- ('Dom Casmurro', '1899-01-01', 4),

-- ('Memórias Póstumas de Brás Cubas', '1881-01-01', 4),

-- ('O Iluminado', '1977-01-28', 5),

-- ('It: A Coisa', '1986-09-15', 5);
