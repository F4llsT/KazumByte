import React from "react";
import { Link } from "react-router-dom"; // Importe o Link do React Router
import perfilIcon from "../icons/perfil.png"; // Ajuste o caminho conforme necessário
import carrinhoIcon from "../icons/carrinhos-de-compras.png"; // Ajuste o caminho conforme necessário

import { useStore } from "../store"; // Certifique-se de ajustar o caminho

function NavBar({ isAuthenticated }) {
  const totalItems = useStore((state) => state.totalItems());

  return (
    <header className="top-bar">
      <div className="left">
        <h1>KaZum</h1>
      </div>

      <div className="center">
        <input type="text" placeholder="Encontre o ideal para você..." />
        <div className="filter-dropdown">
          <button className="filter-button">CLASSIFICAÇÕES</button>
          <div className="dropdown-content">
            <a href="#">Início</a>
            <a href="#">Masculino</a>
            <a href="#">Feminino</a>
            <a href="#">Infantil</a>
          </div>
        </div>
      </div>

      <div className="right">
        {!isAuthenticated ? (
          <Link to="/login" className="login-button">Login</Link>
        ) : (
          <div className="profile-cart">
            <Link to="/configuracao">
              <img src={perfilIcon} alt="Ícone de Perfil" className="icon" />
            </Link>
            <Link to="/carrinho">
              <div className="cart-icon-wrapper">
                <img src={carrinhoIcon} alt="Carrinho" className="icon" />
                {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
              </div>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default NavBar;
