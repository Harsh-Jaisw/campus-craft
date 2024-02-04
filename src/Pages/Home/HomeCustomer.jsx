import React from 'react'
import CountUp from 'react-countup'
function HomeCustomer() {
    const countUpStyle = {
        fontSize: '2rem',
        fontWeight: "800",
       
    }
  return (
    <div className="grid grid-cols-2 justify-items-center md:grid-cols-4 gap-2">
              <span className=''>
                    <CountUp style={ countUpStyle}  start={20} end={55} duration={6} />
                  <span className='text-3xl font-bold'>+</span>
                  <h2>Total Colleges</h2>
                  <p>Number of College Connected to us.</p>
                  </span>
                  <span className=''>
                      <CountUp style={ countUpStyle}  start={300} end={500} duration={6} />
                  <span className='text-3xl font-bold'>+</span>
                  <h2>Happy Students</h2>
                  <p>Number of Students get Successfully Admission through us.</p>
                  </span>
                  <span className=''>
                      <CountUp style={ countUpStyle}  start={50000} end={100000} duration={6} />
                  <span className='text-3xl font-bold'>+</span>
                  <h2>Placement</h2>
                  <p>Number of Placements Done by our Student Through Us.</p>
                  </span>
                  <span className=''>
                      <CountUp style={ countUpStyle} start={100} end={200} duration={6} />
                  <span className='text-3xl font-bold'>+</span>
                  <h2></h2>
                  <p>Edited videos that are a real tribute to love and companionship.</p>
                  </span>
                </div>
  )
}

export default HomeCustomer