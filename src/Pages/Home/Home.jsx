import React from 'react'
import Hero from './Hero'

import HomeAbout from './HomeAbout'
import HomeCustomer from './HomeCustomer'
import Slider from '../../Components/Slider/Slider'

function Home() {
  return (
      <div>
    
          <Hero />
          <HomeAbout/>
          <HomeCustomer/>
          <Slider/>
    </div>
  )
}

export default Home