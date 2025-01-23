import SignUpButton from "@/components/Button";
import Image from "next/image";
import GroupPhoto from "@/../public/home/Signupemember.webp";

const Signup = () => {
  return (
    <div className="m-10 p-10">
      <div className="font-Inika pb-8 text-center text-6xl font-bold text-black">
        Interested in Becoming a Member?
      </div>
      <div className="flex flex-row items-center justify-between">
        <div className="ml-5 mt-8 pl-12">
          <div className="font-Inika mb-6 pb-28 pl-24 text-5xl leading-relaxed text-black">
            blahblahblahblahblahblahblahblah <br />
            blahblahblah <br />
            blahblahblah
          </div>
          <div className="justify-self-center pl-16 pt-16">
            <SignUpButton
              txt="Sign Up"
              link="/some-page"
              borderColor="blue"
              bgColor="blue"
              size="w-72 h-32"
              textSize="text-5xl"
            />
          </div>
        </div>
        <div className="w-[46%] pl-12 pt-10">
          <Image src={GroupPhoto} alt="group photo" className="rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
