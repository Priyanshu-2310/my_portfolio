import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollReveal from "./Animation/ScrollReveal";

gsap.registerPlugin(ScrollTrigger);

const Aboutpage = () => {
  const page = useRef(null);
  const triggerbody = useRef(null);
  const border = useRef(null);
  const leftscrollbox = useRef(null);

  const images = [
    {
      id: 1,
      src: "/images/2.jpg",
    },
    {
      id: 2,
      src: "/images/3.jpg",
    },
    {
      id: 3,
      src: "/images/4.jpg",
    },
  ];

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
        <div
          ref={leftscrollbox}
          className="h-[60vh] px-10 items-center justify-start flex rounded-xl mt-10 w-[90vw] opacity-0 bg-mainlight"
        >
          <div className="imagediv h-[80%] rounded-lg w-[400px] bg-gray-50"></div>
        </div>
      </div>
    </div>
  );
};

export default Aboutpage;
