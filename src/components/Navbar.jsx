import React, { useRef, useState, useEffect } from "react";
import Magnet from "./Animation/Magnet";
import gsap from "gsap";

const Navbar = () => {
  const Line1 = useRef(null);
  const Line2 = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollTimeout = useRef(null); // Ref to store the timeout ID

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(true);

      // Clear previous timeout if scrolling continues
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

      // Set a timeout to remove blur after 500ms of no scrolling
      scrollTimeout.current = setTimeout(() => {
        setIsScrolled(false);
      }, 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  const toggleCross = () => {
    if (!isOpen) {
      gsap.to(Line1.current, {
        rotate: "45deg",
        duration: 0.5,
        ease: "power3.out",
        transformOrigin: "center",
        y: 6,
      });
      gsap.to(Line2.current, {
        rotate: "-45deg",
        duration: 0.5,
        ease: "power2.inOut",
        transformOrigin: "center",
        y: -6,
      });
    } else {
      gsap.to(Line1.current, {
        rotate: "0deg",
        duration: 0.5,
        ease: "power2.inOut",
        y: 0,
      });
      gsap.to(Line2.current, {
        rotate: "0deg",
        duration: 0.5,
        ease: "power2.inOut",
        y: 0,
      });
    }

    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`h-20 w-screen fixed justify-between z-50  flex items-center px-7 transition-all duration-500  ${
        isScrolled ? "backdrop-blur-sm bg-black bg-opacity-35" : "bg-transparent backdrop-blur-none"
      }`}
    >
      <div className="logo">
        <img src="/images/logo.png" className="h-10" alt="Logo" />
      </div>
      <div className="menu">
        <Magnet padding={100} disabled={false} magnetStrength={5}>
          <div
            onClick={toggleCross}
            className="h-12 w-12 cursor-pointer flex items-center flex-col gap-2 justify-center border-[1px] rounded-full lg:h-16 lg:w-16"
          >
            <div ref={Line1} className="h-1 w-8  bg-white lg:w-9 "></div>
            <div ref={Line2} className="h-1 w-8  bg-white  lg:w-9"></div>
          </div>
        </Magnet>
      </div>
    </div>
  );
};

export default Navbar;
