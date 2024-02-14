import React, { useEffect, useState } from "react";
import about from "/College.webp";
import aboutHome from "/About.webp";
import { useNavigate } from "react-router-dom";
import { teamData } from "../../consts";
import commonApiFunction from "../../api";

function AboutUs() {
  const navigate = useNavigate();
  useEffect(() => {
    const visitData = {
      company_id: "1",
      page_visited: "About",
    };

    commonApiFunction("/addVisits", "POST", visitData)
      .then((data) => {
        console.log("POST request result:", data);
      })
      .catch((error) => {
        console.error("POST request error:", error);
      });
  }, []);

  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${aboutHome})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">About Us</h1>
            <p className="mb-5">
              Crafting educational journeys at Campus Craft, where personalized
              guidance meets stress-free admissions.
            </p>
          </div>
        </div>
      </div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={about}
            width={300}
            className=" mx-5 rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-3xl font-bold mb-4">
              Empowering Dreams, Shaping Futures
            </h1>
            <p className="">
              Welcome to Campus Craft, where we specialize in helping students
              achieve their dreams by facilitating admissions to various
              colleges across different streams. With a dedicated team and a
              wealth of experience, we have successfully assisted students in
              pursuing higher education tailored to their aspirations.
            </p>
            <p className=" mt-4">
              At Campus Craft, we understand the unique needs of each student,
              and our mission is to simplify the admission process, making it
              seamless and stress-free. Whether you are interested in
              engineering, arts, science, or any other field, we are here to
              guide you through the journey of securing admission to the college
              of your choice.
            </p>
            <p className=" mt-4">
              Our commitment is to provide personalized assistance, reliable
              information, and support at every step. We take pride in being a
              trusted partner in your educational journey and helping you make
              informed decisions about your future.
            </p>
            <button
              onClick={() => navigate("/contactus")}
              className="btn mt-4 btn-primary"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="min-h-[50vh] py-4 gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 max-w-[80%] mx-auto items-center justify-center" >
        {teamData.map((item) => (
          <div  key={item.id} className="bg-gray-100 relative shadow-xl overflow-hidden hover:shadow-2xl group rounded-xl p-8 transition-all duration-500 transform">
            <div className="flex flex-col items-center gap-4">
              <img
                src={item.photo}
                className="w-32 group-hover:w-36 group-hover:h-36 h-32 object-center object-cover rounded-full transition-all duration-500 delay-500 transform"
              />
              <div className="w-fit transition-all transform duration-500">
                <h1 className="text-gray-600  font-bold">{item.name}</h1>
                <p className="text-gray-400">{item.designation}</p>
                <p className="text-gray-600 text-xs">{item.about}</p>
                <a className="text-[0.6rem] text-gray-500  group-hover:opacity-100 opacity-0 transform transition-all delay-300 duration-500">
                  {item.email}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
