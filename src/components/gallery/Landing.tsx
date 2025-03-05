import Image from "next/image";
import landing from "@/public/gallery/landing-image.webp";

const Landing = () => {
  return (
    <div className="relative flex flex-col justify-center text-[8vw]">
      <Image className="w-screen" src={landing} alt="Landing" />
      <div className="absolute inset-0 flex flex-col items-center font-caveat-brush text-white max-sm:top-[35%] sm:top-[35%] md:left-[50%] md:top-[6%]">
        Gallery
      </div>
    </div>
  );
};

export default Landing;
