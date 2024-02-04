import React from 'react'
import Hero from './Hero'

import HomeAbout from './HomeAbout'
import HomeCustomer from './HomeCustomer'
import HomeReview from './HomeReview'

function Home() {
  return (
      <div>
    
          <Hero />
          <HomeAbout/>
          <HomeCustomer/>
          <HomeReview/>
    </div>
  )
}

export default Home