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

      <div className="absolute right-[11%] top-[44%] h-[45%] w-[70%] bg-tkd-blue-200 lg:h-[40%] lg:w-[55%] md:h-[45%] md:w-[60%] sm:h-[50%] sm:w-[60%]">
        <div className="relative -top-[9%] right-[3%] flex h-[100%] w-[100%] justify-center border-2 border-white bg-transparent md:border-4 lg:h-[100%] lg:w-[100%] lg:border-4 md:h-[100%] md:w-[100%] sm:h-[100%] sm:w-[100%]">
          <div className="relative left-[3%] top-[26%] lg:text-[1.3vw] md:text-[1.3vw] sm:text-[1.1vw] text-[1.5vw] text-white sm:justify-items-center">
            <p className="font-semibold">
              How often does your student organization meet?
            </p>
            <p className="font-medium">Twice a week.</p>
            <p className="font-medium">&nbsp;</p>
            <p className="font-semibold">
              What day and time does your student organization generally meet?
            </p>
            <p className="font-medium">
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
