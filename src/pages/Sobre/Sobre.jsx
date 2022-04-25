import React, { Component } from "react";
import Header from "../Header/Header";
import logo from '../avatar/logo-perfil.png'
import './sobre.css';
import { motion } from "framer-motion";
import { Pause, WindupChildren } from "windups";
import Footer from "../Footer/Footer";

class Sobre extends Component {
  
  render() {
    const variants = {
      visible: { opacity: 1 },
      hidden: { opacity: 0 },
    }
    return(
      <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      >
        <Header />
        <div className="princ-div">
        <div className="img-div">
          <img src={ logo } alt="perfil" />
        </div>
        <div className="span-div">
          <WindupChildren >
          <span>
            Olá, seja bem vindo ao meu mundo!
            Aqui no meu portfolio você poderá ver meus projetos, e minhas técnicas
            aprendidas até o momento.
            <br />
          <Pause ms={700} />
            <span>
              Espero que goste do contéudo e se caso tenha algum feedback pode me enviar 
              uma mensagem!!
            </span>
          </span>
            <br />
          <Pause ms={700} />
          <span>
            No momento sou estudande FullStack de desenvolvimento web pela trybe,
            e no primeiro semestre de Análise e desenvolvimento de sistemas.
          </span>
          <br />
          <Pause ms={700} />
          <span>
            Além das HardSkills, tenho trabalhado bastante minha SoftSkills, 
            melhorando minha comunicação, minha liderança, e meu pensamento critíco.
            <br />
            Além disso tenho estudado Scrum e tem me ajudado bastante até nas tarefas
            diárias.
            <br />
            <Pause ms={700} />
            <span>Recomendo demais o livro Scrum o Guia Prático</span>
          </span>
          </WindupChildren>
        </div>
      </div>
      <div className="contact">
          <button className="btn-git" ><a target="_blank" href="https://github.com/CandidoVinii">Github</a></button>
          <button className="btn-linkedin"><a target="_blank" href="https://www.linkedin.com/in/vinicius-candido-749262110/">Linkedin</a></button>
          <button className="btn-instagram"><a target="_blank" href="https://www.instagram.com/candido.vinii/">Instagram</a></button>
      </div>
      <Footer/>
    </motion.div>
    );
  }
}

export default Sobre;