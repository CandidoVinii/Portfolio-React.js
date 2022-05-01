import React, { Component } from "react";
import { Link } from 'react-router-dom';

import logo from '../img/logo-header.png'
import './header.css'

class Header extends Component {
  render() {
    return(
      <header>
        <div className="div-header">
          <img src={ logo } alt="logo-site" />
            <ul className="ul-nav">
              <li><Link style={{ textDecoration: 'none', color: 'white' }} exact to="/">Inicio</Link></li>
              <li><Link style={{ textDecoration: 'none', color: 'white' }} exact to="/sobre">Sobre</Link></li>
              <li><Link style={{ textDecoration: 'none', color: 'white' }} exact to="/projetos">Projetos</Link></li>
            </ul>
        </div>
      </header>
    );
  }
}

export default Header;
