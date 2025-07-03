import React, { useRef, useEffect } from "react";
import ScrollFloat from "./components/Animation/ScrollFloat";
import SpotlightCard from "./components/Animation/SpotlightCard";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Taekwondo = () => {
  const text1 = useRef(null);
  const text2 = useRef(null);
  const text3 = useRef(null);
  const view = useRef(null)

  useEffect(() => {
  gsap.set([text1.current, text2.current, text3.current], { opacity: 0, x: 100 });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: view.current,
      start: "top 80%",
      toggleActions: "play none none reverse",
      // markers: true // optional for debugging
    }
  });

  tl.to(text1.current, {
    x: 0,
    opacity: 1,
    duration: 1.2,
    ease: "power3.out",
  })
    .to(text2.current, {
      x: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power3.out",
    }, "-=0.8") // slight overlap
    .to(text3.current, {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
    }, "-=0.8");

  return () => {
    tl.kill();
  };
}, []);


  return (
    <div ref={view} className="w-full h-screen px-20 gap-3 flex items-center justify-center">
      <div className="w-[60%] h-full flex flex-col py-20 bg-main">
        <h1
          ref={text1}
          className="font-barlow translate-x-[-200px] leading-[60px] uppercase text-7xl font-extrabold"
        >
          National Level
        </h1>
        <h1
          ref={text2}
          className="font-barlow text-7xl translate-x-[-200px] font-extrabold uppercase text-mainlight"
        >
          Taekwondo
        </h1>
        <h1
          ref={text3}
          className="font-barlow text-7xl leading-[50px] uppercase font-extrabold text-mainlight"
        >
          Player
        </h1>

        <div className="paragraph">
          <p className="text-[#837979] mt-10 pr-40">
            I have dedicated over 5 years of my life to the art and discipline
            of Taekwondo, during which I earned the prestigious Black Belt.
            Throughout my journey, I had the honor of representing at various
            levels of competition:
          </p>

          <div className="flex gap-3 mt-5">
            <SpotlightCard
              className="custom-spotlight-card"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              🏅 3 National
            </SpotlightCard>
            <SpotlightCard
              className="custom-spotlight-card"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              🏆 10+ State
            </SpotlightCard>
            <SpotlightCard
              className="custom-spotlight-card"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              🥇 20+ District
            </SpotlightCard>
          </div>
        </div>
      </div>

      <div className="w-[40%] flex items-center justify-center h-full">
        <div className="h-[400px] w-[300px] overflow-hidden rounded-lg bg-gray-50">
          <img
            src="/images/taekwondo/main.png"
            className="h-full w-full object-cover"
            alt="Taekwondo"
          />
        </div>
      </div>
    </div>
  );
};

export default Taekwondo;
