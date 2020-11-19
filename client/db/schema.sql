
DROP DATABASE IF EXISTS wdysd;

CREATE DATABASE wdysd;

USE wdysd;

CREATE TABLE descriptives (
  id int NOT NULL AUTO_INCREMENT,
  adjone varchar(255) NOT NULL,
  adjtwo varchar(255) NOT NULL,
  customerbase varchar(255) NOT NULL,
  PRIMARY KEY (ID)
);

/*  Execute this file from the command line by typing:
--  *    mysql -u root < schema.sql
 *  to create the database and the tables.*/