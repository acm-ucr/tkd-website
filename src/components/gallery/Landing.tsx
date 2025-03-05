import Image from "next/image";
import landing from "@/public/gallery/landing-image.webp";

const Landing = () => {
  return (
    <div className="relative flex flex-col justify-center text-[8vw]">
      <Image className="w-screen" src={landing} alt="Landing" />
      <div className="absolute inset-0 flex flex-col items-center font-caveat-brush">
        <p className="relative text-white max-sm:top-[35%] sm:top-[35%] md:left-[25%] md:top-[7%]">
          Gallery
        </p>
      </div>
    </div>
  );
};

export default Landing;
