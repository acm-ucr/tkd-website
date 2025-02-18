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
      <div className="items-center text-white">
        <div className="absolute top-[9%] -mx-7 font-caveat-brush text-9xl max-lg:left-0 max-lg:text-8xl max-md:top-1/4 max-md:text-5xl max-sm:left-1/4 max-sm:top-1/3 max-sm:text-4xl md:mx-16 lg:mx-8 lg:text-9xl">
          TAEKWONDO @ UCR
        </div>
        <div className="max-sm:text-md max-sm:text-md absolute bottom-[8%] right-[4%] font-inika text-5xl max-lg:text-3xl max-md:text-base max-sm:text-xs">
          Welcome to Taekwondo Club at UCR!
        </div>
      </div>
    </div>
  );
};

export default Landing;
