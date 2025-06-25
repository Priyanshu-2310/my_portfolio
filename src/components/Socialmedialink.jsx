import React from 'react'
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";
import { CiTwitter } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

const Socialmedialink = () => {
  return (
    <div className='h-screen w-full fixed z-5 '>
        <div className="icons flex flex-col justify-center gap-3 items-center h-32 w-12 absolute left-5 bottom-10">
            <FiGithub className='text-lg' />
            <FaLinkedinIn  />
            <CiTwitter className='text-lg'/>
            
            <FaInstagram /> 
        </div>
    </div>
  )
}

export default Socialmedialink