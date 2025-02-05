import SignUpButton from "@/components/Button";
import Image from "next/image";
import GroupPhoto from "@/../public/home/Signupemember.webp";

const Signup = () => {
  return (
    <div className="mx-4 my-6 md:mx-[8%] md:my-[6%]">
      <div className="mb-4 text-center font-inika text-2xl font-bold text-black md:mb-[5%] md:text-6xl">
        Interested in Becoming a Member?
      </div>
      <div className="flex flex-col items-center gap-4 md:flex-row md:gap-[5%] md:justify-self-center">
        <div className="w-full md:w-[50%]">
          <div className="mb-4 break-words font-inika text-black md:mb-8 md:text-5xl md:leading-relaxed">
            blahblahblahblahblahblahblahblahh blahblahblah blahblahblah
          </div>
          <div className="flex justify-self-center py-[8%] sm: justify-center">
            <SignUpButton
              txt="Sign Up"
              link="/some-page"
              borderColor="blue"
              bgColor="blue"
              textSize="text-lg md:text-5xl"
            />
          </div>
        </div>
        <Image
          src={GroupPhoto}
          alt="group photo"
          className="w-screen rounded-lg md:w-[46%] md:rounded-xl"
        />
      </div>
    </div>
  );
};

export default Signup;
