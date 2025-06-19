const db = require('../database/db');

exports.getAll = (req, res) => {
    db.all('SELECT * FROM fornecedores', [], (err, rows) => {
        if (err) return res.status(500).json(err);
        res.json(rows);
    });
};

exports.create = (req, res) => {
    const { nome, cnpj, endereco, contato } = req.body;
    db.run('INSERT INTO fornecedores (nome, cnpj, endereco, contato) VALUES (?, ?, ?, ?)',
        [nome, cnpj, endereco, contato],
        function(err) {
            if (err) return res.status(500).json(err);
            res.json({ id: this.lastID });
        });
};

