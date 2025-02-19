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

      <div className="absolute left-[80%] top-[15%] h-[10px] w-[20%]">
        <Button
          txt="EVENT 1"
          link=""
          bgColor="red"
          borderColor="red"
          target="_blank"
          textSize="text-3xl"
        />
        <div className="font ml-[7%] mt-[4%] text-3xl">
          <p>Event stusdfsdgdsgff</p>
          <p>Tteast</p>
        </div>
      </div>

      <div className="absolute left-[65%] top-[55%] z-0 h-[10px] w-[20%]">
        <Button
          txt="EVENT 2"
          link=""
          bgColor="red"
          borderColor="red"
          target="_blank"
          textSize="text-3xl"
        />
        <div className="font ml-[7%] mt-[4%] text-3xl">
          <p>Event stusdfsdgdsgff</p>
          <p>Tteast</p>
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
