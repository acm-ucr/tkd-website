import Image from "next/image";
import landing from "@/../public/events/event-landing.webp";

const Landing = () => {
  return (
    <div className="relative flex flex-row items-center justify-center text-[8vw]">
      <Image className="w-screen" src={landing} alt="Landing" />
      <div className="absolute flex flex-col items-center font-caveat-brush">
        <p className="relative text-white">Events</p>
      </div>
    </div>
  );
};

export default Landing;
