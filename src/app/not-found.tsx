import Button from "@/components/Button";
import Image from "next/image";

const NotFound = () => {
  return (
    <div className="relative flex w-screen flex-col items-center justify-center overflow-hidden">
      <Image
        src="/404page-background.webp"
        width={3024}
        height={1776}
        className="h-full w-screen object-cover"
        alt=" 404 background image"
      />

      <div className="absolute left-[50%] top-[50%] z-0 flex translate-x-[-50%] translate-y-[-50%] items-center justify-center bg-tkd-blue-100 px-[7%] py-[12%]">
        <div className="absolute right-[3%] top-[-5%] flex h-[100%] w-[100%] justify-center border-2 border-white bg-transparent">
          <p className="translate-y-[-20%] justify-center font-caveat-brush text-[9vw] text-white">
            404
          </p>
        </div>
        <p className="translate-y-[-11%] text-nowrap font-inika text-[5vw] text-white">
          PAGE NOT FOUND
        </p>
      </div>

      <div className="absolute left-[50%] top-[78%] flex translate-x-[-50%] justify-center">
        <Button
          txt="Back To Home"
          link="/"
          borderColor="red"
          bgColor="red"
          size="px-[16%] py-[5%]"
          textSize="text-[2.5vw]"
        />
      </div>
    </div>
  );
};

export default NotFound;
