"use client";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import React from "react";
import { motion } from "motion/react";
import BoardImage from "@/public/Board/boardLanding.webp";
import { Link as Scroll } from "react-scroll";

const Landing = () => {
  // const scrollToSection = (sectionId: string) => {
  //   const section = document.getElementById(sectionId);
  //   const headerHeight = 56;
  //   if (section) {
  //     window.scrollTo({
  //       top: section.offsetTop - headerHeight,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  return (
    <>
      <div className="m-0 flex flex-col p-0 lg:hidden">
        <div className="relative w-full">
          <motion.div
            initial={{
              opacity: 0,
              filter: "blur(20px)",
            }}
            animate={{
              opacity: 1,
              filter: "blur(0px)",
              transition: { duration: 1 },
            }}
          >
            <Image
              src={BoardImage}
              alt="board group image"
              width={1920}
              height={1080}
              className="h-auto w-full object-cover brightness-50"
            />
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: -50,
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.8 },
            }}
            className="absolute inset-0 flex items-center justify-center font-caveat-brush text-5xl text-white sm:text-7xl md:text-8xl"
          >
            BOARD
          </motion.div>
        </div>
        <div className="flex w-full items-center justify-center bg-white py-[4%] lg:py-0">
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 1, delay: 1.1 },
            }}
            className="font-inika text-3xl sm:text-5xl lg:text-6xl"
          >
            MEET THE BOARD
          </motion.div>

          <Scroll to="members" spy={true} smooth={true} offset={-80}>
            <motion.div
              whileTap={{ scale: 0.9 }}
              initial={{
                opacity: 0,
                y: -50,
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 1, delay: 1.1 },
              }}
              className="ml-4 block cursor-pointer"
            >
              <ArrowDown className="h-10 w-10 sm:h-16 sm:w-16 lg:h-40 lg:w-40 xl:h-60 xl:w-60" />
            </motion.div>
          </Scroll>
        </div>
      </div>

      <div className="hidden h-screen lg:flex">
        <div className="flex w-1/3 flex-col items-center justify-center bg-white p-4 text-center">
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.5, delay: 1 },
            }}
            className="font-inika text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl"
          >
            <p className="mb-4">MEET</p>
            <p className="mb-4">THE</p>

            <p className="mb-4">BOARD</p>
          </motion.div>
          <Scroll to="members" spy={true} smooth={true} offset={-50}>
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              initial={{
                opacity: 0,
                x: 50,
              }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.5, delay: 1 },
              }}
            >
              <ArrowDown
                className="mt-4 cursor-pointer"
                // onClick={() => scrollToSection("board")}
                size={80}
              />
            </motion.div>
          </Scroll>
        </div>

        <div className="relative flex w-2/3 items-center justify-center">
          <motion.div
            initial={{
              opacity: 0,
              filter: "blur(5px)",
            }}
            animate={{
              opacity: 1,
              filter: "blur(0px)",
              transition: { duration: 1 },
            }}
            className="absolute inset-0 h-full w-full"
          >
            <Image
              src={BoardImage}
              alt="board group image"
              fill
              style={{ objectFit: "cover" }}
              className="brightness-50"
            />
          </motion.div>

          <motion.p
            initial={{
              opacity: 0,
              y: -50,
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.8 },
            }}
            className="z-10 font-caveat-brush text-3xl text-white md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl"
          >
            BOARD
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default Landing;
