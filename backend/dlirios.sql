CREATE DATABASE IF NOT EXISTS dlirios_db
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;


-- Deleting database.
-- <<<<<<<< HEAD:backend/dlirios_db.sql
DROP DATABASE IF EXISTS dlirios_db;
========
DROP DATABASE IF EXISTS nomename_db;
-- >>>>>>>> 43d2ee58b668580f2545cf1d10ea05e8256ba628:backend/livraria.sql

SHOW DATABASES;

USE dlirios_db;

CREATE TABLE user_tb (
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
 
SHOW TABLES;

USE dlirios_db;
SELECT * FROM user_tb

SHOW CREATE TABLE user_tb;
DROP TABLE user_tb;





-- ALTER TABLE user_tb ADD CONSTRAINT FK_user_tb_2
--     FOREIGN KEY (address_district)
--     REFERENCES associative_user_newsletter (id_user_vestibular);
 
-- ALTER TABLE user_tb ADD CONSTRAINT FK_user_tb_3
--     FOREIGN KEY (password)
--     REFERENCES associative_user_ia_chat (id_user_vestibular);




-- );


CREATE TABLE author (
    author_id INT AUTO_INCREMENT PRIMARY KEY,
    author_first_name VARCHAR(100) NOT NULL,
    author_last_name VARCHAR(100) NOT NULL,
    author_birthdate DATE NOT NULL

);

CREATE TABLE book(
    book_id INT AUTO_INCREMENT PRIMARY KEY,
    book_title VARCHAR(100) NOT NULL,
    book_release_date DATE NOT NULL,
    fk_author_id INT NOT NULL, 

    FOREIGN KEY (fk_author_id)
        REFERENCES author(author_id)

);

USE nonename_db;

INSERT INTO users (
    user_first_name,
    user_last_name,
    user_cpf,
    user_birth_date,
    user_genre,

    user_address_cep,
    user_address_patio,
    user_address_number,
    user_address_complement,
    user_address_reference_point,
    user_address_district,
    user_address_city,
    user_address_state,
    user_address_federal_unit,

    user_email,
    user_password,
    user_role,
    user_auth_provider,

    user_google_id,
    user_photo_url,
    user_created_at

)
VALUES
('Gabriel', 'Silva', '12345678901', '2002-05-15', 'Masculino', 'gabriel@email.com', '123456', 'admin'),

('Maria', 'Santos', '23456789012', '2001-08-22', 'Feminino', 'maria@email.com', 'maria123', 'student'),

('João', 'Oliveira', '34567890123', '2000-03-10', 'Masculino', 'joao@email.com', 'joao123', 'student'),

('Ana', 'Souza', '45678901234', '2003-11-28', 'Feminino', 'ana@email.com', 'ana123', 'student'),

('Carlos', 'Costa', '56789012345', '1999-07-19', 'Masculino', 'carlos@email.com', 'carlos123', 'guest');

INSERT INTO author (
    author_first_name,
    author_last_name,
    author_birthdate
)
VALUES
('George', 'Orwell', '1903-06-25'),

('J.K.', 'Rowling', '1965-07-31'),

('J.R.R.', 'Tolkien', '1892-01-03'),

('Machado', 'de Assis', '1839-06-21'),

('Stephen', 'King', '1947-09-21');

INSERT INTO book (
    book_title,
    book_release_date,
    fk_author_id
)
VALUES
('1984', '1949-06-08', 1),

('A Revolução dos Bichos', '1945-08-17', 1),

('Harry Potter e a Pedra Filosofal', '1997-06-26', 2),

('Harry Potter e a Câmara Secreta', '1998-07-02', 2),

('O Hobbit', '1937-09-21', 3),

('O Senhor dos Anéis: A Sociedade do Anel', '1954-07-29', 3),

('Dom Casmurro', '1899-01-01', 4),

('Memórias Póstumas de Brás Cubas', '1881-01-01', 4),

('O Iluminado', '1977-01-28', 5),

('It: A Coisa', '1986-09-15', 5);