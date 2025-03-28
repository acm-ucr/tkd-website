"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { Member } from "@/types/board_members";

const BoardMemberCard = ({ url, position, name }: Member) => {
  return (
    <motion.div
      className="relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.75, delay: 0.25 } },
        }}
        className="absolute bottom-4 right-4 z-[2] h-96 w-72 border-[1px] border-white max-md:h-72 max-md:w-56 max-sm:h-56 max-sm:w-44"
      />
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 1 } },
        }}
        className="relative z-[1] h-96 w-72 max-md:h-72 max-md:w-56 max-sm:h-56 max-sm:w-44"
      >
        <Image src={url} alt={name} fill style={{ objectFit: "cover" }} />
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.75, delay: 0.5 } },
        }}
        className="absolute -bottom-5 left-8 z-[3] h-fit w-56 overflow-hidden text-wrap rounded-md bg-tkd-blue-100 px-5 py-1 text-center font-inika max-md:left-4 max-md:w-44 max-sm:left-2 max-sm:w-36"
      >
        <p className="text-xl max-sm:text-base">{name}</p>
        <p className="text-base max-sm:text-sm">{position}</p>
      </motion.div>
    </motion.div>
  );
};

export default BoardMemberCard;
