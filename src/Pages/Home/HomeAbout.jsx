import React from "react";
import about from "../../assets/About.webp"

function HomeAbout() {
  return (
    <div className="hero min-h-fit md:py-20 py-5 bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={about}
          width={600}        
          className=" rounded-lg shadow-2xl"
          alt="About Us"
        />
        <div>
          <h1 className="text-5xl font-bold">About Us</h1>
          <p className="py-6">
            Welcome to Campus Craft, your trusted partner in the journey towards
            higher education. We take pride in helping aspiring students achieve
            their dreams by providing seamless admission services to renowned
            colleges.
          </p>
          <p>
            Our commitment is to empower students with the right information,
            guidance, and support needed to secure admissions in top-notch
            institutions. With a team of dedicated professionals, we simplify
            the admission process, making it stress-free for students and their
            families.
          </p>
          <button className="btn mt-8 btn-primary">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default HomeAbout;
