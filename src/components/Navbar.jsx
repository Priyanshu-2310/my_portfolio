import React, { useRef, useState, useEffect } from "react";
import Magnet from "./Animation/Magnet";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { Timeline } from "gsap/gsap-core";


const Navbar = () => {
  const Line1 = useRef(null);
  const Line2 = useRef(null);
  const mainmenu = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollTimeout = useRef(null);

  // Links


  // Gsap Timeline
  const tl = gsap.timeline()

  const home = useRef();
  const about = useRef();
  const projects = useRef();
  const blog = useRef();
  const contact = useRef();

  const links = [
    {
      name: "home",
      path: "/",
      refvalue: home,
    },
    {
      name: "about",
      path: "/about",
      refvalue: about,
    },
    {
      name: "projects",
      path: "/projects",
      refvalue: projects,
    },
    {
      name: "blog",
      path: "/blog",
      refvalue: blog,
    },
    {
      name: "contact",
      path: "/contact",
      refvalue: contact,
    },
  ];



  // Scroll blur effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(true);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

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

  // Toggle cross animation + menu
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
     tl.gsap.to(mainmenu.current, {
        top: 0,
        duration: 1,
        ease: "power4.inOut",
      });
       gsap.to(home.current, {
        bottom: 0,
        duration: 1,
        
      } )

      
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
      gsap.to(mainmenu.current, {
        top: "-100%",
        duration: 1,
        ease: "power4.inOut",
      });
     
    }
    setIsOpen(!isOpen);
  };

 

  const closemenu = () => {
    setIsOpen(false);
    gsap.to(Line1.current, { rotate: "0deg", duration: 0.5, y: 0 });
    gsap.to(Line2.current, { rotate: "0deg", duration: 0.5, y: 0 });
    gsap.to(mainmenu.current, {
      top: "-100%",
      duration: 1,
      ease: "power4.inOut",
    });
  };

  return (
    <>
      {/* Navbar */}
      <div
        className={`h-20 w-screen fixed justify-between z-50 flex items-center px-7 transition-all duration-500  
        ${
          isOpen
            ? "bg-transparent backdrop-blur-none"
            : isScrolled
            ? "backdrop-blur-sm bg-black bg-opacity-35"
            : "bg-transparent backdrop-blur-none"
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
              <div ref={Line1} className="h-1 w-8 bg-white lg:w-9"></div>
              <div ref={Line2} className="h-1 w-8 bg-white lg:w-9"></div>
            </div>
          </Magnet>
        </div>
      </div>

      {/* Menu Overlay */}
      <div
        ref={mainmenu}
        className="h-screen flex items-center justify-center gap-10 w-full fixed z-40 -top-[100vh] bg-mainlight"
      >
        <div className="h-[80vh] flex justify-center flex-col w-[550px]">
          {links.map((link, index) => {
            return (
              <div className="h-16 relative w-[470px] mb-6 overflow-hidden bg-red-500">
                <Link key={index}
                  ref={link.refvalue}
                  onClick={closemenu}
                  to={`${link.path}`}
                  className="text-8xl absolute -bottom-20 font-barlow font-semibold uppercase"
                >
                  {link.name}
                </Link>
              </div>
            );
          })}
        </div>
        <div className="h-[80vh] w-[450px] bg-green-50"></div>
      </div>
    </>
  );
};

export default Navbar;
