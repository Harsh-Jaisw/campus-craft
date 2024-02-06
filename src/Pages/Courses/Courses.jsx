import React, { useState } from "react";
import { CollegeData } from "../../consts";
import Card from "../../Components/Card/Card";

function Courses() {
  const [filterData, setFilterData] = useState({
    courseName: "",
    programType: "",
    courseDuration: "",
  });

  const [filteredColleges, setFilteredColleges] = useState([]);
  const handleResponse = () => {
    // Filter the CollegeData based on the filterData
    const filteredColleges = CollegeData.filter((item) => {
      // Implement your filtering logic here
      const matchesCourseName =
        item.details.some((data) =>
          data.CourseName.toLowerCase().includes(
            filterData.courseName.toLowerCase()
          )
        ) || filterData.courseName === "";

      const matchesProgramType =
        item.details.some((data) =>
          data.programType
            .toLowerCase()
            .includes(filterData.programType.toLowerCase())
        ) || filterData.programType === "";

      const matchesCourseDuration =
        item.details.some(
          (data) =>
            data.CourseDuration.toLowerCase().includes(
              filterData.courseDuration.toLowerCase()
            ) || filterData.courseDuration === ""
        ) || filterData.courseDuration === "";

      return matchesCourseName || matchesProgramType || matchesCourseDuration;
    });

    setFilteredColleges(filteredColleges);
  };

  return (
    <div className="flex flex-wrap gap-3">
      {/* Your filter inputs */}
      <div className="bg-[#EEF5FF] h-[300px] pt-6  ml-4 flex flex-col gap-6 px-2 rounded-md sticky top-[4.3rem] mt-4 max-w-sm  w-full  lg:max-w-[300px]">
        <input
          placeholder="Course Name"
          className="h-10 bg-[#B4D4FF] rounded-md px-2"
          onChange={(e) =>
            setFilterData({ ...filterData, courseName: e.target.value })
          }
          value={filterData.courseName}
        />
        <input
          placeholder="Program Type"
          onChange={(e) =>
            setFilterData({ ...filterData, programType: e.target.value })
          }
          value={filterData.programType}
          className="h-10 bg-[#B4D4FF] rounded-md px-2"
        />
        <select
          className="h-10 bg-[#B4D4FF] rounded-md px-2"
          onChange={(e) =>
            setFilterData({ ...filterData, courseDuration: e.target.value })
          }
          value={filterData.courseDuration}
        >
          <option value="">Course Duration</option>
          <option value="2">2 Years</option>
          <option value="3">3 Years</option>
          <option value="4">4 Years</option>
          <option value="5">5 Years</option>
        </select>
        <button className="btn btn-primary text-lg" onClick={handleResponse}>
          Search
        </button>
      </div>

      {filteredColleges.length > 0 ? (
        filteredColleges.map((item, index) => (
          <div key={index} className="">
            <Card item={item} filterData={filterData} />
          </div>
        ))
      ) : (
        <p>No matching courses found.</p>
      )}
    </div>
  );
}

export default Courses;
