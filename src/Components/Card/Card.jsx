import React from "react";

function Card(props) {
  const { item } = props;
  return (
    <div  className="max-w-sm w-full lg:max-w-[1024px] mx-auto lg:flex">
      <div   className="gap-3 p-4 flex flex-col justify-between leading-normal">
        {item.details.map((data, index) => (
          <div key={index} >
            <div className="mb-8  flex flex-col gap-2">
              <p className="text-sm text-gray-600 flex gap-2 flex-wrap items-center">
                <span>Program Type : {data.programType}</span>
                <span>Intake : {data.intake}</span>
                <span>Lateral : {data.lateral ? data.lateral:0}</span>
                <span>Course Duration : {data.CourseDuration}</span>
              </p>
              <div className="text-gray-900 font-bold text-xl mb-2">
                Course Name : {data.CourseName} 
              </div>
              <p className="text-gray-700 text-base">
                Eligibilty : {data.eligibility}
              </p>
            </div>
            <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-full mr-4"
                src={item.collegePic}
                alt="Avatar of Jonathan Reinink"
              />
              <div className="text-sm">
                <p className="text-gray-900 leading-none">{item.CollegeName}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
