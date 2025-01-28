import Image from "next/image";
import tkdicon from "/public/tkd-icon.webp";
import Link from "next/link";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import { SiDiscord } from "@icons-pack/react-simple-icons";

const Footer = () => {
  return (
    <footer className="relative h-auto w-full bg-tkd-blue-300">
      <div className="flex items-center justify-around py-[6.5%]">
        {/* left side of line */}
        {/* Socials */}

        <div className="flex h-[25%] w-[30%] justify-around font-inika text-[1.375rem]">
          {/* Facebook */}
          <Link
            href=""
            className="flex h-[18%] w-[18%] flex-col items-center justify-items-center"
          >
            <div className="relative flex items-center justify-center rounded-full bg-white p-[45%]">
              <Facebook className="absolute mr-[3%] h-[60%] w-auto text-tkd-blue-300" />
            </div>
            <p className="my-[20%] text-white hover:underline">facebook</p>
          </Link>

          {/* Instagram */}
          <Link
            href=""
            className="flex h-[18%] w-[18%] flex-col items-center justify-items-center"
          >
            <div className="relative flex items-center justify-center rounded-full bg-white p-[45%]">
              <Instagram className="absolute h-[60%] w-auto text-tkd-blue-300" />
            </div>
            <p className="my-[20%] text-white hover:underline">instagram</p>
          </Link>

          {/* Discord */}
          <Link
            href=""
            className="flex h-[18%] w-[18%] flex-col items-center justify-items-center"
          >
            <div className="relative flex items-center justify-center rounded-full bg-white p-[45%]">
              <SiDiscord className="absolute h-[60%] w-auto text-tkd-blue-300" />
            </div>
            <p className="my-[20%] text-white hover:underline">discord</p>
          </Link>
        </div>

        {/* The line in the center */}
        <div className="absolute h-[40%] w-[.12%] bg-white"></div>

        {/* right side of the line */}
        <div className="w-[31%]">
          {/* Contact Information */}
          <div className="mr-[50%] font-inika text-[1.625rem] text-white">
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
            className="absolute bottom-7 right-7 h-auto w-[13%] rounded-full"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
