import React, { useRef, useEffect, useState } from "react";
import ScrollFloat from "./components/Animation/ScrollFloat";
import SpotlightCard from "./components/Animation/SpotlightCard";
import { FaPlay } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Taekwondo = () => {
  const text1 = useRef(null);
  const text2 = useRef(null);
  const text3 = useRef(null);
  const view = useRef(null);

  const [mouseposition, setmouseposition] = useState(false)

  const parentbox = useRef(null);
  const cursorElement = useRef(null);

  useEffect(() => {
    // Initial animation setup
    gsap.set([text1.current, text2.current, text3.current], {
      opacity: 0,
      x: 100,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: view.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    tl.to(text1.current, {
      x: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power3.out",
    })
      .to(
        text2.current,
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
        },
        "-=0.8"
      )
      .to(
        text3.current,
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.8"
      );

    const main = parentbox.current;
    const cursor = cursorElement.current;

    const moveCursor = (dets) => {
      setmouseposition(true)
      console.log(mouseposition)
      gsap.to(cursor, {
        x: dets.clientX - 55,
        y: dets.clientY - 55,
        duration: 1,
        ease: "power2.out",
      });
    };

    main.addEventListener("mousemove", moveCursor);

    main.addEventListener("mouseleave", function(){
      setmouseposition(false)
      console.log(mouseposition)
    })

    return () => {
      tl.kill();
      main.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      ref={view}
      className="w-full h-screen px-20 gap-3 flex items-center justify-center"
    >
      {/* LEFT BOX */}
      <div className="w-[60%] h-full flex flex-col justify-center bg-main">
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

      {/* RIGHT BOX */}
      <div className="w-[40%] relative flex items-center justify-center h-full">
        <div
          ref={parentbox}
          className="h-[550px] relative w-[350px] overflow-hidden rounded-lg bg-gray-50"
        >
          <div
            ref={cursorElement}
            className={`h-[120px] w-[120px] cursor-pointer fixed left-0 top-0 z-50 bg-mainlight/60 flex items-center justify-center rounded-full  ${mouseposition? "block" : "hidden"}`}
          >
            <span className="text-white  cursor-pointer font-semibold text-xl uppercase">
              <FaPlay className="text-4xl" />
            </span>
          </div>

          <div className="absolute top-0 left-0 h-full w-full bg-green-50">
            <img
            src="/images/taekwondo/main.png"
            className="h-full w-full object-cover"
            alt="Taekwondo"
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Taekwondo;
