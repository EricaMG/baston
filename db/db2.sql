-- 1. Crear la base de datos
CREATE DATABASE IF NOT EXISTS ubicacion_sensores;

-- 2. Usar la base de datos recién creada
USE ubicacion_sensores;

-- 3. Crear la tabla con las variables solicitadas
CREATE TABLE datos_sensores (
    id INT AUTO_INCREMENT PRIMARY KEY,              -- Campo ID autoincremental para cada registro
    longitud DECIMAL(10, 7) NOT NULL,               -- Campo para almacenar la longitud (ej. -73.935242)
    latitud DECIMAL(10, 7) NOT NULL,                -- Campo para almacenar la latitud (ej. 40.730610)
    posicion_ultrasonido DECIMAL(10, 2) NOT NULL,   -- Campo para almacenar la lectura del sensor ultrasonido
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP       -- Campo de fecha y hora que se genera automáticamente
);
