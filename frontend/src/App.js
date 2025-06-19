import React from 'react';
import ProdutoPage from './pages/ProdutoPage';
import FornecedorPage from './pages/FornecedorPage';
import AssociacaoPage from './pages/AssociacaoPage';

export default function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Projeto Integrador - Frontend</h1>
      <ProdutoPage />
      <hr />
      <FornecedorPage />
      <hr />
      <AssociacaoPage />
    </div>
  );
}

