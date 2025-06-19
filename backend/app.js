const express = require('express');
const app = express();
const PORT = 3000;

const produtoRoutes = require('./routes/produtoRoutes');
const fornecedorRoutes = require('./routes/fornecedorRoutes');
const produtoFornecedorRoutes = require('./routes/produtoFornecedorRoutes');

app.use(express.json());

app.use('/produtos', produtoRoutes);
app.use('/fornecedores', fornecedorRoutes);
app.use('/associacoes', produtoFornecedorRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
