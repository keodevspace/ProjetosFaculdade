import React, { useState, useEffect } from 'react';
import api from '../services/api';

export default function FornecedorPage() {
    const [fornecedores, setFornecedores] = useState([]);
    const [nome, setNome] = useState('');

    useEffect(() => {
        api.get('/fornecedores').then(response => setFornecedores(response.data));
    }, []);

    const handleSubmit = async e => {
        e.preventDefault();
        await api.post('/fornecedores', { nome });
        setNome('');
        const response = await api.get('/fornecedores');
        setFornecedores(response.data);
    };

    return (
        <div>
            <h1>Fornecedores</h1>
            <form onSubmit={handleSubmit}>
                <input value={nome} onChange={e => setNome(e.target.value)} placeholder="Nome do fornecedor" />
                <button type="submit">Adicionar</button>
            </form>
            <ul>
                {fornecedores.map(fornecedor => (
                    <li key={fornecedor.id}>{fornecedor.nome}</li>
                ))}
            </ul>
        </div>
    );
}

