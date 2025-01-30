import Image from "next/image";
import Background from "@/public/about/background.webp";

const AdditionalInfo = () => {
  return (
    <div className="relative">
      <Image
        src={Background}
        width={1700}
        height={1080}
        className="max-h-full w-screen brightness-[.60]"
        alt=" background image"
      />

      <p className="absolute left-[12%] top-[20%] font-inika font-semibold text-white sm:text-sm md:text-lg lg:text-4xl">
        Additional Information:
      </p>

      <div className="absolute right-[11%] top-[44%] bg-tkd-blue-200 sm:h-[45%] sm:w-[55%] lg:h-[40%] lg:w-[55%]">
        <div className="relative -top-[9%] right-[3%] flex justify-center border-4 border-white bg-transparent sm:h-[115%] lg:h-[100%] lg:w-[100%]">
          <div className="relative top-[30%] justify-items-center text-white sm:text-[10px] md:text-[14px] lg:text-base">
            <p className="font-semibold">
              How often does your student organization meet?
            </p>
            <p className="font-medium">Twice a week.</p>
            <p className="font-semibold">
              What day and time does your student organization generally meet?
            </p>
            <p className="font-medium">
              Mondays and Wednesdays from 9:30pm-10:50pm
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfo;
