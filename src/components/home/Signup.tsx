import SignUpButton from "@/components/Button";
import Image from "next/image";
import GroupPhoto from "@/../public/home/Signupemember.webp";

const Signup = () => {
  return (
    <div className="mx-[8%] my-[6%]">
      <div className="mb-[5%] text-center font-inika text-6xl font-bold text-black">
        Interested in Becoming a Member?
      </div>
      <div className="flex flex-row items-center justify-center gap-[5%]">
        <div className="">
          <div className="mb-8 font-inika text-5xl leading-relaxed text-black">
            blahblahblahblahblahblahblahblahh blahblahblah blahblahblah
          </div>
          <div className="justify-self-center">
            <SignUpButton
              txt="Sign Up"
              link="/some-page"
              borderColor="blue"
              bgColor="blue"
              textSize="text-5xl"
            />
          </div>
        </div>
        <Image
          src={GroupPhoto}
          alt="group photo"
          className="w-[46%] rounded-xl"
        />
      </div>
    </div>
  );
};

export default Signup;
