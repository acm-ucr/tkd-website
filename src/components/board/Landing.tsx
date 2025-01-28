import Image from "next/image";
import { ArrowDown } from "lucide-react";

const Landing = () => {
  return (
    <div className="flex h-screen w-screen">
      <div className="flex w-1/3 flex-col items-center justify-center bg-white p-4 text-center">
        <p className="mb-4 font-caveat-brush text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
          MEET
        </p>
        <p className="mb-4 font-caveat-brush text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
          THE
        </p>
        <p className="mb-8 font-caveat-brush text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
          BOARD
        </p>
        <div className="mt-4">
          <ArrowDown size={80} />
        </div>
      </div>

      <div className="relative w-2/3">
        <div className="absolute inset-0 h-full w-full">
          <Image
            src="/board/boardGroupImage.webp"
            alt="board group image"
            layout="fill"
            objectFit="cover"
            className="brightness-50"
          />
        </div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <p className="font-caveat-brush text-3xl text-white md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl">
            BOARD
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
