"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Mission = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 1,
        ease: "easeOut",
        type: "spring",
        stiffness: 120,
      }}
      className="flex w-full flex-col items-center py-[6%]"
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        className="m-2 mb-8 text-center font-inika text-4xl font-bold sm:text-5xl sm:leading-[95%]"
      >
        OUR MISSION
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
        className="m-0 w-[80%] text-center font-inika text-xl sm:m-3 sm:w-[57%] sm:text-3xl sm:leading-[139%]"
      >
        The mission of the Taekwondo Club is to provide training for those of
        all skill levels. We welcome all those who have previous experience,
        zero experience, are martial arts enthusiasts, or generally curious of
        the sport. We aim to teach the rich Korean culture of Taekwondo to all
        members, as well as the development of competitive skills while having
        fun.
      </motion.p>
    </motion.div>
  );
};

export default Mission;
