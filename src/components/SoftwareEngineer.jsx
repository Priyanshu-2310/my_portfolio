import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const SoftwareEngineer = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;

    gsap.to(marquee, {
      x: "-50%", // Move half the width for continuous effect
      duration: 18, // Adjust speed
      repeat: -1, // Infinite loop
      ease: "linear",
    });
  }, []);

  return (
    <div
      data-scroll
      data-section
      data-scroll-speed=".2"
      className="h-[30vh] w-full lg:py-40  mt-20 lg:h-[35vh] rounded-3xl bg-[#F3F0EB] flex items-center overflow-hidden relative"
    >
      <div ref={marqueeRef} className="flex whitespace-nowrap">
        {/* Duplicating the text to make it seamless */}
        {[...Array(2)].map((_, i) => (
          <h1
            key={i}
            className="text-[12vh] font-futura uppercase text-mainlight lg:text-[24vh]"
          >
            Software Engineer | Graphic Designer | UI/UX Designer &nbsp;
          </h1>
        ))}
      </div>
    </div>
  );
};

export default SoftwareEngineer;
