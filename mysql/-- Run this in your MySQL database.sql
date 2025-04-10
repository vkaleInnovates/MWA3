-- Run this in your MySQL database
CREATE DATABASE avhan_db;

USE avhan_db;

CREATE TABLE registrations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    event VARCHAR(50),
    registered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
