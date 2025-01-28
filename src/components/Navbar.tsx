import Logo from "@/../public/logo.webp";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="item-center fixed left-0 top-0 z-50 flex w-full justify-between bg-tkd-blue-300 p-4 text-white">
      <div className="flex items-center">
        <Link href="/" className="flex">
          <Image
            src={Logo}
            alt="TKD Logo"
            className="mr-2 h-10 w-10 rounded-full"
          />
          <span className="title font-jockey-one text-2xl uppercase">TKD</span>
        </Link>
      </div>
      <ul className="flex space-x-6">
        <li>
          <Link href="/about" className="font-jockey-one text-2xl uppercase">
            About
          </Link>
        </li>
        <li>
          <Link href="/events" className="font-jockey-one text-2xl uppercase">
            Events
          </Link>
        </li>
        <li>
          <Link href="/board" className="font-jockey-one text-2xl uppercase">
            Board
          </Link>
        </li>
        <li>
          <Link href="/gallery" className="font-jockey-one text-2xl uppercase">
            Gallery
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
