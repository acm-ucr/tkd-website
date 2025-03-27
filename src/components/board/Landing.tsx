"use client";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import React from "react";
import { motion } from "motion/react";
import BoardImage from "@/public/Board/boardLanding.webp";

const Landing = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    const headerHeight = 56;
    if (section) {
      window.scrollTo({
        top: section.offsetTop - headerHeight,
        behavior: "smooth",
      });
    }
  };

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
            style={{
              width: "100%",
              height: "100%",
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
          <div className="absolute inset-0 flex items-center justify-center">
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
            >
              <p className="font-caveat-brush text-5xl text-white sm:text-7xl md:text-8xl">
                BOARD
              </p>
            </motion.div>
          </div>
        </div>
        <div className="flex w-full items-center justify-center bg-white py-[4%] lg:py-0">
          <div className="flex items-center">
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
            >
              <p className="font-inika text-3xl sm:text-5xl md:text-6xl">
                MEET THE BOARD
              </p>
            </motion.div>

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
            >
              <div
                className="ml-4 cursor-pointer"
                onClick={() => scrollToSection("board")}
              >
                <span className="block">
                  <ArrowDown className="h-16 w-16 md:h-40 md:w-40 lg:h-60 lg:w-60" />
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="flex-1 bg-white"></div>
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
          >
            <p className="mb-4 font-inika text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
              MEET
            </p>
            <p className="mb-4 font-inika text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
              THE
            </p>
            <p className="mb-8 font-inika text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
              BOARD
            </p>
          </motion.div>
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
              onClick={() => scrollToSection("board")}
              size={80}
            />
          </motion.div>
        </div>

        <div className="relative w-2/3">
          <div className="absolute inset-0 h-full w-full">
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
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <Image
                src={BoardImage}
                alt="board group image"
                fill
                style={{ objectFit: "cover" }}
                className="brightness-50"
              />
            </motion.div>
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
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
            >
              <p className="font-caveat-brush text-3xl text-white md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl">
                BOARD
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
