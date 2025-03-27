"use client";
import React from "react";
import BackgroundImage from "@/public/home/home-landing.webp";
import Image from "next/image";
import { motion } from "motion/react";

const Landing = () => {
  return (
    <div className="relative bg-white">
      <motion.div
        initial={{
          opacity: 0.25,
          filter: "blur(20px)",
        }}
        animate={{
          opacity: 1,
          filter: "blur(0px)",
          transition: { duration: 1.5 },
        }}
      >
        <Image
          className="h-auto w-screen brightness-50"
          src={BackgroundImage}
          alt="background landing page"
        />
      </motion.div>
      <div className="items-center text-white">
        <div className="absolute left-[4%] top-[4%] text-nowrap font-caveat-brush text-[8vw] max-md:left-1/2 max-md:top-1/2 max-md:-translate-x-1/2 max-md:-translate-y-1/2">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.75,
              ease: "easeOut",
              delay: 1,
              bounce: 0.3,
            }}
          >
            TAEKWONDO @ UCR
          </motion.div>
        </div>
        <div className="max-sm:text-md absolute bottom-[8%] right-[4%] font-inika text-5xl max-lg:text-3xl max-md:bottom-[8%] max-md:text-base">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.75,
              ease: "easeOut",
              delay: 1.3,
              bounce: 0.3,
            }}
          >
            Welcome to Taekwondo Club at UCR!
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
