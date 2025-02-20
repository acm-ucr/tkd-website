import HighlanderLinkButton from "@/components/Button";
import DoSportsEasyButton from "@/components/Button";
import Image from "next/image";
import GroupPhoto from "@/../public/home/Signupemember.webp";

const Signup = () => {
  return (
    <div className="mx-4 my-6 md:mx-[8%] md:my-[6%]">
      <div className="mb-4 text-center font-inika text-2xl font-bold text-black md:mb-[5%] md:text-6xl">
        Interested in Becoming a Member?
      </div>
      <div className="sm: ml-7 flex flex-col items-center gap-5 md:flex-row md:gap-[5%] md:justify-self-center">
        <div className="w-full md:w-[50%]">
          <div className="mb-6 break-words font-inika text-black sm:mb-9 sm:text-lg md:leading-relaxed lg:mb-12 lg:text-xl xl:text-2xl">
            <p className="font-bold underline underline-offset-1">
              {" "}
              Practice Times:
            </p>
            <ul className="list-disc">
              <li>Mondays and Wednesdays from 9:15pm-10:55pm</li>
              <li>Fridays from 6:00pm-6:55pm</li>
            </ul>
            <p className="font-bold underline underline-offset-1">
              Before You Come To Practice:
            </p>

            <ul className="list-disc">
              <li>Fill Out DoSportsEasy:</li>
            </ul>
            <ul className="list-decimal">
              <li>Log in to your UCR account</li>
              <li>Find Taekwondo @ UCR and click 'registration'</li>
              <li>Fill out the information and complete all steps!</li>
            </ul>
            <ul className="list-disc">
              <li>Register as a member of the club on Highlander Link:</li>
            </ul>
            <ul className="list-decimal">
              <li>Log in to your UCR account</li>
              <li>Sign up!</li>
              <li>Fill out any information and complete all steps!</li>
            </ul>
          </div>
          <div className="sm: flex flex-row justify-center gap-16">
            <div className="sm: flex justify-center justify-self-center py-[2%] lg:py-[4%]">
              <HighlanderLinkButton
                txt="Higlander Link"
                link="https://highlanderlink.ucr.edu/organization/tkd"
                borderColor="blue"
                bgColor="blue"
                textSize="sm:text-lg lg:text-xl xl:text-xl"
                padding="py-[10%] px-[10%]"
              />
            </div>
            <div className="sm: flex justify-center justify-self-center py-[2%] lg:py-[4%]">
              <DoSportsEasyButton
                txt="DoSportsEasy Form"
                link="https://recreation.ucr.edu/competitive-sports/sport-clubs"
                borderColor="blue"
                bgColor="blue"
                textSize="sm:text-lg lg:text-xl xl:text-xl"
                padding="py-[10%] px-[10%]"
              />
            </div>
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
