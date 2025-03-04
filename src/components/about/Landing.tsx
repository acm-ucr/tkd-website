import Image from "next/image";
import Background from "@/public/about/about_landing.webp";

const Landing = () => {
  return (
    <div className="relative w-full">
      <Image
        src={Background}
        className="w-full aspect-video object-cover brightness-50"
        alt="Landing background image"
      />

      <div className="absolute flex items-center justify-center md:items-start md:justify-start inset-0 md:inset-auto md:top-[7%] md:left-[7%] z-10 font-caveat-brush text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-extrabold uppercase text-white">
        About Us
      </div>

      <p className="absolute bottom-4 right-2 xs:right-3 sm:right-4 md:bottom-4 md:right-4 z-10 text-right text-xs xs:text-sm sm:text-md md:text-4xl font-medium text-white max-w-[85%] sm:max-w-[75%] md:max-w-none">
        Come join us! Our practices are Mondays and <br />
        Wednesdays from 9:30 PM - 10:50 PM.
      </p>
    </div>
  );
};

export default Landing;
