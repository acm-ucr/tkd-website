import React from "react";
import Image from "next/image";
import ArrowDown from "./Arrow Down.svg";

const MoreEvent = () => {
  return (
    <div className="flex flex-col items-center">
      More Events
      <Image src={ArrowDown} alt="arrow-down" />
    </div>
  );
};

export default MoreEvent;
