import SignUpButton from "@/components/Button";
import Image from "next/image";
import GroupPhoto from "@/../public/home/Signupemember.webp";

const Signup = () => {
  return (
    <div className="m-10 p-10">
      <div className="font-Inika pb-10 text-center text-6xl font-bold text-black">
        Interested in Becoming a Member?
      </div>
      <div className="flex flex-row items-center justify-around">
        <div className="mt-8">
          <div className="font-Inika mb-8 justify-self-center text-5xl leading-relaxed text-black">
            blahblahblahblahblahblahblahblah <br />
            blahblahblah <br />
            blahblahblah
          </div>
          <div className="justify-self-center">
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
        <Image
          src={GroupPhoto}
          alt="group photo"
          className="mt-10 w-[46%] rounded-xl"
        />
      </div>
    </div>
  );
};

export default Signup;
