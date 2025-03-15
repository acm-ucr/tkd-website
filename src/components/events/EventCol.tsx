"use client";
import { MoveDown } from "lucide-react";
import { Link as Scroll } from "react-scroll";
import EventCard from "@/components/events/EventCard";
import { motion } from "motion/react";

// type eventProps = {
//   event: string;
//   description: string;
//   time: string;
// };

const EventCol = () => {
  return (
    <div className="flex flex-col bg-white lg:w-[35%]">
      {/* Mobile Event Cards */}
      <div className="mt-4 flex flex-col px-8 lg:hidden">
        <EventCard
          direction="left"
          customStyle=""
          description="Event 1 description goes here. Event 2 description goes here. Event 2 description goes here."
          title="EVENT 1"
        />
        <EventCard
          direction="right"
          customStyle="text-right self-end"
          description="Event 2 description goes here. Event 2 description goes here. Event 2 description goes here. Event 2 description goes here."
          title="EVENT 2"
        />
      </div>

      {/* Desktop Event Cards */}
      <div className="my-[10%] hidden flex-col lg:flex">
        <EventCard
          direction="right"
          customStyle="text-right self-end"
          description="Event 1 description goes here. Event 2 description goes here. Event 2 description goes here."
          title="EVENT 1"
        />
        <EventCard
          direction="left"
          customStyle="mt-[8%]"
          description="Event 2 description goes here. Event 2 description goes here. Event 2 description goes here."
          title="EVENT 2"
        />
      </div>

      <Scroll
        to="calendar"
        spy={true}
        smooth={true}
        offset={-100}
        className="hidden cursor-pointer flex-col items-center self-center lg:flex"
      >
        <motion.div
          initial={{
            opacity: 0,
            x: -50,
          }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { duration: 1, delay: 0.6 },
          }}
        >
          <p className="text-3xl">More Events</p>
        </motion.div>

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

    // <div className="space-y-6 md:w-1/4 lg:w-1/6">
    //   <div className="w-full border-2 border-tkd-red-200 bg-tkd-red-100 py-2 text-center text-3xl text-white">
    //     {event}
    //   </div>
    //   <div className="justify-items-end pr-5 text-xl">
    //     <p>{description}</p>
    //     <p>{time}</p>
    //   </div>
    // </div>
  );
};

export default EventCol;
