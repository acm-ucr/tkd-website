"use client";
import landingEvent from "@/public/events/landingEvent.webp";
import Image from "next/image";
import EventCol from "@/components/events/EventCol";
import { motion } from "motion/react";

import { EventProps } from "@/types/calendar";

type LandingProps = {
  events: EventProps[];
};

const Landing = ({ events }: LandingProps) => {
  return (
    <div className="flex flex-col overflow-hidden font-inika lg:flex-row">
      <div className="relative w-full lg:w-[65%]">
        <motion.div
          initial={{
            opacity: 0,
            filter: "blur(5px)",
          }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
            transition: { duration: 2 },
          }}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <Image
            src={landingEvent}
            alt="Landing image"
            className="z-10 h-full w-auto"
          />
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: { duration: 2 },
          }}
        >
          <p className="absolute left-1/2 top-[40%] z-20 -translate-x-1/2 font-caveat-brush text-4xl text-white md:text-6xl lg:text-9xl">
            EVENTS
          </p>
        </motion.div>
      </div>

      <EventCol events={events} />
    </div>
  );
};

export default Landing;
