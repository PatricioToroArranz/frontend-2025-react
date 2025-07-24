import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm">
    <div className="container">
      <Link className="navbar-brand" to="/">
        <svg className="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="#007bff"/>
        </svg>
        FastGo
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Inicio</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/sobre-nosotros">Sobre Nosotros</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/servicios">Servicios</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contactenos">Contáctenos</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
