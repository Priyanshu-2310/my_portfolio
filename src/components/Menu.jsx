import React, { useRef } from 'react'
import gsap from 'gsap'
import { Link } from 'react-router-dom'


const Menu = ({isOpen}) => {
    const mainmenu = useRef()
    const menuheading = useRef()

    console.log(menuheading)

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

   const closemenu= ()=>{
       gsap.to(mainmenu.current,{
        top: "-100%",
        duration: 1,
        ease: "power4.in",
    })
   }
  return (
    
    <div ref={mainmenu}  className='h-screen flex items-center justify-center gap-10  w-full fixed z-50 -top-[100vh] bg-mainlight'>
        <div className='h-[80vh] flex justify-center flex-col w-[550px]'>
           <Link onClick={closemenu} to="/"  className='text-8xl font-barlow font-semibold uppercase'>Home</Link>
           <Link onClick={closemenu} to="/about"  className='text-8xl font-barlow font-semibold uppercase'>About</Link>
           <Link onClick={closemenu} to="/projects"  className='text-8xl font-barlow font-semibold uppercase'>Projects</Link>
           <Link onClick={closemenu} to="/blog"  className='text-8xl font-barlow font-semibold uppercase'>Blog</Link>
           <Link onClick={closemenu} to="/contact"  className='text-8xl font-barlow font-semibold uppercase'>Contact</Link>
        </div>
        <div className='h-[80vh] w-[450px] bg-green-50'></div>
    </div>
  )
}

export default Menu