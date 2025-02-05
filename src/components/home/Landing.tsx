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
      <div className="flex items-center justify-center text-white">
        <div className="absolute left-[5%] top-[9%] font-caveat-brush text-9xl max-lg:text-8xl max-md:text-7xl max-sm:left-32 max-sm:top-24 max-sm:text-4xl">
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
