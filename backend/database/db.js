const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database(':memory:');

db.serialize(() => {
    db.run('CREATE TABLE produtos (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, descricao TEXT, preco REAL, codigoBarras TEXT)');
    db.run('CREATE TABLE fornecedores (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, cnpj TEXT, endereco TEXT, contato TEXT)');
    db.run('CREATE TABLE produto_fornecedor (produtoId INTEGER, fornecedorId INTEGER)');
});

module.exports = db;
