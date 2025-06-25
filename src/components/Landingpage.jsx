import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ShinyText from "./Animation/ShinyText";
import ThreeScene from "./ThreeScene";

const Landingpage = () => {
  const text1 = useRef(null);
  const text2 = useRef(null);
  const text3 = useRef(null);
  const right = useRef(null)

  useEffect(() => {
    gsap.set([text1.current, text2.current], { opacity: 0 });

    const tl = gsap.timeline();

    tl.to(text1.current, {
      x: 0, 
      opacity: 1,
      duration: 1.5,
      ease: "power3.out",
    })
    .to(text2.current, {
      x: 0,
      opacity: 1,
      duration: 1.5,
      ease: "power3.out",
    }, "-=1")
    .to(text3.current, {
      opacity: 1,
      duration: 1,
      ease: "power3.out",
    })
    // .to(right.current,{
    //   x: 0,
    //   opacity: 1,
    //   duration: 1,
    //   ease: "power3.out",
    // })

  }, []);

  return (
    <div data-scroll data-section data-scroll-speed = "-.4"  className="  w-full overflow-hidden bg-[#151312] flex flex-col-reverse items-center lg:flex lg:flex-row px-5 mb-10">

      <div className="left   pt-16  w-full flex flex-col ">
        <div className="headline  w-full pr-10">
          <h1 ref={text1} className="text-6xl font-futura uppercase translate-x-[-200px] lg:text-7xl">Creative</h1>
          <h1 ref={text2} className="text-5xl text-[#353334] uppercase font-futura translate-x-[-200px] lg:text-7xl">Web Developer</h1>
          <p ref={text3} className=" mt-6 text-[#837979] font-extralight opacity-0 tracking-wider">I’m Priyanshu Verma, a Web Developer with 1 year of experience and a Graphic Designer with 4 years of expertise. I craft stunning, high-performance websites using React, Tailwind, and Three.js, blending creativity with technology. Let’s build engaging, visually striking digital experiences that stand out and leave a lasting impact!  </p>
        </div>
        <div className=" mt-10">
          <button className="px-3 py-1 border-[1px] border-zinc-600 rounded-full "><ShinyText text="Let's Talk" disabled={false} speed={3} className='custom-class' /></button>
        </div>
        
       
      </div>
     
      <div ref={right} className="right h-[80vh] mt-28 bg-green bg-[#242324]  translate-x-[0px] w-full rounded-3xl overflow-hidden  flex items-center justify-center lg:h-screen lg:mt-0">
      <ThreeScene />
      </div>
    </div>
  );
};

export default Landingpage;
