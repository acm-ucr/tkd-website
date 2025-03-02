"use client";
import Logo from "@/public/logo.webp";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AlignJustify } from "lucide-react";
import { useState } from "react";
import { items } from "@/data/NavData";
import { AnimatePresence, motion } from "motion/react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  function handleDropDown() {
    if (!open) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }

  return (
    <nav className="item-center fixed left-0 top-0 z-50 flex w-screen select-none items-center justify-between bg-tkd-blue-300 p-3 px-5 text-white">
      <div className="flex items-center">
        <Link
          href="/"
          className="flex"
          onClick={() => {
            setOpen(false);
          }}
        >
          <Image
            src={Logo}
            alt="TKD Logo"
            className="mr-7 h-20 w-20 rounded-full max-md:mr-4 max-md:h-10 max-md:w-10"
          />
        </Link>
      </div>
      <ul className="flex items-center space-x-6 max-md:hidden">
        {items.map((item, id) => (
          <li key={id}>
            <Link
              href={item.url}
              className={`font-jockey-one text-4xl uppercase duration-200 hover:text-tkd-blue-100 ${pathname === item.url ? "text-tkd-blue-100" : "text-white"}`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <li className="none list-none sm:block md:hidden">
        <div
          onClick={handleDropDown}
          className="flex cursor-pointer justify-end bg-tkd-blue-300"
        >
          <AlignJustify className="h-10 w-10 max-sm:h-8 max-sm:w-8" />
        </div>
        <AnimatePresence>
          {open ? (
            <motion.div
              key="open"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: "easeInOut",
                type: "spring",
              }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute right-0 bg-tkd-blue-300 text-center"
            >
              <div className="absolute right-0 bg-tkd-blue-300 text-center">
                {items.map((item, id) => (
                  <li
                    key={id}
                    className="border-b-[1px] border-b-white px-5 py-2 last:border-none"
                  >
                    <Link
                      onClick={handleDropDown}
                      href={item.url}
                      className={`font-jockey-one text-2xl uppercase duration-200 hover:text-tkd-blue-100 ${pathname === item.url ? "text-tkd-blue-100" : "text-white"}`}
                    >
                      <motion.div
                        whileHover={{
                          scale: 1.2,
                          transition: {
                            duration: 0.3,
                            type: "spring",
                          },
                        }}
                      >
                        {item.name}
                      </motion.div>
                    </Link>
                  </li>
                ))}
              </div>
            </motion.div>
          ) : (
            <div></div>
          )}
        </AnimatePresence>
      </li>
    </nav>
  );
};

export default Navbar;
