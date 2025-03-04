import Image from "next/image";
import Background from "@/public/about/about_landing.webp";

const Landing = () => {
  return (
    <div className="relative w-full">
      <Image
        src={Background}
        className="aspect-video w-full object-cover brightness-50"
        alt="Landing background image"
      />

      <div className="absolute inset-0 z-10 flex items-center justify-center font-caveat-brush text-5xl font-extrabold uppercase text-white sm:text-6xl md:inset-auto md:left-[7%] md:top-[7%] md:items-start md:justify-start md:text-7xl lg:text-9xl">
        About Us
      </div>

      <p className="xs:right-3 xs:text-sm sm:text-md absolute bottom-4 right-2 z-10 max-w-[85%] text-right text-xs font-medium text-white sm:right-4 sm:max-w-[75%] md:bottom-4 md:right-4 md:max-w-none md:text-4xl">
        Come join us! Our practices are Mondays and <br />
        Wednesdays from 9:30 PM - 10:50 PM.
      </p>
    </div>
  );
};

export default Landing;
