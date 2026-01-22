CREATE TABLE IF NOT EXISTS clientes(
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	nome TEXT NOT NULL,
	telefone NUMERIC);
	
--ALTER TABLE clientes ADD COLUMN email TEXT;

--INSERT INTO clientes (nome, telefone, email) VALUES ('Bernardo', 31994691759,'bernardo@email.com');

--SELECT * FROM clientes;

-- SELECT nome FROM clientes;