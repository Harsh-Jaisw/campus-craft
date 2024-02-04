import React, { useState, useEffect } from "react";
import axis from "../../assets/axis-college.webp";
import allenhouse from "../../assets/allenhouse.webp";
import kit from "../../assets/kit.webp";
import Rama from "../../assets/Rama-University.webp";
import jsu from "../../assets/js-university.webp";

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(1);

  const moveToSlide = (newSlide) => {
    setCurrentSlide(newSlide);
  };

  const moveLeft = () => {
    const newSlide = currentSlide === 1 ? 5 : currentSlide - 1;
    moveToSlide(newSlide);
  };

  const moveRight = () => {
    const newSlide = currentSlide === 5 ? 1 : currentSlide + 1;
    moveToSlide(newSlide);
  };

  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      moveRight();
    }, 2000);

    return () => {
      clearInterval(autoplayInterval);
    };
  }, [currentSlide]);

  return (
    <div className="carousel min-h-screen w-full relative overflow-hidden">
      <div
        className="carousel-container flex"
        style={{
          height: "100vh",
          transform: `translateX(-${(currentSlide - 1) * 100}%)`,
        }}
      >
        <div className="carousel-item relative w-full md:object-cover md:h-full object-contain h-50vh">
          <img
            src={axis}
            className="w-full h-full"
            alt="Axis College"
          />
        </div>
        <div className="carousel-item relative w-full md:object-cover md:h-full object-contain h-50vh">
          <img
            src={kit}
            className="w-full h-full"
            alt="Kit Image"
          />
        </div>
        <div className="carousel-item relative w-full md:object-cover md:h-full object-contain h-50vh">
          <img
            src={allenhouse}
            className="w-full h-full"
            alt="Allen House Image"
          />
        </div>
        <div className="carousel-item relative w-full md:object-cover md:h-full object-contain h-50vh">
          <img
            src={Rama}
            className="w-full h-full"
            alt="Rama Image"
          />
        </div>
        <div className="carousel-item relative w-full md:object-cover md:h-full object-contain h-50vh">
          <img
            src={jsu}
            className="w-full h-full"
            alt="JSU Image"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;

