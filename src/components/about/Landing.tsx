
import Image from "next/image";
import Background from "@/public/about/about_landing.webp";
const Landing = () => {
  return (
    <div className="relative">
      <Image
        src={Background}
        className="h-[990px] w-screen overflow-hidden object-cover"
        alt="Landing background image"
      />

      <h1 className="absolute left-[13%] top-[2%] z-10 font-caveat-brush text-9xl font-extrabold uppercase text-white">
        About Us
      </h1>

      <p className="absolute bottom-4 right-4 z-10 text-center text-5xl font-medium text-white">
        Come join us! Our practices are Mondays and <br />
        Wednesdays from 9:30 PM - 10:50 PM.
      </p>
    </div>
  );
};

export default Landing;
