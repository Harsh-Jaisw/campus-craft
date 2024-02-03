import React ,{ useState} from "react";
import axis from "../../assets/axis-college.webp"
import allenhouse from "../../assets/allenhouse.webp"
import kit from "../../assets/kit.webp"
import Rama from "../../assets/Rama-University.webp"
import jsu from "../../assets/js-university.webp"
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

  return (
    <div className="carousel min-h-screen w-full relative overflow-hidden">
      <div
        className="carousel-container flex"
        style={{
          height: "100vh", // Set the height to 100% of the viewport height
          transform: `translateX(-${(currentSlide - 1) * 100}%)`
        }}
      >
        <div className="carousel-item relative w-full">
          <img src={axis} className="w-full h-full object-cover" alt="Axis College" />
        </div>
        <div className="carousel-item relative w-full">
          <img src={kit} className="w-full h-full object-cover" alt="Kit Image" />
        </div>
        <div className="carousel-item relative w-full">
          <img src={allenhouse} className="w-full h-full object-cover" alt="Allen House Image" />
        </div>
        <div className="carousel-item relative w-full">
          <img src={Rama} className="w-full h-full object-cover" alt="Rama Image" />
        </div>
        <div className="carousel-item relative w-full">
          <img src={jsu} className="w-full h-full object-cover" alt="JSU Image" />
        </div>
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <button onClick={moveLeft} className="btn btn-circle">
          ❮
        </button>
        <button onClick={moveRight} className="btn btn-circle">
          ❯
        </button>
      </div>
    </div>
  );
}




export default Hero;
