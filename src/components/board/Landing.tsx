import Image from "next/image";
import { ArrowDown } from "lucide-react";

const Landing = () => {
  return (
    <div className="w-screen">
      <div className="absolute right-0 top-0 grid w-2/3 flex-row items-center justify-center">
        <Image
          src="/board/boardGroupImage.webp"
          width={4000}
          height={4000}
          className="brightness-50"
          alt=" background image"
        />
      </div>
      <div className="absolute left-[60%] top-[13%] 2xl:left-[61%] 2xl:top-[47%]">
        <p className="font-caveat-brush text-3xl text-white md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl">
          BOARD
        </p>
      </div>
      <div className="xl:xl-[24%] absolute left-0 top-[12%] grid w-1/3 flex-row items-center justify-center text-3xl md:text-4xl lg:top-[23%] lg:text-5xl xl:text-6xl 2xl:top-[25%] 2xl:text-7xl">
        <div className="absolute right-[42.75%] top-[105%]">
          <ArrowDown size={80} />
        </div>
        <p className="relative mb-[10%] text-center">MEET</p>
        <p className="relative mb-[10%] text-center">THE</p>
        <p className="relative text-center">BOARD</p>
      </div>
    </div>
  );
};

export default Landing;
