"use client";
import { MoveDown } from "lucide-react";
import { Link as Scroll } from "react-scroll";
import EventCard from "@/components/events/EventCard";
import { motion } from "motion/react";

import { EventProps } from "@/types/calendar";

type EventColProps = {
  events: EventProps[];
};

const EventCol = ({ events }: EventColProps) => {
  return (
    <div className="flex flex-col bg-white lg:w-[35%]">
      {/* Mobile Event Cards */}
      <div className="mt-4 flex flex-col px-8 lg:hidden">
        <EventCard
          direction="left"
          customStyle=""
          description={events[1]?.description || ""}
          title={events[1]?.title || ""}
        />
        <EventCard
          direction="right"
          customStyle="text-right self-end"
          description={events[0]?.description || ""}
          title={events[0]?.title || ""}
        />
      </div>

      {/* Desktop Event Cards */}
      <div className="my-[10%] hidden flex-col lg:flex">
        <EventCard
          direction="right"
          customStyle="text-right self-end"
          description={events[1]?.description || ""}
          title={events[1]?.title || ""}
        />
        <EventCard
          direction="left"
          customStyle="mt-[8%]"
          description={events[0]?.description || ""}
          title={events[0]?.title || ""}
        />
      </div>

      <Scroll
        to="calendar"
        spy={true}
        smooth={true}
        offset={-100}
        className="hidden cursor-pointer flex-col items-center self-center lg:flex"
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
          className="text-3xl"
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

export default EventCol;
