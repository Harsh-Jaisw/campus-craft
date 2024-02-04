import React from "react";
import Hero from "./Hero";
import HomeAbout from "./HomeAbout";
import HomeCustomer from "./HomeCustomer";
import Slider from "../../Components/Slider/Slider";
import {CollegeData} from "../../consts";
import HomeReview from './HomeReview'

function Home() {
  return (
    <div>
      <Hero />
      <HomeAbout />
      <HomeCustomer />
          <HomeReview/>
      <Slider data={CollegeData} />
    </div>
  );
}

export default Home;
