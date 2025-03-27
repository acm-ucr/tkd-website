"use client";
import Image from "next/image";
import tkdicon from "/public/tkd-icon.webp";
import Link from "next/link";
import {
  SiFacebook,
  SiInstagram,
  SiDiscord,
} from "@icons-pack/react-simple-icons";
import { motion } from "motion/react";
import { ReactNode } from "react";

type IconCircleProps = {
  children: ReactNode;
  link: string;
};

const IconCircle = ({ children, link }: IconCircleProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      className="flex h-auto w-[16%] flex-col items-center justify-items-center md:h-full md:w-full"
    >
      <div className="flex aspect-square items-center justify-center rounded-full bg-tkd-grey-100 p-[28%]">
        {children}
      </div>
    </Link>
  );
};

const Footer = () => {
  const icons = [
    {
      name: "facebook",
      icon: <SiFacebook size={48} className="mr-[3%] text-tkd-blue-300" />,
      link: "https://www.facebook.com/groups/592125317872837/",
    },
    {
      name: "instagram",
      icon: <SiInstagram size={48} className="text-tkd-blue-300" />,
      link: "https://www.instagram.com/tkdatucr/",
    },
    {
      name: "discord",
      icon: <SiDiscord size={48} className="text-tkd-blue-300" />,
      link: "https://discord.gg/ungzmJyVyY",
    },
  ];

  return (
    <footer className="relative h-auto w-full bg-tkd-blue-300 font-inika">
      <div className="hidden items-center justify-around py-[6.5%] sm:visible md:flex">
        <div className="flex h-[25%] w-[30%] justify-around font-inika max-lg:gap-[2rem] sm:text-xs lg:text-base xl:text-2xl">
          {icons.map((icon, index) => (
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex h-auto flex-col items-center justify-items-center sm:w-[20%] lg:w-[20%] xl:w-[18%]"
              key={index}
            >
              <IconCircle link={icon.link}>{icon.icon}</IconCircle>
              <p className="my-[20%] text-white hover:underline">{icon.name}</p>
            </motion.div>
          ))}
        </div>

        <div className="absolute bg-white sm:h-[50%] sm:w-[.2%] lg:h-[40%] lg:w-[.12%]" />

        <div className="w-[31%]">
          <div className="text-md mr-[50%] w-full overflow-hidden font-inika text-white lg:text-2xl">
            <p className="mb-[5%] text-3xl font-bold">Contact Information:</p>
            <p className="mb-[2%] font-[700]">Address:</p>
            <p>
              1100 University Ave
              <br />
              Riverside, CA 92507
              <br />
              United States
            </p>
            <p className="mb-[2%] mt-[4%] font-[700]">Contact Email:</p>
            <p>ucrtaekwondo@gmail.com</p>
          </div>

          <Image
            src={tkdicon}
            alt="Taekwondo Icon"
            className="absolute bottom-7 right-7 h-auto rounded-full sm:w-[11%] lg:w-[13%]"
          />
        </div>
      </div>

      <div className="visibile flex flex-col justify-center py-[7%] md:hidden">
        <div className="mb-[5%] flex w-full justify-center gap-2">
          {icons.map((icon, index) => (
            <IconCircle link={icon.link} key={index}>
              {icon.icon}
            </IconCircle>
          ))}
        </div>

        <div className="flex justify-center">
          <div className="absolute h-[1%] w-[70%] bg-white"></div>
        </div>

        <div className="mt-[4%] flex h-[50%] w-full items-center justify-center text-[0.65rem] text-white sm:text-sm">
          <div>
            <p className="mb-[2%] font-bold">Contact Information:</p>
            <p>
              1100 University Ave
              <br />
              Riverside, CA 92507
              <br />
              United States
            </p>
          </div>

          <Image
            src={tkdicon}
            alt="Taekwondo Icon"
            className="mx-[4%] h-auto w-[13%] rounded-full"
          />

          <div>
            <p className="mb-[2%] font-[700]">Contact Email:</p>
            <p>ucrtaekwondo</p>
            <p>@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
