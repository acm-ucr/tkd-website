import React from "react";
import BackgroundImage from "@/public/landing/postcss.config.webp";
import Image from "next/image";

const Landing = () => {
  return (
    <div className="relative">
      <Image
        className="w-screen h-screen brightness-50"
        src={BackgroundImage}
        alt="background landing page"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <div className="relative bottom-[34%] right-[25%] font-caveat-brush text-9xl">
          Taekwondo @ UCR
        </div>
        <div className="relative left-[26%] top-[36%] font-inika text-5xl">
          Welcome to Taekwondo Club at UCR!
        </div>
      </div>
    </div>
  );
};

export default Landing;
