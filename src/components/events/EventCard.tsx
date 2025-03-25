import Button from "@/components/Button";
import { motion } from "motion/react";

interface EventCardProps {
  direction: "left" | "right";
  customStyle?: string;
  description: string;
  title: string;
}

const EventCard: React.FC<EventCardProps> = ({
  direction,
  customStyle,
  description,
  title,
}) => {
  return (
    <div className={`max-w-[70%] sm:max-w-[40%] lg:max-w-[70%] ${customStyle}`}>
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

      <motion.p
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
      </motion.p>
    </div>
  );
};

export default EventCard;
