import React, { Component } from "react";
import { Link } from 'react-router-dom';
import logo from '../avatar/logo-header.png'
import './header.css'

class Header extends Component {
  render() {
    return(
      <header>
        <div className="div-header">
          <img src={ logo } alt="logo-site" />
            <ul className="ul-nav">
              <li><Link style={{ textDecoration: 'none' }} exact to="/">Inicio</Link></li>
              <li><Link style={{ textDecoration: 'none' }} exact to="/sobre">Sobre</Link></li>
              <li><Link style={{ textDecoration: 'none' }} exact to="/projetos">Projetos</Link></li>
            </ul>
        </div>
      </header>
    );
  }
}

export default Header;
