import landingEvent from "@/public/events/landingEvent.webp";
import Image from "next/image";
import Button from "@/components/Button";
import { MoveDown } from "lucide-react";

const Landing = () => {
  return (
    <div className="relative flex justify-between font-inika">
      <div>
        <Image
          src={landingEvent}
          alt="Landing image"
          className="relative z-10 w-[65%]"
        />
        <p className="absolute left-[25%] top-[40%] z-20 justify-center font-caveat-brush text-9xl text-white">
          EVENTS
        </p>
      </div>

      <div>
        <div className="absolute right-[5.7%] top-[15%] w-[14%]">
          <Button
            txt="EVENT 1"
            link=""
            bgColor="red"
            borderColor="red"
            target="_blank"
            textSize="text-5xl"
            padding="px-[69.8%] py-[10%]"
          />
        </div>

        <div className="absolute left-[81%] top-[27%] z-20 w-[18%] break-words text-3xl">
          <p>asfafsasfaasdasdsdasdasdasdasd</p>
        </div>
      </div>

      <div>
        <div className="absolute left-[65%] top-[55%] w-[14%]">
          <Button
            txt="EVENT 2"
            link=""
            bgColor="red"
            borderColor="red"
            target="_blank"
            textSize="text-5xl"
            padding="px-[70.5%] py-[10%]"
          />
        </div>

        <div className="absolute left-[65.5%] top-[67%] z-20 w-[18%] break-words text-3xl">
          <p>asfafsasfasdasdasdaasdasdsadsdasd</p>
        </div>
      </div>

      <div className="absolute left-[82%] top-[85%]">
        <p className="mb-[15%] ml-[-35%] w-[100%] text-3xl">More Events</p>
        <MoveDown size={55} strokeWidth={1} />
      </div>
    </div>
  );
};

export default Landing;
