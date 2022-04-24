import React, { Component } from "react";
import CarouselComponent from "../../Components/carousel.component";
import Header from "../Header/Header";
import './projetos.css';

class Projetos extends Component {
  render() {
    return(
      <div>
        <Header />
        <div className="div-project">
          <div className="habilidades">
            <ul className="list">
              <h1>Habilidade:</h1>
              <li className="react"><p>React</p></li>
              <li className="js"><p>Javascript</p></li>
              <li className="jest"><p>Jest</p></li>
              <li className="bootstrap"><p>Bootstrap</p></li>
              <li className="redux"><p>Redux</p></li>
              <li className="hooks"><p>Hooks</p></li>
            </ul>
          </div>
          <div className="infos">
            <CarouselComponent />
          </div>
        </div>
      </div>
    );
  }
}

export default Projetos;