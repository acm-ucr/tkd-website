import React from "react";
import BackgroundImage from "@/../public/home/postcss.config.webp";
import Image from "next/image";

const Landing = () => {
  return (
    <div className="relative">
      <Image
        className="relative w-screen brightness-50 max-md:bottom-8"
        src={BackgroundImage}
        alt="background landing page"
      />
      <div className="items-center text-white">
        <div className="absolute top-[9%] -mx-7 font-caveat-brush text-9xl max-lg:left-0 max-lg:text-8xl max-md:left-[13%] max-md:top-[25%] max-md:text-6xl md:mx-16 lg:mx-8 lg:text-9xl">
          TAEKWONDO @ UCR
        </div>
        <div className="max-sm:text-md absolute bottom-[8%] right-[4%] font-inika text-5xl max-lg:text-3xl max-md:bottom-[18%] max-md:text-base">
          Welcome to Taekwondo Club at UCR!
        </div>
      </div>
    </div>
  );
};

export default Landing;
