"use client";
import { motion } from "motion/react";

const Mission = () => {
  return (
    <div className="flex w-full flex-col items-center bg-white py-[10%]">
      <motion.p
        className="m-2 mb-[2%] text-center font-inika text-[4vw] font-bold"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, type: "spring", stiffness: 60 }}
      >
        OUR MISSION
      </motion.p>

      <motion.p
        className="m-0 w-[60%] text-center font-inika text-[2vw] sm:m-3 sm:w-[57%]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 80 }}
      >
        The mission of the Taekwondo Club is to provide training for those of
        all skill levels. We welcome all those who have previous experience,
        zero experience, are martial arts enthusiasts, or generally curious of
        the sport. We aim to teach the rich Korean culture of Taekwondo to all
        members, as well as the development of competitive skills while having
        fun.
      </motion.p>
    </div>
  );
};

export default Mission;
// export default dynamic(() => Promise.resolve(Mission), { ssr: false });
