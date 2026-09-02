CREATE DATABASE IF NOT EXISTS nonename_db
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

SHOW DATABASES;

USE nonename_db;

CREATE TABLE users(
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(100) NOT NULL,
    user_lastname VARCHAR(100) NOT NULL,
    user_cpf CHAR(11),
    user_birthdate DATE,
    user_gender VARCHAR(30),
    user_email VARCHAR(50) NOT NULL,
    user_password VARCHAR(100) NOT NULL,
    user_type ENUM('admin', 'student', 'guest') DEFAULT 'guest'

);


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
    user_name,
    user_lastname,
    user_cpf,
    user_birthdate,
    user_gender,
    user_email,
    user_password,
    user_type
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