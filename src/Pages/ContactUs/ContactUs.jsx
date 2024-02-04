import React, { useState } from "react";
import companyLogo from "../../assets/Logos/campus-craft.webp";
import { CollegeData } from "../../consts";

function ContactUs() {
  const [collegeCourse, setCollegeCourse] = useState([]);
  const [college, setCollege] = useState("");
  const handleCollege = (value) => {
    setCollege(value);
    setCollegeCourse([
      ...CollegeData.find((data) => data.CollegeName == value)?.details,
    ]);
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-left">
          <h1 className="text-5xl font-bold text-center lg:text-left">
            Contact Us!
          </h1>

          <p className="py-6">
            Have any questions or concerns?
            <br /> Reach out to us using the form on the right, and we'll get
            back to you as soon as possible.
          </p>

          <p>
            <span className="font-semibold">Phone : </span>87551 63702
          </p>
          <p>
            <span className="font-semibold">Email : </span>
            shivam.yadav@campuscraft.in
          </p>

          <p className="py-3">
            We appreciate your feedback and look forward to hearing from you!
          </p>
          <div className="flex gap-2 my-3 justify-center lg:justify-start">
          <img src={companyLogo} width={20} alt="[Your Company Name] Logo" />
          <p>Campus Craft</p>
        </div>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="grid md:grid-cols-2 gap-2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Mobile No.</span>
                </label>
                <input
                  placeholder="Mobile"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Select College</span>
              </label>
              <select
                className="select select-bordered"
                value={college}
                onChange={(e) => handleCollege(e.target.value)}
                required
              >
                <option value="">Choose College</option>
                {CollegeData.map((item) => (
                  <option key={item.CollegeName} value={item.CollegeName}>
                    {item.CollegeName}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Course Name</span>
              </label>
              {collegeCourse.length > 0 ? (
                <select className="select select-bordered" required>
                  <option value="">Choose Course</option>
                  {collegeCourse.map((item, index) => (
                    <option key={index} value={item.CourseName}>
                      {item.CourseName}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  placeholder="Enter Course Name"
                  className="input input-bordered"
                  required
                />
              )}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">ContactUs</button>
            </div>
          </form>
        </div>
      
      </div>
    </div>
  );
}

export default ContactUs;
