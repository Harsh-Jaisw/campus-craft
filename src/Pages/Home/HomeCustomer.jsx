import React from "react";
import CountUp from "react-countup";
function HomeCustomer() {
  const countUpStyle = {
    fontSize: "2rem",
    fontWeight: "800",
  };
  return (
    <div className="grid grid-cols-2 p-8 md:grid-cols-4 gap-3">
    <span className='text-center'>
        <CountUp style={countUpStyle} start={30} end={50} duration={6} />
        <span className='text-2xl md:text-3xl font-[800]'>+</span>
        <h2 className="text-base md:text-2xl  font-bold">Partnered Colleges</h2>
        <p className="text-sm md:text-base">Diverse colleges connected with us for your exploration.</p>
    </span>

    <span className='text-center'>
        <CountUp style={countUpStyle} start={50} end={1000} duration={6} />
        <span className='text-2xl md:text-3xl font-[800]'>+</span>
        <h2 className="text-base md:text-2xl  font-bold">Satisfied Students</h2>
        <p className="text-sm md:text-base">Find the perfect college with our satisfying guidance.</p>
    </span>

    <span className='text-center'>
        <CountUp style={countUpStyle} start={100} end={3000} duration={6} />
        <span className='text-2xl md:text-3xl font-[800]'>+</span>
        <h2 className="text-base md:text-2xl  font-bold">Successful Placements</h2>
        <p className="text-sm md:text-base">Students thriving in promising careers post our guidance.</p>
    </span>

    <span className='text-center'>
        <CountUp style={countUpStyle} start={100} end={2000} duration={6} />
        <span className='text-2xl md:text-3xl font-[800]'>+</span>
        <h2 className="text-base md:text-2xl  font-bold">Informed Admissions</h2>
        <p className="text-sm md:text-base">Make wise decisions for successful admissions with our help.</p>
    </span>


      
    </div>
  );
}

export default HomeCustomer;
