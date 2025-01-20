import Image from "next/image";

const AdditionalInfo = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <Image
        src="/about/background.webp"
        width={1700}
        height={1080}
        className="h-auto w-full object-cover"
        alt=" background image"
      />

      <p className="absolute left-[12%] top-[20%] font-inika font-semibold text-white sm:text-3xl md:text-3xl lg:text-4xl">
        Additional Information:
      </p>

      <div className="absolute right-[6%] top-[46%] h-[37%] w-[58%] bg-tkd-blue-200">
        <div className="absolute -top-[9%] right-[3%] h-[100%] w-[100%] border-4 border-white bg-transparent"></div>
        <div className="text-wrap text-center text-white sm:text-base md:text-lg lg:text-xl">
          <p className="relative top-4 font-semibold">
            How often does your student organization meet?
          </p>
          <p className="relative top-4 font-medium">Twice a week.</p>
          <p className="relative top-11 font-semibold">
            What day and time does your student organization generally meet?
          </p>
          <p className="relative top-11 font-medium">
            Mondays and Wednesdays from 9:30pm-10:50pm
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfo;
