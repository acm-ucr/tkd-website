"use client";
import { MoveDown } from "lucide-react";
import { Link as Scroll } from "react-scroll";
import Card from "@/components/events/Card";
import { motion } from "motion/react";

import { EventProps } from "@/types/calendar";

type RightColProps = {
  events: EventProps[];
};

const RightCol = ({ events }: RightColProps) => {
  return (
    <div className="relative flex flex-col bg-white lg:w-[35%]">
      {events.length === 0 ? (
        <p className="mx-auto my-[20%] w-3/4 text-center text-2xl xl:text-2xl">
          No upcoming events right now. Check back soon!
        </p>
      ) : (
        <>
          {/* Mobile Event Cards */}
          <div className="mt-4 flex flex-col px-8 lg:hidden">
            {events.map((event, index) => (
              <Card
                key={index}
                direction={index === 0 ? "left" : "right"}
                customStyle={index === 0 ? "" : "text-right self-end"}
                description={event.description || ""}
                title={event.title || ""}
                start_time={event.start || ""}
                end_time={event.end || ""}
              />
            ))}
          </div>

          {/* Desktop Event Cards */}
          <div className="my-[10%] hidden flex-col lg:flex">
            {events.map((event, index) => (
              <Card
                key={index}
                direction={index === 0 ? "left" : "right"}
                customStyle={index === 0 ? "" : "text-right self-end"}
                description={event.description || ""}
                title={event.title || ""}
                start_time={event.start || ""}
                end_time={event.end || ""}
              />
            ))}
          </div>
        </>
      )}

      <Scroll
        to="calendar"
        spy={true}
        smooth={true}
        offset={-100}
        className="absolute bottom-[10%] hidden cursor-pointer flex-col items-center self-center lg:flex"
      >
        <motion.p
          initial={{
            opacity: 0,
            x: -50,
          }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { duration: 1, delay: 0.6 },
          }}
          className="text-2xl xl:text-3xl"
        >
          More Events
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0.8 },
          }}
          whileHover={{
            scale: 1.2,
          }}
          whileTap={{
            scale: 0.8,
          }}
          className="my-4"
        >
          <MoveDown size={55} strokeWidth={1} />
        </motion.div>
      </Scroll>
    </div>
  );
};

export default RightCol;
