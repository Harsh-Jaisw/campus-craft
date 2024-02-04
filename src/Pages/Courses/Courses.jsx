import React from "react";
import { CollegeData } from "../../consts";
import Card from "../../Components/Card/Card";

function Courses() {
  return (
    <div className="flex flex-col gap-3">
      {CollegeData.map((item,index) => 
        <div key={index} className="">

           <Card item={item}/>
           </div>
      )}
    </div>
  );
}

export default Courses;
