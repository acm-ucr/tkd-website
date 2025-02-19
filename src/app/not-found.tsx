import Button from "@/components/Button";
import Image from "next/image";

const NotFound = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden">
      <Image
        src="/taekwondo-404-background.webp"
        width={2048}
        height={1536}
        className="min-h-screen w-screen object-cover"
        alt=" 404 background image"
      />

      <div className="absolute left-[50%] top-[55%] z-0 flex translate-x-[-50%] translate-y-[-50%] flex-col items-center gap-7">
        <div className="relative flex flex-col items-center justify-center bg-tkd-blue-100 px-[17%] py-[27%]">
          <div className="absolute left-[-3%] top-[-5%] flex h-full w-full justify-center border-2 border-white bg-transparent">
            <p className="translate-y-[-20%] justify-center font-caveat-brush text-[13vw] text-white sm:text-[10vw] md:text-[9vw] lg:text-[9vw]">
              404
            </p>
          </div>
          <p className="translate-y-[-11%] text-nowrap font-inika text-[8vw] text-white sm:text-[6vw] md:text-[5vw] lg:text-[5vw]">
            PAGE NOT FOUND
          </p>
        </div>

        <div className="flex justify-center">
          <Button
            txt="Back To Home"
            link="/"
            borderColor="red"
            bgColor="red"
            size="px-[16%] py-[5%]"
            textSize="text-[4vw] sm:text-[3vw] md:text-[2.5vw] lg:text-[2.5vw]"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
