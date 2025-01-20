import Button from "@/components/Button";
import gearPhoto from "@/public/home/sparringGear.webp";
import Image from "next/image";

type sparringGearProps = {
  buttonTxt: string;
  link: string;
};

const SparringGear: React.FC<sparringGearProps> = ({ buttonTxt, link }) => {
  return (
    <div className="relative w-fit justify-items-center font-bold text-white md:text-3xl lg:text-7xl">
      <Image
        src={gearPhoto}
        alt="sparringGearPhoto"
        className="w-screen brightness-50"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-5 lg:space-y-20">
        <div>Need Sparring Gear</div>
        <div className="">
          <Button
            txt={buttonTxt}
            link={link}
            bgColor="red"
            borderColor="red"
            target="_blank"
          />
        </div>
        <br></br>
        <div className="absolute -bottom-[-5%] right-5 flex w-1/2 flex-col items-end space-y-4 md:text-2xl lg:right-20 lg:text-4xl">
          <div className="mx-10">Want a Jacket?</div>
          <div>
            <Button
              txt="Purchase Jacket"
              link={link}
              bgColor="red"
              borderColor="red"
              target="_blank"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SparringGear;
