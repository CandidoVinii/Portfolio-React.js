import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import pokedex from '../pages/avatar/projects/pokedex.png';
import weather from '../pages/avatar/projects/wheater-project.png';
import trybetunes from '../pages/avatar/projects/Trybetunes.png';
import bmi from '../pages/avatar/projects/bmicalculator.png';
import solar from '../pages/avatar/projects/solar-system.png';

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