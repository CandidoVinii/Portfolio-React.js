import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import pokedex from '../pages/img/projects/pokedex.png';
import weather from '../pages/img/projects/wheater-project.png';
import trybetunes from '../pages/img/projects/Trybetunes.png';
import bmi from '../pages/img/projects/bmicalculator.png';
import solar from '../pages/img/projects/solar-system.png';
import viniWallet from '../pages/img/projects/viniWallet.png'

export default function CarouselComponent(){
  return (
    <div class="carousel-wrapper">
    <Carousel
    dynamicHeight
    infiniteLoop
    useKeyboardArrows
    autoPlay
    >
      <div>
          <img src={pokedex} alt="projeto pokemon" />
      </div>
      <div>
          <img src={viniWallet} alt="projeto trybeWallet" />
      </div>
      <div>
          <img src={weather} alt="projeto trybetunes" />
      </div>
      <div>
          <img src={trybetunes} alt="projeto trybetunes" />
      </div>
      <div>
          <img src={bmi} alt="projeto trybetunes" />
      </div>
      <div>
          <img src={solar} alt="projeto trybetunes" />
      </div>
    </Carousel>
</div>
  );
}