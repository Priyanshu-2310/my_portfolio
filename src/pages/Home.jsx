import React from 'react'
import Landingpage from '../components/Landingpage'
import SoftwareEngineer from '../components/SoftwareEngineer'
import About from '../components/About'
import GraphicDesiner from '../components/GraphicDesiner'
import Taekwondo from '../Taekwondo'
import Aboutpage from '../components/Aboutpage'
import Shortintro from '../components/Shortintro'


const Home = () => {
  return (
    <div>
         <Landingpage />
        <SoftwareEngineer />
        <About />
        <GraphicDesiner />
        <Taekwondo />
        <Aboutpage />
        <Shortintro />
    </div>
  )
}

export default Home