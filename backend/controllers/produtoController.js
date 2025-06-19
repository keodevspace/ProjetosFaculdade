const db = require('../database/db');

exports.getAll = (req, res) => {
    db.all('SELECT * FROM produtos', [], (err, rows) => {
        if (err) return res.status(500).json(err);
        res.json(rows);
    });
};

exports.create = (req, res) => {
    const { nome, descricao, preco, codigoBarras } = req.body;
    db.run('INSERT INTO produtos (nome, descricao, preco, codigoBarras) VALUES (?, ?, ?, ?)',
        [nome, descricao, preco, codigoBarras],
        function(err) {
            if (err) return res.status(500).json(err);
            res.json({ id: this.lastID });
        });
};
