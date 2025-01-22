import SignUpButton from "@/components/home/SignupButton";
import Image from "next/image";
import GroupPhoto from "@/../public/home/Signupemember.webp";

const Signup = () => {
  return (
    <div className="m-10 p-10">
      <div className="font-Inika pb-8 text-center text-6xl font-bold text-black">
        Interested in Becoming a Member?
      </div>
      <div className="flex flex-row justify-between items-center">
        <div className="ml-5 mt-8 pl-12">
          <div className="font-Inika pl-10 ml-10 mb-6 pb-12 text-5xl leading-relaxed text-black">
            blahblahblahblahblahblahblahblah <br />
            blahblahblah <br />
            blahblahblah
          </div>
          <div className="justify-self-center pl-16 pt-16">
            <SignUpButton />
          </div>
        </div>
        <div className="ml-12 pl-10 pt-10 w-5/12 "> {/* Added ml-auto to push the image to the right */}
          <Image src={GroupPhoto} alt="group photo" className="rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Signup;