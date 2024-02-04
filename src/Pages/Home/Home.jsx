import React from 'react'
import Hero from './Hero'

import HomeAbout from './HomeAbout'
import Slider from '../../Components/Slider/Slider'

function Home() {
  return (
      <div>
    
          <Hero />
          <HomeAbout/>
          <Slider/>
    </div>
  )
}

export default Home