import Image from "next/image";
import Background from "@/public/about/AdditionalInfo.webp";

const AdditionalInfo = () => {
  return (
    <div className="relative">
      <Image
        src={Background}
        className="max-h-full w-screen brightness-[.60]"
        alt="background image"
      />

      <p className="absolute left-[12%] top-[20%] font-inika text-lg font-semibold text-white sm:text-xl md:text-xl lg:text-4xl">
        Additional Information:
      </p>

      <div className="absolute right-[11%] top-[44%] h-[45%] w-[70%] bg-tkd-blue-200 lg:h-[40%] lg:w-[55%]">
        <div className="relative -top-[9%] right-[2%] flex h-[100%] w-[100%] items-center justify-center border-2 border-white bg-transparent px-[5%] md:border-4">
          <div className="mt-[1%] justify-items-center text-[6px] text-white md:text-[0.9rem] xl:text-xl">
            <p className="font-semibold">
              How often does your student organization meet?
            </p>
            <p className="mt-0.5 font-medium">Twice a week.</p>
            <p className="mt-1 font-semibold md:mt-2 lg:mt-4">
              What day and time does your student organization generally meet?
            </p>
            <p className="mt-0.5 font-medium">
              Mondays and Wednesdays from 9:15pm-10:55pm, and Fridays from
              6:00pm-6:55pm.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfo;
