import Image from "next/image";
import { ArrowDown } from "lucide-react";


const Landing = () => {
  return (
    <div className="w-screen">
      <div className="absolute grid flex-row right-0 items-center justify-center top-0 w-2/3">
        <Image
          src="/board/boardGroupImage.webp"
          width={4000}
          height={4000}
          className="brightness-50"
          alt=" background image"
        />
      </div>
      <div className="absolute left-[60%] top-[13%] 2xl:left-[61%] 2xl:top-[47%]">
        <p className="font-caveat-brush text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl">
          BOARD
        </p>
      </div>
      <div className="absolute flex-row left-0 top-[12%] items-center justify-center w-1/3 grid text-3xl md:text-4xl lg:text-5xl lg:top-[23%] xl:text-6xl xl:xl-[24%] 2xl:text-7xl 2xl:top-[25%]">
        <div className="absolute right-[42.75%] top-[105%]"><ArrowDown size={80}/></div>
        <p className="relative text-center mb-[10%]">
          MEET
        </p>
        <p className="relative text-center mb-[10%]">
          THE
        </p>
        <p className="relative text-center">
          BOARD
        </p>
      </div>
    </div>
  );
};

export default Landing;