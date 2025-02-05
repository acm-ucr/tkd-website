"use client";

import Logo from "@/../public/logo.webp";
import Link from "next/link";
import Image from "next/image";
import { AlignJustify } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  console.log(open);

  function handleDropDown() {
    if (!open) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }
  // else{
  //   setOpen(false);
  // }

  return (
    <nav className="item-center fixed left-0 top-0 z-50 flex w-full items-center justify-between bg-tkd-blue-300 p-3 px-5 text-white">
      <div className="flex items-center">
        <Link href="/" className="flex">
          <Image
            src={Logo}
            alt="TKD Logo"
            className="mr-7 h-20 w-20 rounded-full"
          />
          <span className="title flex items-center font-jockey-one text-4xl uppercase">
            TKD
          </span>
        </Link>
      </div>
      <ul className="flex items-center space-x-6 max-md:hidden">
        <li>
          <Link href="/about" className="font-jockey-one text-4xl uppercase">
            About
          </Link>
        </li>
        <li>
          <Link href="/events" className="font-jockey-one text-4xl uppercase">
            Events
          </Link>
        </li>
        <li>
          <Link href="/board" className="font-jockey-one text-4xl uppercase">
            Board
          </Link>
        </li>
        <li>
          <Link href="/gallery" className="font-jockey-one text-4xl uppercase">
            Gallery
          </Link>
        </li>
      </ul>
      <li className="none list-none sm:block md:hidden">
        <div
          onClick={handleDropDown}
          className="flex cursor-pointer justify-end bg-tkd-blue-300"
        >
          <AlignJustify size={50} />
        </div>
        {open ? (
          <div className="absolute right-0 bg-tkd-blue-300 text-center">
            <li className="border-b-[1px] border-b-white px-5 py-2">
              <Link
                onClick={handleDropDown}
                href="/about"
                className="font-jockey-one text-4xl uppercase"
              >
                About
              </Link>
            </li>
            <li className="border-b-[1px] border-b-white px-5 py-2">
              <Link
                onClick={handleDropDown}
                href="/events"
                className="font-jockey-one text-4xl uppercase"
              >
                Events
              </Link>
            </li>
            <li className="border-b-[1px] border-b-white px-5 py-2">
              <Link
                onClick={handleDropDown}
                href="/board"
                className="font-jockey-one text-4xl uppercase"
              >
                Board
              </Link>
            </li>
            <li className="px-5 py-2">
              <Link
                onClick={handleDropDown}
                href="/gallery"
                className="font-jockey-one text-4xl uppercase"
              >
                Gallery
              </Link>
            </li>
          </div>
        ) : (
          <div></div>
        )}
      </li>
    </nav>
  );
};

export default Navbar;
