import Image from "next/image";
import tkdicon from "/public/tkd-icon.webp";
import { LiaFacebookF } from "react-icons/lia";
import { IoLogoInstagram } from "react-icons/io";
import { FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="absolute bottom-0 w-full bg-[#313547]">
      <div className="flex h-[580px] items-center justify-around">
        {/* left side of line */}
        {/* Socials */}
        <div className="flex h-[25%] w-[28%] justify-around font-inika text-[22px]">
          {/* facebook */}
          <div className="justify-items-center">
            <LiaFacebookF className="h-[69%] w-[100%] rounded-full bg-white p-5 text-[#313547]" />
            <p className="my-[20%] text-white hover:underline">facebook</p>
          </div>

          {/* instagram */}
          <a
            className="flex"
            href="https://www.instagram.com/tkdatucr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          >
            <div className="justify-items-center">
              <IoLogoInstagram className="h-[69%] w-[100%] rounded-full bg-white p-2 text-[#313547]" />
              <p className="my-[20%] text-white hover:underline">instagram</p>
            </div>
          </a>

          {/* discord */}
          <a className="flex" href="discord.gg/ungzmJyVyY">
            <div className="justify-items-center">
              <FaDiscord className="h-[69%] w-[100%] rounded-full bg-white p-4 text-[#313547]" />
              <p className="my-[20%] text-white hover:underline">discord</p>
            </div>
          </a>
        </div>

        {/* The line in the center */}
        <div className="absolute h-[50%] w-[.12%] bg-white"></div>

        {/* right side of the line */}
        <div className="w-[30%]">
          {/* Contact Information */}
          <div className="mr-[50%] font-inika text-[26px] text-white">
            <p className="mb-[2%] text-3xl font-[700]">Contact Information:</p>
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
            className="absolute bottom-7 right-7 h-[45%] w-[13%] rounded-full"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
