import React from "react";
import Link from "next/link";

const Button = ({
  txt,
  target = "_self",
  link,
  textSize = "text-xl lg:text-3xl max-md:text-base",
  padding,
  customStyle,
}: {
  txt: string;
  target?: string;
  link: string;
  textSize?: string;
  padding?: string;
  customStyle?: string;
}) => {
  return (
    <Link
      href={link}
      target={target}
      className={`box-border flex items-center justify-center border-2 border-solid ${textSize} ${padding} font-inika font-medium ${customStyle}`}
    >
      <div className="relative inline-block whitespace-nowrap">
        <span className="flex justify-center text-white opacity-100">
          {txt}
        </span>
      </div>
    </Link>
  );
};

export default Button;
