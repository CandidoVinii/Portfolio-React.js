import React, { Component } from "react";
import logo from '../avatar/logo-perfil.png'
import Header from "../Header/Header";
import "./Main.css";

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <main className="main-div">
          <div className="logo-3d">
            <img
            src={ logo }
            alt="avatar-3d"
            className="img-avatar"/>
          </div>
          <section className="info-div">
            <h1>Vinicius Aquino
              <br />
            <span>Fullstack Developer</span>
            </h1>
            <p>
              Desenvolvedor Fullstack Junior, com formação na escola técnica Trybe e no 1º semestre
              da faculdade de Análise e desenvolvimento de sistemas.
            </p>
          </section>
        </main>
      </div>
    );
  }
}

export default Main;