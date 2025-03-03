import Button from "@/components/Button";
import gearPhoto from "@/public/home/sparringGear.webp";
import Image from "next/image";

const SparringGear = () => {
  return (
    <div className="relative w-fit justify-items-center font-bold text-white md:text-3xl lg:text-7xl">
      <Image
        src={gearPhoto}
        alt="sparringGearPhoto"
        className="w-screen brightness-50"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-1 lg:space-y-5">
        <div className="mb-4 text-center max-md:text-3xl max-sm:mb-0 max-sm:text-lg md:text-5xl lg:text-5xl">
          Need Sparring Gear?
        </div>
        <div>
          <Button
            txt="Purchase Gear"
            link="/"
            target="_blank"
            textSize="lg:text-3xl max-sm:text-xs"
            padding="px-[60%] py-[10%] max-md:px-[55%] max-md:py-[5%] max-sm:py-[8%]"
            customStyle="bg-tkd-red-100 border-tkd-red-200 sm:border-1 sm:px-1/6 sm:py-1/12 sm:text-xs lg:px-7 lg:py-7 lg:text-3xl"
          />
        </div>
        <br></br>
        <br></br>
        <div className="absolute -bottom-[-5%] flex w-1/2 flex-col items-end max-lg:right-8 max-md:right-6 max-sm:right-1 sm:space-y-2 md:text-2xl lg:right-7 lg:space-y-4 lg:text-4xl">
          <div className="relative max-sm:right-6 max-sm:text-[10px] sm:right-7 sm:mx-5 sm:text-xl md:mx-0 md:text-3xl lg:right-20 lg:-mx-8 lg:text-2xl">
            Want a Jacket?
          </div>
          <div className="relative max-sm:right-5 sm:right-8 md:right-8">
            <Button
              txt="Purchase Jacket"
              link="/"
              target="_blank"
              textSize="lg:text-lg max-sm:text-[8px]"
              padding="px-[60%] py-[10%] max-sm:px-[55%] lg:px-6 lg:py-[8%]"
              customStyle="bg-tkd-red-100 border-tkd-red-200 sm:border-1 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SparringGear;
