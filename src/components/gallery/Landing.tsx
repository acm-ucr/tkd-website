import Image from "next/image";
import landing from "@/../public/gallery/landing-image.webp";

const Landing = () => {
  return (
    <div className="relative flex flex-row items-center justify-center text-9xl">
      <Image className="w-screen" src={landing} alt="Landing" />
      <div className="absolute inset-0 flex flex-col items-center font-caveat-brush">
        <p className="relative left-[25%] top-[9%] text-white">Gallery</p>
      </div>
    </div>
  );
};

export default Landing;
