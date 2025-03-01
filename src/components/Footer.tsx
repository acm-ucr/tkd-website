import Image from "next/image";
import tkdicon from "/public/tkd-icon.webp";
import Link from "next/link";
import {
  SiFacebook,
  SiInstagram,
  SiDiscord,
} from "@icons-pack/react-simple-icons";

const Footer = () => {
  return (
    <footer className="relative h-auto w-full bg-tkd-blue-300 font-inika">
      <div className="hidden items-center justify-around py-[6.5%] sm:visible md:flex">
        <div className="flex h-[25%] w-[30%] justify-around font-inika max-lg:gap-[2rem] sm:text-xs lg:text-base xl:text-2xl">
          <Link
            href="https://www.facebook.com/tkducr/"
            className="flex h-auto flex-col items-center justify-items-center sm:w-[20%] lg:w-[20%] xl:w-[18%]"
          >
            <div className="flex aspect-square items-center justify-center rounded-full bg-tkd-grey-100 p-[28%]">
              <SiFacebook size={48} className="mr-[3%] text-tkd-blue-300" />
            </div>
            <p className="my-[20%] text-white hover:underline">facebook</p>
          </Link>
          <Link
            href="https://www.instagram.com/tkdatucr/#"
            className="flex h-auto flex-col items-center justify-items-center sm:w-[20%] lg:w-[20%] xl:w-[18%]"
          >
            <div className="flex aspect-square items-center justify-center rounded-full bg-tkd-grey-100 p-[28%]">
              <SiInstagram size={48} className="text-tkd-blue-300" />
            </div>
            <p className="my-[20%] text-white hover:underline">instagram</p>
          </Link>

          <Link
            href="https://www.discord.gg/ungzmJyVyY"
            className="flex h-auto flex-col items-center justify-items-center sm:w-[20%] lg:w-[20%] xl:w-[18%]"
          >
            <div className="flex aspect-square items-center justify-center rounded-full bg-tkd-grey-100 p-[28%]">
              <SiDiscord size={48} className="text-tkd-blue-300" />
            </div>
            <p className="my-[20%] text-white hover:underline">discord</p>
          </Link>
        </div>

        <div className="absolute bg-white sm:h-[50%] sm:w-[.2%] lg:h-[40%] lg:w-[.12%]" />

        <div className="w-[31%]">
          <div className="text-md mr-[50%] w-full overflow-hidden font-inika text-white lg:text-2xl">
            <p className="mb-[2%] text-3xl font-bold">Contact Information:</p>
            <p className="font-[700]">Address:</p>
            <p>
              1100 University Ave
              <br />
              Riverside, CA 92507
              <br />
              United States
            </p>
            <p className="mt-[2%] font-[700]">Contact Email:</p>
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
          <Link
            href="/"
            className="flex h-auto w-[16%] flex-col items-center justify-items-center"
          >
            <div className="flex aspect-square items-center justify-center rounded-full bg-tkd-grey-100 p-[16%]">
              <SiFacebook size={24} className="mr-[3%] text-tkd-blue-300" />
            </div>
          </Link>

          <Link
            href="/"
            className="mx-[-5%] flex h-auto w-[16%] flex-col items-center justify-items-center"
          >
            <div className="flex aspect-square items-center justify-center rounded-full bg-tkd-grey-100 p-[16%]">
              <SiInstagram size={24} className="text-tkd-blue-300" />
            </div>
          </Link>

          <Link
            href="/"
            className="flex h-auto w-[16%] flex-col items-center justify-items-center"
          >
            <div className="flex aspect-square items-center justify-center rounded-full bg-tkd-grey-100 p-[16%]">
              <SiDiscord size={24} className="text-tkd-blue-300" />
            </div>
          </Link>
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
  return <div>Footer</div>;
};

export default Footer;
