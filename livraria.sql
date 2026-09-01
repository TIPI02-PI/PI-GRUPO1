CREATE DATABASE IF NOT EXISTS nonename_db
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

SHOW DATABASES;

USE nonename_db;

CREATE TABLE student(
    student_id INT AUTO_INCREMENT PRIMARY KEY,
    student_name VARCHAR(100) NOT NULL,
    student_lastname VARCHAR(100) NOT NULL,
    student_cpf CHAR(11),
    student_birthdate DATE,
    student_gender VARCHAR(30),
    student_email VARCHAR(50) NOT NULL,
    student_password VARCHAR(100) NOT NULL

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
        REFERENCES authors_book(author_id)

);