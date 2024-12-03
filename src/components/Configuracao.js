import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './config.css';
const Configuracoes = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated'); // Remove autenticação
    onLogout(); // Atualiza o estado de autenticação
    navigate('/'); // Redireciona para a Home
  };

  return (
    <div className="container">
      <h1><Link to="/MetodosPagamento">Pagamentos</Link></h1>
      <p>Meus saldos e cartões</p>

      <section>
        <h2><Link to="/favoritos">Pedidos</Link></h2>
        <p>Meus pedidos</p>
      </section>

      <section>
        <h2>Endereços</h2>
        <p>Meus endereços</p>
      </section>

      <section>
        <h2>Meus dados</h2>
        <p>Dados pessoais</p>
      </section>

      <section>
        <h2>Conversas</h2>
        <p>Minhas conversas</p>
      </section>

      <section>
        <h2>Configurações</h2>
      </section>

      <section>
        <button onClick={handleLogout} className="logout-button">Sair</button>
        <p>Desconecte da sua conta!</p>
      </section>
    </div>
  );
};

export default Configuracoes;
