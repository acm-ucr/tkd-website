import SignUpButton from "@/components/home/SignupButton";
import Image from "next/image";
import Totoro from "@/../public/home/Rectangle-21.webp";

const Signup = () => {
  return (
    <div className="m-10 p-10">
      <div className="font-Inika pb-8 text-center text-5xl font-bold text-black">
        Interested in Becoming a Member?
      </div>
      <div className="flex flex-row  justify-between">
        <div className="ml-12 mt-8 justify-between pl-12">
          <div className="font-Inika mb-10 pb-10 text-5xl leading-relaxed text-black">
            blahblahblahblahblahblahblahblah <br />
            blahblahblah <br />
            blahblahblah
          </div>
          <div className="justify-self-center pb-10">
            <SignUpButton />
          </div>
        </div>
        <div className="pt-10 pr-10 mr-12">
          <Image src={Totoro} alt="Totoro in the rain" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
