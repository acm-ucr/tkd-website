import Image from "next/image";
// import Background from "@/../public/about/AdditionalInfo.webp";

const AdditionalInfo = () => {
  return (
    <div className="relative">
      <Image
        src="/about/AdditionalInfo.webp"
        width={1700}
        height={1080}
        className="max-h-full w-screen brightness-[.60]"
        alt=" background image"
      />

      <p className="absolute left-[12%] top-[20%] font-inika text-lg font-semibold text-white sm:text-xl md:text-xl lg:text-4xl">
        Additional Information:
      </p>

      <div className="absolute right-[11%] top-[44%] h-[45%] w-[70%] bg-tkd-blue-200 lg:h-[40%] lg:w-[55%]">
        <div className="relative -top-[9%] right-[3%] flex h-[100%] w-[100%] justify-center border-2 border-white bg-transparent md:border-4 lg:h-[100%] lg:w-[100%] lg:border-4">
          <div className="relative top-[30%] text-[1.5vw] text-white sm:justify-items-center">
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
