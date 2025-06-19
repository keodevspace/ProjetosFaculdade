import React, { useState } from 'react';
import api from '../services/api';

export default function AssociacaoPage() {
    const [produtoId, setProdutoId] = useState('');
    const [fornecedorId, setFornecedorId] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();
        await api.post('/associacoes', { produtoId, fornecedorId });
        alert('Associação realizada com sucesso!');
        setProdutoId('');
        setFornecedorId('');
    };

    return (
        <div>
            <h1>Associar Produto e Fornecedor</h1>
            <form onSubmit={handleSubmit}>
                <input value={produtoId} onChange={e => setProdutoId(e.target.value)} placeholder="ID do Produto" />
                <input value={fornecedorId} onChange={e => setFornecedorId(e.target.value)} placeholder="ID do Fornecedor" />
                <button type="submit">Associar</button>
            </form>
        </div>
    );
}

