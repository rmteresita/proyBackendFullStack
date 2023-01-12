CREATE DATABASE IF NOT EXISTS farmacia;
USE farmacia;

CREATE TABLE productos (
    id INT (10) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR (45) DEFAULT NULL,
    precio INT (5) DEFAULT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE clientes (
    id INT (10) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR (45) DEFAULT NULL,
    direccion VARCHAR (60) DEFAULT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE empleados (
    id INT (10) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR (45) DEFAULT NULL,
    turno VARCHAR (15) DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE productos;

INSERT INTO productos VALUES 
    (001, 'Tribedoce', 26),
    (002, 'CepoBrom', 68),
    (003, 'OxitalC', 75),
    (004, 'Algidol', 20);