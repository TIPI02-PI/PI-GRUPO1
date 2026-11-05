
CREATE TABLE user_tb (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    address VARCHAR(255),
    birth_date DATE,
    genre VARCHAR(20),
    cpf VARCHAR(14) UNIQUE,
    email VARCHAR(150) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    google VARCHAR(100),
    facebook VARCHAR(100),
    x VARCHAR(100),
    address_cep VARCHAR(10),
    address_patio VARCHAR(150),
    address_number VARCHAR(20),
    address_district VARCHAR(100),
    address_city VARCHAR(100),
    address_state VARCHAR(50),
    address_federal_unit VARCHAR(2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE books (
    book_id INT AUTO_INCREMENT PRIMARY KEY,
    book_isbn VARCHAR(20) UNIQUE,
    book_title VARCHAR(255) NOT NULL,
    book_author VARCHAR(150) NOT NULL,
    book_publisher VARCHAR(100),
    book_year_original_publication INT,
    book_year_edition_publication INT,
    book_url_cover VARCHAR(255),
    book_subtitle VARCHAR(255),
    book_language VARCHAR(50),
    book_format VARCHAR(50),
    book_page_number INT,
    book_genre VARCHAR(100)
);

CREATE TABLE education_institute_tb (
    education_institute_id INT AUTO_INCREMENT PRIMARY KEY,
    education_institute_name VARCHAR(150) NOT NULL,
    education_institute_state VARCHAR(50)
);

CREATE TABLE vestibular_tb (
    vestibular_id INT AUTO_INCREMENT PRIMARY KEY,
    vestibular_name VARCHAR(150) NOT NULL,
    vestibular_date DATE,
    vestibular_exemption VARCHAR(50),
    vestibular_state_origin VARCHAR(50),
    vestibular_education_institute VARCHAR(150)
);

CREATE TABLE course_interest (
    course_id INT AUTO_INCREMENT PRIMARY KEY,
    course_name VARCHAR(150) NOT NULL,
    field_of_knowledge_course VARCHAR(100),
    fk_user_id INT,
    CONSTRAINT fk_course_user FOREIGN KEY (fk_user_id) REFERENCES user_tb(id) ON DELETE CASCADE
);

CREATE TABLE news (
    news_id INT AUTO_INCREMENT PRIMARY KEY,
    news_url VARCHAR(255),
    news_title VARCHAR(255) NOT NULL,
    news_subtitle VARCHAR(255),
    news_author VARCHAR(100),
    news_date DATE
);

CREATE TABLE newsletters (
    newsletter_id INT AUTO_INCREMENT PRIMARY KEY,
    newsletter_title VARCHAR(255) NOT NULL,
    newsletter_content TEXT,
    newsletter_date_created DATE,
    newsletter_date_release DATE
);

CREATE TABLE review (
    review_id INT AUTO_INCREMENT PRIMARY KEY,
    review_rating DOUBLE NOT NULL,
    review_title VARCHAR(150),
    review_description TEXT
);

CREATE TABLE help_desk_operator (
    help_desk_operator_id INT AUTO_INCREMENT PRIMARY KEY
);

CREATE TABLE support (
    support_id INT AUTO_INCREMENT PRIMARY KEY,
    support_protocol VARCHAR(50) UNIQUE,
    support_title VARCHAR(150) NOT NULL,
    support_description TEXT
);

CREATE TABLE ia_chats (
    ia_chat_id INT AUTO_INCREMENT PRIMARY KEY
);

-- TABELAS ASSOCIATIVAS (Relacionamentos NxM)

CREATE TABLE associative_vestibular_book (
    associative_vestibular_book_id INT AUTO_INCREMENT PRIMARY KEY,
    fk_vestibular_id INT NOT NULL,
    fk_book_id INT NOT NULL,
    CONSTRAINT fk_avb_vestibular FOREIGN KEY (fk_vestibular_id) REFERENCES vestibular_tb(vestibular_id) ON DELETE CASCADE,
    CONSTRAINT fk_avb_book FOREIGN KEY (fk_book_id) REFERENCES books(book_id) ON DELETE CASCADE
);

CREATE TABLE associative_vestibular_education_institute (
    vestibular_education_institute_id INT AUTO_INCREMENT PRIMARY KEY,
    fk_vestibular_id INT NOT NULL,
    fk_education_institute_id INT NOT NULL,
    CONSTRAINT fk_avei_vestibular FOREIGN KEY (fk_vestibular_id) REFERENCES vestibular_tb(vestibular_id) ON DELETE CASCADE,
    CONSTRAINT fk_avei_institute FOREIGN KEY (fk_education_institute_id) REFERENCES education_institute_tb(education_institute_id) ON DELETE CASCADE
);

CREATE TABLE associative_user_vestibular (
    id_user_vestibular INT AUTO_INCREMENT PRIMARY KEY,
    fk_user_id INT NOT NULL,
    fk_vestibular_id INT NOT NULL,
    CONSTRAINT fk_auv_user FOREIGN KEY (fk_user_id) REFERENCES user_tb(id) ON DELETE CASCADE,
    CONSTRAINT fk_auv_vestibular FOREIGN KEY (fk_vestibular_id) REFERENCES vestibular_tb(vestibular_id) ON DELETE CASCADE
);

CREATE TABLE associative_user_newsletters (
    id_user_newsletter INT AUTO_INCREMENT PRIMARY KEY,
    fk_user_id INT NOT NULL,
    fk_newsletter_id INT NOT NULL,
    CONSTRAINT fk_aun_user FOREIGN KEY (fk_user_id) REFERENCES user_tb(id) ON DELETE CASCADE,
    CONSTRAINT fk_aun_newsletter FOREIGN KEY (fk_newsletter_id) REFERENCES newsletters(newsletter_id) ON DELETE CASCADE
);

CREATE TABLE associative_user_review (
    id_user_review INT AUTO_INCREMENT PRIMARY KEY,
    fk_user_id INT NOT NULL,
    fk_review_id INT NOT NULL,
    CONSTRAINT fk_aur_user FOREIGN KEY (fk_user_id) REFERENCES user_tb(id) ON DELETE CASCADE,
    CONSTRAINT fk_aur_review FOREIGN KEY (fk_review_id) REFERENCES review(review_id) ON DELETE CASCADE
);

CREATE TABLE associative_user_support (
    id_user_support INT AUTO_INCREMENT PRIMARY KEY,
    fk_user_id INT NOT NULL,
    fk_support_id INT NOT NULL,
    CONSTRAINT fk_aus_user FOREIGN KEY (fk_user_id) REFERENCES user_tb(id) ON DELETE CASCADE,
    CONSTRAINT fk_aus_support FOREIGN KEY (fk_support_id) REFERENCES support(support_id) ON DELETE CASCADE
);

CREATE TABLE associative_user_ia_chat (
    id_user_ia_chat INT AUTO_INCREMENT PRIMARY KEY,
    fk_user_id INT NOT NULL,
    fk_ia_chat_id INT NOT NULL,
    CONSTRAINT fk_auic_user FOREIGN KEY (fk_user_id) REFERENCES user_tb(id) ON DELETE CASCADE,
    CONSTRAINT fk_auic_chat FOREIGN KEY (fk_ia_chat_id) REFERENCES ia_chats(ia_chat_id) ON DELETE CASCADE
);
