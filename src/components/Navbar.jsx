import React, { useRef, useState, useEffect } from "react";
import Magnet from "./Animation/Magnet";
import gsap from "gsap";
import { Link } from "react-router-dom";

const Navbar = () => {
  const Line1 = useRef(null);
  const Line2 = useRef(null);
  const mainmenu = useRef(null);
  const navlinks = useRef([]);
  const imageRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeImage, setActiveImage] = useState("/images/nav1.jpg");
  const scrollTimeout = useRef(null);

  const links = [
    { name: "home", path: "/", img: "/images/nav1.jpg" },
    { name: "about", path: "/about", img: "/images/nav2.jpg" },
    { name: "projects", path: "/projects", img: "/images/nav3.jpg" },
    { name: "blog", path: "/blog", img: "/images/nav4.jpg" },
    { name: "contact", path: "/contact", img: "/images/nav5.jpg" },
  ];

  // Scroll blur effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(true);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => setIsScrolled(false), 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  // Toggle Menu Animation
  const toggleCross = () => {
    const tl = gsap.timeline({ defaults: { ease: "power3.inOut", duration: 0.5 } });

    if (!isOpen) {
      tl.to(Line1.current, { rotate: 45, y: 6 })
        .to(Line2.current, { rotate: -45, y: -6 }, "<")
        .to(mainmenu.current, { top: 0, duration: 0.8, ease: "power4.out" })
        .fromTo(
          navlinks.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.15, duration: 0.7, ease: "back.out(1.7)" },
          "-=0.3"
        );
    } else {
      tl.to(Line1.current, { rotate: 0, y: 0 })
        .to(Line2.current, { rotate: 0, y: 0 }, "<")
        .to(mainmenu.current, { top: "-100%", duration: 1, ease: "power4.inOut" });
    }

    setIsOpen(!isOpen);
  };

  // Close Menu
  const closemenu = () => {
    setIsOpen(false);
    gsap.to(Line1.current, { rotate: 0, y: 0, duration: 0.4 });
    gsap.to(Line2.current, { rotate: 0, y: 0, duration: 0.4 });
    gsap.to(mainmenu.current, { top: "-100%", duration: 1, ease: "power4.inOut" });
  };

  // Handle Hover to Change Image
  const handleHover = (imgPath) => {
    setActiveImage(imgPath);
    gsap.fromTo(
      imageRef.current,
      { scale: 1.1, filter: "contrast(150%) brightness(80%) blur(4px)" },
      {
        scale: 1,
        filter: "contrast(100%) brightness(100%) blur(0px)",
        duration: 0.8,
        ease: "power2.out",
      }
    );
  };

  return (
    <>
      {/* Navbar */}
      <div
        className={`h-20 w-screen fixed justify-between z-50 flex items-center px-7 transition-all duration-500  
        ${
          isOpen
            ? "bg-transparent"
            : isScrolled
            ? "backdrop-blur-sm bg-black bg-opacity-35"
            : "bg-transparent"
        }`}
      >
        <div className="logo">
          <img src="/images/logo.png" className="h-10" alt="Logo" />
        </div>

        <div className="menu">
          <Magnet padding={100} disabled={false} magnetStrength={5}>
            <div
              onClick={toggleCross}
              className="h-12 w-12 cursor-pointer flex items-center flex-col gap-2 justify-center border border-white rounded-full lg:h-16 lg:w-16"
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
        className="h-screen flex items-center justify-center gap-20 w-full fixed -top-[100vh] z-40 bg-black"
      >
        <div className="flex flex-col justify-center w-[550px]">
          {links.map((link, index) => (
            <div
              key={index}
              ref={(el) => (navlinks.current[index] = el)}
              className="overflow-hidden"
            >
              <Link
                to={link.path}
                onClick={closemenu}
                onMouseEnter={() => handleHover(link.img)}
                className="block text-7xl lg:text-8xl font-barlow font-semibold uppercase text-white relative hover:text-red-500 transition-all duration-300"
              >
                {link.name}
              </Link>
            </div>
          ))}
        </div>

        {/* Right Side Image with Wave Effect */}
        <div className="hidden md:flex overflow-hidden h-[80vh] w-[400px] bg-zinc-900 rounded-3xl items-center justify-center relative">
          <img
            ref={imageRef}
            src={activeImage}
            alt="Preview"
            className="h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-105 hover:brightness-110"
            style={{
              filter: "contrast(120%) brightness(95%)",
              transformOrigin: "center",
            }}
          />

          {/* subtle animated overlay wave */}
          <div className="absolute inset-0 bg-[url('/images/wave-overlay.png')] opacity-25 mix-blend-overlay animate-wave"></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
