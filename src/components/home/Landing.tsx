"use client";
import React from "react";
import BackgroundImage from "@/public/home/home-landing.webp";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const Landing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div className="relative">
      <motion.div
        initial={{
          opacity: 0,
          filter: "blur(20px)",
        }}
        animate={{
          opacity: 1,
          filter: "blur(0px)",
          transition: { duration: 2.5 },
        }}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <Image
          className="relative w-screen brightness-50 max-md:bottom-8"
          src={BackgroundImage}
          alt="background landing page"
        />
      </motion.div>
      <div className="items-center text-white">
        <div className="absolute top-[9%] -mx-7 font-caveat-brush text-9xl max-lg:left-0 max-lg:text-8xl max-md:left-[13%] max-md:top-[25%] max-md:text-6xl max-sm:left-[15%] max-sm:text-[3rem] md:mx-16 lg:mx-8 lg:text-9xl">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 90 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.75,
              ease: "easeOut",
              delay: isInView ? 0.2 : 0,
              bounce: 0.3,
            }}
          >
            TAEKWONDO @ UCR
          </motion.div>
        </div>
        <div className="max-sm:text-md absolute bottom-[8%] right-[4%] font-inika text-5xl max-lg:text-3xl max-md:bottom-[18%] max-md:text-base">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.75,
              ease: "easeOut",
              delay: isInView ? 0.5 : 0.3,
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
