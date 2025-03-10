import Image from "next/image";
import Background from "@/public/about/AdditionalInfo.webp";

const AdditionalInfo = () => {
  return (
    <div className="relative h-max w-fit sm:h-full sm:w-full md:h-full md:w-full lg:h-full lg:w-full">
      <Image
        src={Background}
        alt="background image"
        objectFit="cover"
        className="brightness-[.60]"
      />

      <p className="absolute left-[12%] top-[4%] font-inika text-lg font-semibold text-white sm:text-xl md:text-2xl lg:text-4xl">
        Additional Information:
      </p>

      <div className="absolute right-[1%] top-[30%] flex h-[60%] w-[95%] bg-tkd-blue-200 sm:h-[50%] sm:w-[60%] md:h-[45%] md:w-[60%] lg:h-[40%] lg:w-[55%]">
        <div className="relative -top-[9%] right-[3%] flex h-[100%] w-[120%] justify-center border-2 border-white bg-transparent sm:h-[100%] sm:w-[100%] md:h-[100%] md:w-[100%] md:border-4 lg:h-[100%] lg:w-[100%] lg:border-4">
          <div className="relative left-[2%] top-[26%] justify-items-center text-[2.35vw] text-white sm:text-[1.4vw] md:text-[1.3vw] lg:text-[1.3vw]">
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
