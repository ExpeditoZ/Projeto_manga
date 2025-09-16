import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaBook, FaUser } from "react-icons/fa";
import "./NavBar.css";

export default function NavBar() {
  const location = useLocation();

  // Não mostra navbar na tela de login
  if (location.pathname === "/login") return null;

  return (
    <nav className="navbar">
      <Link to="/" className="nav-item">
        <FaHome className="nav-icon nav-icon-white" />
        <span>Início</span>
      </Link>
      <Link to="/catalog" className="nav-item">
        <FaBook className="nav-icon nav-icon-white" />
        <span>Catálogo</span>
      </Link>
      <Link to="/profile" className="nav-item">
        <FaUser className="nav-icon nav-icon-white" />
        <span>Perfil</span>
      </Link>
    </nav>
  );
}
