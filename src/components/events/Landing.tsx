"use client";
import landingEvent from "@/public/events/landingEvent.webp";
import Image from "next/image";
import Button from "@/components/Button";
import { MoveDown } from "lucide-react";
import Calendar from "./Calendar";
import { Link as Scroll, Element } from "react-scroll";
import { motion } from "motion/react";
// import { del } from "motion/react-client";

const Landing = () => {
  return (
    <div className="relative flex flex-col font-inika">
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
            className="z-10 w-full"
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

      <div className="mt-4 h-60 px-8 lg:hidden">
        <div className="absolute left-8 w-[45%]">
          <div className="w-fit">
            <motion.div
              initial={{
                opacity: 0,
                x: -50,
              }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { duration: 1, delay: 0.5 },
              }}
            >
              <Button
                txt="EVENT 1"
                link=""
                customStyle="bg-tkd-red-100 border-tkd-red-200"
                target="_blank"
                textSize="text-2xl"
                padding="px-6 py-1"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 1, delay: 0.5 },
            }}
          >
            <p className="mt-2 line-clamp-2 text-xl">Event 1 descriptions.</p>
          </motion.div>
        </div>

        <div className="absolute bottom-3 right-8 flex w-[45%] flex-col items-end text-right">
          <div className="w-fit">
            <motion.div
              initial={{
                opacity: 0,
                x: 50,
              }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { duration: 1, delay: 0.5 },
              }}
            >
              <Button
                txt="EVENT 2"
                link=""
                customStyle="bg-tkd-red-100 border-tkd-red-200"
                target="_blank"
                textSize="text-2xl"
                padding="px-6 py-1"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 1, delay: 0.5 },
            }}
          >
            <p className="mt-2 line-clamp-2 text-xl">Event 2 description.</p>
          </motion.div>
        </div>
      </div>

      <div className="hidden lg:block">
        <div className="absolute right-[5.7%] top-[9%] z-30 w-[14%]">
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 1, delay: 0.5 },
            }}
          >
            <Button
              txt="EVENT 1"
              link=""
              customStyle="bg-tkd-red-100 border-tkd-red-200"
              target="_blank"
              textSize="text-5xl"
              padding="px-[69.8%] py-[10%]"
            />
          </motion.div>
        </div>
        <div className="absolute left-[81%] top-[24%] z-30 w-[18%] break-words text-3xl">
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 1, delay: 0.5 },
            }}
          >
            Event 1 description goes here.
          </motion.div>
        </div>

        <div className="absolute left-[65%] top-[47%] z-30 w-[14%]">
          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 1, delay: 0.5 },
            }}
          >
            <Button
              txt="EVENT 2"
              link=""
              customStyle="bg-tkd-red-100 border-tkd-red-200"
              target="_blank"
              textSize="text-5xl"
              padding="px-[70.5%] py-[10%]"
            />
          </motion.div>
        </div>
        <div className="absolute left-[65.5%] top-[62%] z-30 w-[18%] break-words text-3xl">
          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 1, delay: 0.5 },
            }}
          >
            Event 2 description goes here.
          </motion.div>
        </div>
      </div>

      <Scroll
        to="calandar"
        spy={true}
        smooth={true}
        offset={-100}
        className="absolute left-[81.5%] top-[82%] hidden cursor-pointer lg:block"
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
          <p className="mb-[8%] ml-[-34%] w-[100%] text-3xl">More Events</p>
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
            x: 12,
          }}
          whileTap={{
            scale: 0.8,
            x: -12,
          }}
        >
          <MoveDown size={55} strokeWidth={1} />
        </motion.div>
      </Scroll>

      <Element name="calandar">
        <Calendar />
      </Element>
    </div>
  );
};

export default Landing;
