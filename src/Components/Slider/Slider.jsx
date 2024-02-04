import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./Slider.css";
const Slider = ({ data }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 1000 }),
  ]);
  return (
    <div className="embla my-5 w-[80%] mx-auto overflow-hidden" ref={emblaRef}>
      <div className="embla__container flex  ">
        {data.map((item, index) => (
          <div className="embla__slide my-2 flex flex-col justify-center " key={index}>
            <img
              className="h-[100px] object-fit m-1 p-1"
              
              src={item.collegePic}
              alt={`Slide ${index + 1}`}
            />
            <p className="text-xl font-semibold">{item.CollegeName}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
