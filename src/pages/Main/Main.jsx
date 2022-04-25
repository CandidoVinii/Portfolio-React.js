import React, { Component } from "react";
import logo from '../avatar/logo-perfil.png'
import Header from "../Header/Header";
import "./Main.css";
import { motion } from "framer-motion";
import { Pause, WindupChildren } from "windups";
import Footer from "../Footer/Footer";

class Main extends Component {
  render() {
    const variants = {
      visible: { opacity: 1 },
      hidden: { opacity: 0 },
    }
    return (
      <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      >
        <Header />
        <main className="main-div" > 
          <div className="logo-3d">
            <img
            src={ logo }
            alt="avatar-3d"
            className="img-avatar"/>
          </div>
          <section className="info-div">
            <WindupChildren>
            <h1>{"Vinicius Aquino"}
              <br />
            <span>{"Fullstack Developer"}</span>
            </h1>
            </WindupChildren>
           
            <WindupChildren>
              <p>{"Olá eu sou Vinicius e sou desenvolvedor Fullstack Junior!"}</p>
              <Pause ms={500} />
              <p>{"Com formação no curso técnico da trybe e atualmente cursando Análise e desenvolvimento de Sistemas."}</p>
              <Pause ms={1000} />
              <span>{"Olhe atentamente para o site, talvez você encontra um EasterEgg..."}</span>
            </WindupChildren>
          </section>
        </main>
        <Footer />
      </motion.div>
    );
  }
}

export default Main;