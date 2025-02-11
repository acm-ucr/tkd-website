import Button from "@/components/Button";
import Image from "next/image";

const NotFound = () => {
  return (
    <div className="h-screen w-screen bg-cover bg-center">
      <Image
        src="/404page-background.webp"
        width={3024}
        height={1776}
        className="h-auto max-h-screen w-screen object-cover"
        alt=" 404 background image"
      />
      <div className="absolute left-[50%] top-[50%] z-0 flex h-[55%] w-[60%] translate-x-[-50%] translate-y-[-50%] items-center justify-center bg-tkd-blue-100">
        <div className="absolute -top-[7%] right-[3%] h-[100%] w-[100%] border-2 border-white bg-transparent">
          <p className="absolute left-[50%] top-[-15%] translate-x-[-50%] translate-y-[-10%] font-caveat-brush text-[9.5vw] text-white">
            404
          </p>
        </div>
        <p className="translate-y-[-11%] font-inika text-[6vw] text-white">
          PAGE NOT FOUND
        </p>
      </div>
      <div className="absolute left-[50%] top-[82%] h-[12%] w-[22%] translate-x-[-50%]">
        <Button
          txt="Back To Home"
          link="/"
          borderColor="red"
          bgColor="red"
          size="w-[100%] h-[100%]"
          textSize="text-[3vw]"
        />
      </div>
    </div>
  );
};

export default NotFound;
