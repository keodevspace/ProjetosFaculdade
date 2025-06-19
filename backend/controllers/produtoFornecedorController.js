const db = require('../database/db');

exports.associate = (req, res) => {
    const { produtoId, fornecedorId } = req.body;
    db.run('INSERT INTO produto_fornecedor (produtoId, fornecedorId) VALUES (?, ?)',
        [produtoId, fornecedorId],
        function(err) {
            if (err) return res.status(500).json(err);
            res.json({ message: 'Associação criada com sucesso' });
        });
};

exports.getAssociations = (req, res) => {
    db.all('SELECT * FROM produto_fornecedor', [], (err, rows) => {
        if (err) return res.status(500).json(err);
        res.json(rows);
    });
};
