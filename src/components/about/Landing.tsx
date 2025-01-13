import banner from "/Users/altametrics/tkd-website/src/public/home/landing.webp";
import Image from "next/image";

const Landing = () => {
  return (
    <div className="relative flex items-center justify-center text-white">
      <Image
        className="h-[600px] w-screen object-cover brightness-75"
        src={banner}
        alt="About Us Banner"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="animate-fade-in font-caveat-brush text-5xl font-bold md:text-6xl lg:text-7xl">
          ABOUT US
        </h1>
        <p
          className="animate-fade-up mt-6 text-center font-inika text-xl opacity-0 md:text-2xl lg:text-3xl"
          style={{
            width: "760px",
            height: "124px",
            top: "717px",
            left: "725px",
          }}
        >
          Come join us! Our practices are Mondays and Wednesdays from 9:30 PM -
          10:50 PM.
        </p>
      </div>
    </div>
  );
};

export default Landing;
