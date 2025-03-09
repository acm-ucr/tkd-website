"use client";

import React from "react";
import Image from "next/image";
import Background from "@/public/about/about_landing.webp";
import { motion } from "framer-motion";

const Landing = () => {
  return (
    <div className="relative w-full">
      <motion.div
        initial={{ filter: "blur(10px) brightness(0.5)" }}
        animate={{ filter: "blur(0px) brightness(0.5)" }}
        transition={{ duration: 2 }}
      >
        <Image
          src={Background}
          className="aspect-video w-full object-cover"
          alt="Landing background image"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 z-10 flex items-center justify-center font-caveat-brush text-5xl font-extrabold uppercase text-white sm:text-6xl md:inset-auto md:left-[7%] md:top-[7%] md:items-start md:justify-start md:text-7xl lg:text-9xl"
      >
        About Us
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="xs:right-3 xs:text-sm sm:text-md absolute bottom-4 right-2 z-10 max-w-[85%] text-right text-xs font-medium text-white sm:right-4 sm:max-w-[75%] md:bottom-4 md:right-4 md:max-w-none md:text-4xl"
      >
        Come join us!  <br />
        See Below for our practice times!
      </motion.p>
    </div>
  );
};

export default Landing;
