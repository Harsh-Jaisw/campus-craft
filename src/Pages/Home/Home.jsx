import React from "react";
import Hero from "./Hero";
import HomeAbout from "./HomeAbout";
import HomeCustomer from "./HomeCustomer";
import Slider from "../../Components/Slider/Slider";
import {CollegeData} from "../../consts";
import HomeReview from './HomeReview'

function Home() {
  console.log(CollegeData)
  return (
    <div>
      <Hero />
      <HomeAbout />
      <HomeCustomer />
      <Slider data={CollegeData} />
          <HomeReview/>
    </div>
  );
}

export default Home;
