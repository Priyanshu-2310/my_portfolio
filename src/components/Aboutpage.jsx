import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollReveal from "./Animation/ScrollReveal";


gsap.registerPlugin(ScrollTrigger);

const Aboutpage = () => {
  const page = useRef(null);
  const triggerbody = useRef(null);
  const border = useRef(null);
  const leftscrollbox = useRef(null)
  

 useEffect(() => {
  const tl = gsap.timeline();

  tl.to(page.current, {
    height: "100%",
    width: "100%",
    duration: 2,
    ease: "none",
    scrollTrigger: {
      trigger: triggerbody.current,
      start: "top 30%",
      end: "top 10%",
      scrub: true,
    },
  });

  tl.to(border.current, {
    width: "80%",
    ease: "power1.inOut",
    duration: 2,
    scrollTrigger: {
      trigger: triggerbody.current,
      start: "top 50%",
      end: "top 10%",
      scrub: true,
    },
  });

  // Add opacity animation with scroll trigger
  gsap.to(leftscrollbox.current, {
    opacity: 1,
    // duration: 2,
    ease: "power1.out",
    scrollTrigger: {
      trigger: triggerbody.current,
      start: "top 10%",
      end: "top 0%",
      scrub: true,
      // markers: true,
    },

  });

  gsap.to(leftscrollbox.current, {
    transform: "translateX(-55%)",
    // duration: 2,
    ease: "power2.out",
     scrollTrigger: {
      trigger: page.current,
      start: "top 10%",
      end: "top -20%",
      scrub: true,
      markers: true,
      // pin: true,
    },

  })

}, []);


  return (
    <div
      ref={triggerbody}
      className="h-[120vh] relative w-full flex items-center justify-center"
    >
      <div
        ref={page}
        className="h-[80vh] w-[80%] p-10  bg-[#F5F5DC] rounded-t-2xl"
      >
        <h1 className="text-8xl font-barlow text-[#2F4F4F] uppercase font-extrabold">
          A Boy with Different
        </h1>
        {/* <h1 className="text-7xl font-barlow uppercase font-semibold text-[#333333]">Different</h1> */}
        <h1 className="text-7xl font-barlow uppercase font-semibold text-[#333333]">
          Personality
        </h1>
        <div
          ref={border}
          className="h-2 w-10 mt-8 bg-mainlight rounded-lg"
        ></div>
        <div ref={leftscrollbox} className="h-[60vh] items-center justify-start flex rounded-xl mt-10 w-[200vw] opacity-0 bg-mainlight">

        </div>
        
      </div>
    </div>
  );
};

export default Aboutpage;
