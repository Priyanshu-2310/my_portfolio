import React, { useEffect, useRef } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Aboutpage = () => {
  const page = useRef(null);
  const triggerbody = useRef(null);

  useEffect(() => {
    gsap.to(page.current, {
      height: "100%",
      width: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: triggerbody.current,
        start: "top center",
        end: "top 10%",
        scrub: true, // this syncs animation with scroll
         // for debug only, remove in production
      }
    });
  }, []);

  return (
    <div ref={triggerbody} className='h-[120vh] w-full flex items-center justify-center'>
      <div ref={page} className='h-[80vh] w-[80%] bg-[#7B7F52] rounded-t-2xl'>
        {/* Content goes here */}
      </div>
    </div>
  );
};

export default Aboutpage;
