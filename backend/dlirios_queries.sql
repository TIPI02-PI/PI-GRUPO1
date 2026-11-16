


-- =================================================
-- Does not delete these queries, everything allright? 
-- =================================================
USE dlirios_db;

SHOW TABLES;



--  ============================================
-- Some queries
--  ============================================



SELECT *
FROM book_languages;

SELECT *
FROM book_languages
WHERE language_tag = 'pt-BR';

SELECT *
FROM book_languages
WHERE language_name = "English"


SELECT 
    b.book_id,
    b.book_isbn,
    b.book_title,
    b.book_subtitle,
    b.book_author,
    b.book_publisher,
    b.book_year_original_publication,
    b.book_year_edition_publicaation,
    b.book_url_cover,
    b.book_format,
    b.book_page_number,
    b.book_genre,
    bl.language_name,
    bl.language_tag
FROM book_tb as b

INNER JOIN book_languages AS bl
    ON b.language_id = bl.language_id

ORDER BY b.book_id; 


SELECT *
FROM user_tb;


