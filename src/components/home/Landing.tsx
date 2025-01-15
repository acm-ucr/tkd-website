import React from "react";
import BackgroundImage from "@/../public/home/postcss.config.webp";
import Image from "next/image";

const Landing = () => {
  return (
    <div className="relative">
      <Image
        className="w-screen brightness-50"
        src={BackgroundImage}
        alt="background landing page"
      />
      <div className="items-center justify-center text-white">
        <div className="absolute left-[5%] top-[9%] font-caveat-brush text-9xl">
          TAEKWONDO @ UCR
        </div>
        <div className="absolute bottom-[8%] right-[4%] font-inika text-5xl">
          Welcome to Taekwondo Club at UCR!
        </div>
      </div>
    </div>
  );
};

export default Landing;
