import Image from "next/image";
import landing from "@/../public/gallery/landing-image.webp";

const Landing = () => {
  return (
    <div className="lg:text-9x1 relative flex flex-row items-center justify-center">
      <Image className="w-screen" src={landing} alt="Landing" />
      <div className="absolute inset-0 flex flex-col items-center font-caveat-brush">
        <p className="relative left-[25%] top-[7%] text-white">Gallery</p>
      </div>
    </div>
  );
};

export default Landing;
