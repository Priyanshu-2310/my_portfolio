import React from 'react'
import Landingpage from './components/Landingpage'
import Navbar from './components/Navbar'
import SoftwareEngineer from './components/SoftwareEngineer'
import LocomotiveScroll from 'locomotive-scroll'

import Socialmedialink from './components/Socialmedialink'
import About from './components/About'
import GraphicDesiner from './components/Animation/GraphicDesiner'

const App = () => {
  const Locomotivescroll = new LocomotiveScroll();
  return (
    <div className='bg-[#151312]  overflow-hidden text-white'>
      {/* <Socialmedialink /> */}
        <Navbar />
        <Landingpage />
        <SoftwareEngineer />
        <About />
        <GraphicDesiner />
    </div>
  )
}

export default App