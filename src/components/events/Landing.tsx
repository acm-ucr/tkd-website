import Image from "next/image";
import landing from "@/../public/events/eventlanding.webp";

const Landing = () => {
  return (
    <div className="relative flex items-center justify-center">
      <Image className="w-screen" src={landing} alt="Landing" />
    </div>
  );
};

export default Landing;
