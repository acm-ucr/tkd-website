import Logo from "@/../public/logo.webp";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="item-center fixed left-0 top-0 z-50 flex w-full justify-between bg-tkd-blue-300 p-3 text-white">
      <div className="flex items-center">
        <Link href="/" className="flex">
          <Image
            src={Logo}
            alt="TKD Logo"
            className="h-27 w-27 mr-7 rounded-full"
          />
          <span className="title flex items-center font-jockey-one text-5xl uppercase">
            TKD
          </span>
        </Link>
      </div>
      <ul className="flex items-center space-x-6">
        <li>
          <Link href="/about" className="font-jockey-one text-5xl uppercase">
            About
          </Link>
        </li>
        <li>
          <Link href="/events" className="font-jockey-one text-5xl uppercase">
            Events
          </Link>
        </li>
        <li>
          <Link href="/board" className="font-jockey-one text-5xl uppercase">
            Board
          </Link>
        </li>
        <li>
          <Link href="/gallery" className="font-jockey-one text-5xl uppercase">
            Gallery
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
