import React, { Component } from "react";
import { motion } from "framer-motion";
import { Pause, WindupChildren } from "windups";
import CarouselComponent from "../../Components/carousel.component";

import Header from "../Header/Header";
import './projetos.css';
import Footer from "../Footer/Footer";

class Projetos extends Component {
  render() {
    const variants = {
      visible: { opacity: 1, translateY: 0 },
      hidden: { opacity: 0, translateY: -150 },
    }
    return(
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
      >
        <Header />
        <div className="div-project">
          <div className="habilidades">
           <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            >
            <ul className="list"> 
              <h1>Habilidades:</h1>
              <li className="react"><p>React</p></li>
              <li className="js"><p>Javascript</p></li>
              <li className="jest"><p>Jest</p></li>
              <li className="bootstrap"><p>Bootstrap</p></li>
              <li className="redux"><p>Redux</p></li>
              <li className="hooks"><p>Hooks</p></li>
            </ul>
            </motion.div>
          </div>
          <div className="infos">
            <CarouselComponent />
          </div>
        </div>
        <div className="easterEgg">
          <WindupChildren>
            <p>Olá</p>
            <Pause ms={3320} />
              <a target="_blank" href="https://claudia.abril.com.br/wp-content/uploads/2020/01/gato-tirando-selfie-1.png" rel="noreferrer">Clique</a>
          </WindupChildren>
        </div>
        <Footer />
      </motion.div>
    );
  }
}

export default Projetos;