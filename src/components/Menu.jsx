import React, { useRef } from 'react'
import gsap from 'gsap'


const Menu = ({isOpen}) => {
    const mainmenu = useRef()

   if(isOpen){
    gsap.to(mainmenu.current,{
        top: 0,
        duration: 1,
        ease: "power4.in",
    })
   }
   else{
     gsap.to(mainmenu.current,{
        top: "-100%",
        duration: 1,
        ease: "power4.in",
    })
   }
  return (
    <div ref={mainmenu}  className='h-screen flex items-center justify-center gap-10  w-full fixed z-50 -top-[100vh] bg-mainlight'>
        <div className='h-[80vh] flex justify-center flex-col w-[550px]'>
            <h1 className='text-8xl font-barlow font-semibold uppercase'>Home</h1>
            <h1 className='text-8xl font-barlow font-semibold uppercase'>About</h1>
            <h1 className='text-8xl font-barlow font-semibold uppercase'>Projects</h1>
            <h1 className='text-8xl font-barlow font-semibold uppercase'>Blog</h1>
            <h1 className='text-8xl font-barlow font-semibold uppercase'>Contact</h1>
        </div>
        <div className='h-[80vh] w-[450px] bg-green-50'></div>
    </div>
  )
}

export default Menu