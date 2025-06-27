import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CircularText from "./Animation/CircularText";

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 }); // Lowered threshold for mobile
  const [animatedNumbers, setAnimatedNumbers] = useState({
    experience: 0,
    projects: 0,
    clients: 0,
  });

  useEffect(() => {
    const shouldAnimate =
      inView || (typeof window !== "undefined" && window.innerWidth < 768); // Mobile fallback

    if (shouldAnimate) {
      const interval = setInterval(() => {
        setAnimatedNumbers((prev) => ({
          experience: Math.min(prev.experience + 1, 2),
          projects: Math.min(prev.projects + 1, 12),
          clients: Math.min(prev.clients + 1, 8),
        }));
      }, 100);

      return () => clearInterval(interval);
    }
  }, [inView]);

  return (
    <div 
    
    className="rounded-3xl w-full flex flex-col lg:flex-row  mt-10 items-center bg-main">
      <div className="h-full relative w-1/2 flex items-center justify-center">
        <CircularText
          text="SOFTWARE*ENGINEER*"
          onHover="speedUp"
          spinDuration={20}
          className="absolute text-lg -top-10 left-24 text-mainlight"
        />
        <div className="imagecontainer flex flex-col items-center  rounded-xl w-[380px] bg-whitebg">
          <div className="image h-72 overflow-hidden mt-8 rounded-xl bg-black w-64">
            <img
              className="h-full w-full object-cover"
              src="/images/about.jpeg"
              alt=""
            />
          </div>
          <div className="textcontainer px-5 mb-5 mt-5 flex flex-col w-full items-center">
            <h1 className="text-main font-barlow font-bold uppercase text-3xl tracking-wider border-b-2 border-main">
              Priyanshu
            </h1>
            <p className="text-center text-main mt-5">
              A Software Engineer sculpting code that bridges imagination and
              functionality — one elegant solution at a time.
            </p>
          </div>
        </div>
      </div>
      <div className="w-screen lg:w-1/2 flex flex-col justify-center px-6 mt-10 h-[80vh]">
        <h1 className="text-[55px] lg:text-8xl tracking-wider leading-[50px] uppercase font-barlow font-extrabold">
          software
        </h1>
        <h1 className="text-6xl lg:text-8xl text-mainlight uppercase font-barlow font-extrabold">
          Engineer
        </h1>
        <p className="mt-6 font-extralight text-regular">
          Software engineering is my passion because it allows me to turn ideas
          into reality through code. I love solving problems, building
          innovative applications, and continuously learning new technologies.
          The blend of creativity and logic makes it truly fulfilling for me.
        </p>
        <div
          ref={ref}
          className="h-28 border-2 rounded-lg px-3 border-mainlight mt-20 flex gap-2 w-[300px] lg:w-[400px]"
        >
          {[
            { title: "Year of Experience", num: animatedNumbers.experience },
            { title: "Project Completed", num: animatedNumbers.projects },
            { title: "Worldwide Clients", num: animatedNumbers.clients },
          ].map((data, index) => (
            <motion.div
              key={index}
              className="h-full flex flex-col justify-center items-center w-1/3"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h1 className="text-5xl font-barlow font-semibold">+{data.num}</h1>
              <p className="text-[10px] text-zinc-500 mt-4">{data.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
