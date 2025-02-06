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
      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-1 lg:space-y-20">
        <div className="mb-4 text-center text-xl md:text-3xl lg:text-6xl">
          Need Sparring Gear?
        </div>
        <div>
          <Button
            txt="Purchase Gear"
            link=""
            bgColor="red"
            borderColor="red"
            target="_blank"
            smVariant="small"
            lgVariant="large"
            padding="px-[60%] py-[10%]"
          />
        </div>
        <br></br>
        <br></br>
        <div className="absolute -bottom-[-5%] right-5 flex w-1/2 flex-col items-end sm:space-y-2 md:text-2xl lg:right-20 lg:space-y-4 lg:text-4xl">
          <div className="sm:mx-5 sm:text-xl md:mx-0 md:text-3xl lg:-mx-8 lg:text-5xl">
            Want a Jacket?
          </div>
          <div className="relative max-sm:right-1">
            <Button
              txt="Purchase Jacket"
              link=""
              bgColor="red"
              borderColor="red"
              target="_blank"
              smVariant="small"
              lgVariant="large"
              textSize="max-sm:text-xs"
              padding="px-[60%] py-[5%] max-sm:py-[2%] max-sm:px-[50%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SparringGear;
