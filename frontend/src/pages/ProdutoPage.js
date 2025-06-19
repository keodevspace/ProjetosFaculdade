import React, { useState, useEffect } from 'react';
import api from '../services/api';

export default function ProdutoPage() {
    const [produtos, setProdutos] = useState([]);
    const [nome, setNome] = useState('');

    useEffect(() => {
        api.get('/produtos').then(response => setProdutos(response.data));
    }, []);

    const handleSubmit = async e => {
        e.preventDefault();
        await api.post('/produtos', { nome });
        setNome('');
        const response = await api.get('/produtos');
        setProdutos(response.data);
    };

    return (
        <div>
            <h1>Produtos</h1>
            <form onSubmit={handleSubmit}>
                <input value={nome} onChange={e => setNome(e.target.value)} placeholder="Nome do produto" />
                <button type="submit">Adicionar</button>
            </form>
            <ul>
                {produtos.map(produto => (
                    <li key={produto.id}>{produto.nome}</li>
                ))}
            </ul>
        </div>
    );
}

