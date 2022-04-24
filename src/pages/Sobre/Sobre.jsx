import React, { Component } from "react";
import Header from "../Header/Header";
import logo from '../avatar/logo-perfil.png'
import './sobre.css'

class Sobre extends Component {
  
  render() {
    return(
      <div>
        <Header />
        <div className="princ-div">
        <div className="img-div">
          <img src={ logo } alt="perfil" />
        </div>
        <div className="span-div">
          <span>
            Olá, seja bem vindo ao meu mundo!
            Aqui no meu portfolio você poderá ver meus projetos, e minhas técnicas
            aprendidas até o momento.
            <br />
            <span>
              Espero que goste do contéudo e se caso tenha algum feedback pode me enviar 
              uma mensagem!!
            </span>
          </span>
            <br />
          <span>
            No momento sou estudande FullStack de desenvolvimento web pela trybe,
            e no primeiro semestre de Análise e desenvolvimento de sistemas.
          </span>
          <br />
          <span>
            Além das HardSkills, tenho trabalhado bastante minha SoftSkills, 
            melhorando minha comunicação, minha liderança, e meu pensamento critíco.
            <br />
            Além disso tenho estudado Scrum e tem me ajudado bastante até nas tarefas
            diárias.
            <br />
            <span>Recomendo demais o livro Scrum o Guia Prático</span>
          </span>
        </div>
      </div>
      <div className="contact">
          <a href="https://github.com/CandidoVinii">Github</a>
          <a href="https://www.linkedin.com/in/vinicius-candido-749262110/">Linkedin</a>
          <a href="https://www.instagram.com/candido.vinii/">Instagram</a>
        </div>
    </div>
    );
  }
}

export default Sobre;