"use client";
import AdditionalInfo from "@/components/about/AdditionalInfo";
import Mission from "@/components/about/Mission";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="">
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 1,
          ease: "easeOut",
          type: "spring",
          stiffness: 100,
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Mission />
      </motion.div>
      <AdditionalInfo />
    </div>
  );
};

export default About;
