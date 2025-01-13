import Image from "next/image";

const AdditionalInfo = () => {
  return (
    <div className="w-screen">
      <Image
        src="/background.webp"
        width={1700}
        height={1080}
        className="max-h-full w-screen"
        alt=" background image"
      />
      <p className="absolute left-[13%] top-[25%] font-inika text-4xl font-semibold text-white">
        Additional Information:
      </p>
      <div className="right-[20%] top-[40%] h-[40%] w-[54%] border-2 border-white bg-transparent"></div>
      <div className="absolute right-[11%] top-[45%] h-[35%] w-[55%] bg-tkd-blue-200">
        <div className="absolute -top-[9%] right-[2%] h-[100%] w-[100%] border-4 border-white bg-transparent"></div>
        <p className="relative top-3 text-2xl font-semibold text-white flex justify-center">
          How often does your student organization meet?
        </p>
        <p className="relative top-3 text-2xl font-medium text-white flex justify-center">
          Twice a week.
        </p>
        <p className="relative top-10 text-2xl font-semibold text-white flex justify-center">
          What day and time does your student organization generally meet?
        </p>
        <p className="relative top-10 text-2xl font-medium text-white flex justify-center">
          Mondays and Wednesdays from 9:30pm-10:50pm
        </p>
      </div>
    </div>
  );
};

export default AdditionalInfo;
