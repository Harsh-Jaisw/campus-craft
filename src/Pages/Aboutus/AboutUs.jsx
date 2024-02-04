import React from "react";
import about from "../../assets/College.webp";
import aboutHome from "../../assets/AboutHome.webp";
function AboutUs() {
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
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
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
            <button className="btn mt-4 btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
