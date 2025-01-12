import React from "react";
import BackgroundImage from "@/public/landing/DSC07563.webp";
import Image from "next/image";

const Landing = () => {
  return (
    <div className="relative">
      <Image
        className="w-screen"
        src={BackgroundImage}
        alt="background landing page"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <div className="relative bottom-[25%] right-[25%] font-caveat-brush text-9xl">
          Taekwondo @ UCR
        </div>
        <div className="relative left-[25%] top-[25%] font-inika text-5xl">
          Welcome to Taekwondo Club at UCR!
        </div>
      </div>
    </div>
  );
};

export default Landing;
