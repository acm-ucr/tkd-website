import Image from "next/image";
import { ArrowDown } from "lucide-react";

const Landing = () => {
  return (
    <div className="w-screen h-screen flex">
      <div className="w-1/3 bg-white flex flex-col items-center justify-center text-center p-4">
        <p className="font-caveat-brush text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl mb-4">
          MEET
        </p>
        <p className="font-caveat-brush text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl mb-4">
          THE
        </p>
        <p className="font-caveat-brush text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl mb-8">
          BOARD
        </p>
        <div className="mt-4">
          <ArrowDown size={80} />
        </div>
      </div>

      <div className="w-2/3 relative">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/board/boardGroupImage.webp"
            alt="board group image"
            layout="fill"
            objectFit="cover"
            className="brightness-50"
          />
        </div>

        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <p className="font-caveat-brush text-3xl text-white md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl">
            BOARD
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;