"use client";
import React from "react";
import Button from "@/components/Button";
import Image from "next/image";
import GroupPhoto from "@/../public/home/Signupemember.webp";

const Signup = () => {
  return (
    <div className="bg-white px-[4%] py-6 md:py-[6%]">
      <p className="mb-4 text-center font-inika text-2xl font-bold text-black md:mb-[5%] md:text-6xl">
        Interested in Becoming a Member?
      </p>

      <div className="flex flex-col items-center gap-5 lg:flex-row lg:justify-self-center">
        <div className="w-fit lg:w-1/2">
          <div className="break-words px-[5%] font-inika text-[3vw] text-black md:leading-relaxed lg:px-[10%] lg:text-[1.5vw]">
            <p className="font-bold underline underline-offset-1">
              Practice Times:
            </p>
            <ul className="list-disc">
              <li>Mondays and Wednesdays from 9:15pm-10:55pm</li>
              <li>Fridays from 6:00pm-6:55pm</li>
            </ul>
            <p className="font-bold underline underline-offset-1">
              Before You Come To Practice:
            </p>
            <ul className="list-disc">
              <li>Fill Out DoSportsEasy:</li>
            </ul>
            <ul className="list-decimal">
              <li>Log in to your UCR account</li>
              <li>Find Taekwondo @ UCR and click 'registration'</li>
              <li>Fill out the information and complete all steps!</li>
            </ul>
            <ul className="list-disc">
              <li>Register as a member of the club on Highlander Link:</li>
            </ul>
            <ul className="list-decimal">
              <li>Log in to your UCR account</li>
              <li>Sign up!</li>
              <li>Fill out any information and complete all steps!</li>
            </ul>
          </div>

          <div className="mb-[4%] mt-[8%] flex flex-row justify-center gap-[8%]">
            <Button
              link="https://highlanderlink.ucr.edu/organization/tkd"
              target="_blank"
              variant="blue"
              className="transition-transform duration-200 hover:scale-105 active:scale-95 sm:text-lg lg:text-xl"
            >
              Highlander Link
            </Button>

            <Button
              link="https://recreation.ucr.edu/competitive-sports/sport-clubs"
              target="_blank"
              variant="blue"
              className="transition-transform duration-200 hover:scale-105 active:scale-95 sm:text-lg lg:text-xl"
            >
              DoSportsEasy Form
            </Button>
          </div>
        </div>

        <Image
          src={GroupPhoto}
          alt="group photo"
          className="w-[90%] rounded-lg lg:w-1/2 lg:rounded-xl"
        />
      </div>
    </div>
  );
};

export default Signup;
