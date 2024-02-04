import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./Slider.css";
const Slider = ({ data }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000 }),
  ]);
  return (
    <div className="embla my-5 w-[80%] mx-auto overflow-hidden" ref={emblaRef}>
      <div className="embla__container flex gap-10 ">
        {data.map((item, index) => (
          <div className="embla__slide border-2 my-2 text-center " key={index}>
            <img
              className="h-[300px] w-auto object-fit m-1 p-1"
              
              src={item.collegePic}
              alt={`Slide ${index + 1}`}
            />

            {console.log(item.collegePic)}
            <p >{item.CollegeName}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
