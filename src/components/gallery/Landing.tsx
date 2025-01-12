import Image from "next/image";
import photo from "@/public/landing.webp";

const Landing = () => {
  return (
    <div className="relative flex flex-row items-center justify-center text-9xl">
      <Image className="w-screen" src={photo} alt="Landing" />
      <div className="absolute inset-0 flex flex-col items-center font-extralight">
        <p className="relative right-[35%] top-[16%]">
          Gallery
        </p>
      </div>
    </div>
  );
};

export default Landing;
