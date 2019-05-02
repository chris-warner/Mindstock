DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(
    id integer NOT NULL AUTO_INCREMENT,
    burger_name varchar(100) NOT NULL,
    devoured boolean DEFAULT false,
    PRIMARY KEY(id)
);
