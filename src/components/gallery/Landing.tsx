"use client";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import landing from "@/public/gallery/landing-image.webp";

const Landing = () => {
  return (
    <div className="relative flex flex-col justify-center text-[8vw]">
      <motion.div
        initial={{
          opacity: 0,
          filter: "blur(20px)",
        }}
        animate={{
          opacity: 1,
          filter: "blur(0px)",
          transition: { duration: 1 },
        }}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <Image className="w-screen" src={landing} alt="Landing" />
      </motion.div>

      <div className="absolute inset-0 flex flex-col items-center font-caveat-brush text-white max-sm:top-[35%] sm:top-[35%] md:left-[50%] md:top-[4%]">
        <motion.div
          initial={{
            opacity: 0,
            y: -50,
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 1 },
          }}
        >
          <p>Gallery</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Landing;
