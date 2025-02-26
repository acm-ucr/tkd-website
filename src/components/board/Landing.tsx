"use client";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import React from "react";

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
      <div className="m-0 flex w-screen flex-col p-0 lg:hidden">
        <div className="relative w-full">
          <Image
            src="/board/boardLanding.webp"
            alt="board group image"
            width={1920}
            height={1080}
            className="h-auto w-full object-cover brightness-50"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="font-caveat-brush text-5xl text-white sm:text-7xl md:text-8xl">
              BOARD
            </p>
          </div>
        </div>
        <div className="flex w-full items-center justify-center bg-white py-[4%] lg:py-0">
          <div className="flex items-center">
            <p className="font-inika text-3xl sm:text-5xl md:text-6xl">
              MEET THE BOARD
            </p>
            <div
              className="ml-4 cursor-pointer"
              onClick={() => scrollToSection("board")}
            >
              <span className="block sm:hidden">
                <ArrowDown size={30} />
              </span>
              <span className="hidden sm:block md:hidden">
                <ArrowDown size={40} />
              </span>
              <span className="hidden md:block">
                <ArrowDown size={60} />
              </span>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-white"></div>
      </div>

      <div className="hidden h-screen w-screen lg:flex">
        <div className="flex w-1/3 flex-col items-center justify-center bg-white p-4 text-center">
          <p className="mb-4 font-inika text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
            MEET
          </p>
          <p className="mb-4 font-inika text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
            THE
          </p>
          <p className="mb-8 font-inika text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
            BOARD
          </p>
          <div
            className="mt-4 cursor-pointer"
            onClick={() => scrollToSection("board")}
          >
            <ArrowDown size={80} />
          </div>
        </div>
        <div className="relative w-2/3">
          <div className="absolute inset-0 h-full w-full">
            <Image
              src="/board/boardLanding.webp"
              alt="board group image"
              fill
              style={{ objectFit: "cover" }}
              className="brightness-50"
            />
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <p className="font-caveat-brush text-3xl text-white md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl">
              BOARD
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
