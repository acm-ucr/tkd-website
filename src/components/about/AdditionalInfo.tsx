import Image from "next/image";

const AdditionalInfo = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <Image
        src="/about/background.webp"
        width={1700}
        height={1080}
        className="h-auto w-full object-cover brightness-50"
        alt=" background image"
      />

      <p className="absolute left-[12%] top-[20%] font-inika font-semibold text-white sm:text-sm md:text-lg lg:text-4xl">
        Additional Information:
      </p>

      <div className="absolute right-[11%] top-[44%] h-[40%] w-[55%] bg-tkd-blue-200">
        <div className="relative -top-[9%] right-[3%] flex h-[100%] w-[100%] justify-center border-4 border-white bg-transparent">
          <div className="sm:text-cs relative top-[20%] justify-items-center text-white md:text-base lg:text-xl">
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
