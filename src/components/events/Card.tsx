import Button from "@/components/Button";
import { motion } from "motion/react";

interface CardProps {
  direction: "left" | "right";
  customStyle?: string;
  description: string;
  title: string;
  start_time: string;
  end_time: string;
}

const Card: React.FC<CardProps> = ({
  direction,
  customStyle,
  description,
  title,
  start_time,
  end_time,
}) => {
  const start_hour = new Date(start_time).getHours();
  const start_minutes = new Date(start_time).getMinutes();
  const start_am_pm = start_hour > 12 ? "pm" : "am";

  const end_hour = new Date(end_time).getHours();
  const end_minutes = new Date(end_time).getMinutes();
  const end_am_pm = end_hour > 12 ? "pm" : "am";

  return (
    <div className={`max-w-7/10 sm:max-w-2/5 lg:max-w-7/10 ${customStyle}`}>
      <motion.div
        initial={{
          opacity: 0,
          x: direction === "left" ? -50 : 50,
        }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { duration: 1, delay: 0.5 },
        }}
      >
        <Button
          txt={title}
          link=""
          customStyle="bg-tkd-red-100 border-tkd-red-200"
          target=""
          textSize="text-2xl lg:text-5xl"
          padding="lg:py-[5%] px-8 py-2"
        />
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          x: direction === "left" ? -50 : 50,
        }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { duration: 1, delay: 0.5 },
        }}
        className={`m-[4%] text-xl lg:text-3xl`}
      >
        {description}{" "}
        <p className="mt-[2%]">
          from {start_hour > 12 ? start_hour - 12 : start_hour}:
          {start_minutes < 10 ? "0" + start_minutes : start_minutes}
          {start_am_pm} to {end_hour > 12 ? end_hour - 12 : end_hour}:
          {end_minutes < 10 ? "0" + end_minutes : end_minutes}
          {end_am_pm}
        </p>
      </motion.div>
    </div>
  );
};

export default Card;
