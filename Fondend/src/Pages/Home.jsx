import React from 'react'
import Slider from '../Componet/Sliders/Slider'
import Recent_Blogs from '../Componet/All_Blog/Recent-Blog/Recent_Blog'

import Mostview from '../Componet/MostViewsBlog/Mostview'
import Hero from '../Componet/Hero/Hero'
import FoterHero from '../Componet/Footer-Hero/Foter-Hero'




const Home = () => {
  return (
    <div>
<Hero />

     {/* <Slider /> */}
  
     <Recent_Blogs />
     <Mostview />
     <FoterHero />


    </div>
  )
}

export default Home
