import React from "react";
import ShinyText from "./Animation/ShinyText";

const Shortintro = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center gap-10 bg-main">
      <div className="w-1/3 bg-green-50 rounded-xl overflow-hidden h-[80vh]">
            <img className="h-full w-full object-cover" src="/images/2.jpg" alt="" />
      </div>
      <div className="w-1/2 px-10  h-[80vh]">
        <h1 className="text-8xl uppercase  font-barlow  font-extrabold">About <span className="text-mainlight">Me</span></h1>
        <p className=" mt-6 text-[#837979] font-extralight tracking-wider">I'm not just a web developer — I'm a creative mind, a visual storyteller, and a disciplined athlete. As a passionate Frontend Developer and Graphic Designer, I bring ideas to life with code and design. And when I'm not creating, I'm training as a Taekwondo player, blending focus, strength, and dedication in every part of life.</p>
           <div className=" mt-10">
          <button className="px-3 py-1 border-[1px] border-zinc-600 rounded-full "><ShinyText text="Know More" disabled={false} speed={3} className='custom-class' /></button>
        </div>
      </div>
    </div>
  );
};

export default Shortintro;
