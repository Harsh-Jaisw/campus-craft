import React, { useEffect } from "react";
import Hero from "./Hero";
import HomeAbout from "./HomeAbout";
import HomeCustomer from "./HomeCustomer";
import Slider from "../../Components/Slider/Slider";
import { CollegeData } from "../../consts";
import HomeReview from "./HomeReview";
import commonApiFunction from "../../api";

function Home() {
  useEffect(() => {
    const visitData = {
      company_id: "1",
      page_visited: "Home",
    };

    commonApiFunction("/addVisits", "POST", visitData)
      .then((data) => {
        console.log("POST request Success:");
      })
      .catch((error) => {
        console.error("POST request error:", error);
      });
  }, []);

  return (
    <div>
      <Hero />
      <HomeAbout />
      <HomeCustomer />
      <HomeReview />
      <Slider data={CollegeData} />
    </div>
  );
}

export default Home;
