import Image from "next/image";
import tkdicon from "/public/tkd-icon.webp";
import Link from "next/link";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import { SiDiscord } from "@icons-pack/react-simple-icons";

const Footer = () => {
  return (
    <footer className="relative h-auto w-full bg-tkd-blue-300 font-inika">
      {/* Desktop/Laptop */}
      <div className="hidden items-center justify-around py-[6.5%] sm:visible sm:flex">
        {/* left side of line */}
        {/* Socials */}

        <div className="flex h-[25%] w-[30%] justify-around font-inika sm:text-xs lg:text-base xl:text-2xl">
          {/* Facebook */}
          <Link
            href=""
            className="flex h-auto flex-col items-center justify-items-center sm:w-[20%] lg:w-[20%] xl:w-[18%]"
          >
            <div className="relative flex items-center justify-center rounded-full bg-tkd-grey-100 p-[45%]">
              <Facebook className="absolute mr-[3%] h-[60%] w-auto text-tkd-blue-300" />
            </div>
            <p className="my-[20%] text-white hover:underline">facebook</p>
          </Link>

          {/* Instagram */}
          <Link
            href=""
            className="flex h-auto flex-col items-center justify-items-center sm:w-[20%] lg:w-[20%] xl:w-[18%]"
          >
            <div className="relative flex items-center justify-center rounded-full bg-tkd-grey-100 p-[45%]">
              <Instagram className="absolute h-[60%] w-auto text-tkd-blue-300" />
            </div>
            <p className="my-[20%] text-white hover:underline">instagram</p>
          </Link>

          {/* Discord */}
          <Link
            href=""
            className="flex h-auto flex-col items-center justify-items-center sm:w-[20%] lg:w-[20%] xl:w-[18%]"
          >
            <div className="relative flex items-center justify-center rounded-full bg-tkd-grey-100 p-[45%]">
              <SiDiscord className="absolute h-[60%] w-auto text-tkd-blue-300" />
            </div>
            <p className="my-[20%] text-white hover:underline">discord</p>
          </Link>
        </div>

        {/* The line in the center */}
        <div className="absolute bg-white sm:h-[50%] sm:w-[.2%] lg:h-[40%] lg:w-[.12%]"></div>

        {/* right side of the line */}
        <div className="w-[31%]">
          {/* Contact Information */}
          <div className="mr-[50%] w-[100%] text-white sm:text-xs lg:text-base xl:text-2xl">
            <p className="mb-[2%] font-[700] sm:text-sm lg:text-lg xl:text-3xl">
              Contact Information:
            </p>
            <p className="mb-[2%] font-[700]">Address:</p>
            <p>1100 University Ave</p>
            <p>Riverside, CA 92507</p>
            <p>United States</p>
            <p className="my-[2%] font-[700]">Contact Email:</p>
            <p>ucrtaekwondo@gmail.com</p>
          </div>

          {/* tkd image icon */}
          <Image
            src={tkdicon}
            alt="Taekwondo Icon"
            className="absolute bottom-7 right-7 h-auto rounded-full sm:w-[11%] lg:w-[13%]"
          />
        </div>
      </div>

      {/* Mobile */}
      <div className="visibile flex flex-col justify-center py-[7%] sm:hidden">
        {/* Socials */}
        <div className="mb-[5%] flex w-full justify-center">
          {/* Facebook */}
          <Link
            href=""
            className="flex h-auto w-[16%] flex-col items-center justify-items-center"
          >
            <div className="relative flex items-center justify-center rounded-full bg-tkd-grey-100 p-[27%]">
              <Facebook className="absolute mr-[3%] h-[60%] w-auto text-tkd-blue-300" />
            </div>
          </Link>

          {/* Instagram */}
          <Link
            href=""
            className="mx-[-5%] flex h-auto w-[16%] flex-col items-center justify-items-center"
          >
            <div className="relative flex items-center justify-center rounded-full bg-tkd-grey-100 p-[27%]">
              <Instagram className="absolute h-[60%] w-auto text-tkd-blue-300" />
            </div>
          </Link>

          {/* Discord */}
          <Link
            href=""
            className="flex h-auto w-[16%] flex-col items-center justify-items-center"
          >
            <div className="relative flex items-center justify-center rounded-full bg-tkd-grey-100 p-[27%]">
              <SiDiscord className="absolute h-[60%] w-auto text-tkd-blue-300" />
            </div>
          </Link>
        </div>

        {/* Horizontal Line */}
        <div className="flex justify-center">
          <div className="absolute h-[1%] w-[70%] bg-white"></div>
        </div>

        {/* Information */}
        <div className="mt-[4%] flex h-[50%] w-full items-center justify-center text-[0.65rem] text-white">
          <div>
            <p className="mb-[2%] font-[700]">Contact Information:</p>
            <p>900 University Ave</p>
            <p>Riverside, CA 92507</p>
            <p>United States</p>
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
