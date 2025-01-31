import React from "react";
import Link from "next/link";

const Button = ({
  txt,
  target = "_self",
  link,
  borderColor = "grey", //defaults to "grey" border class if no colors provided
  bgColor = "grey", //defaults to "grey" bg class if no colors provided
  smVariant = "small",
  lgVariant = "large",
  mdVariant = "medium",
  size = "", //defaults to empty string if no size is provided
  textSize = "text-xl lg:text-3xl",
}: {
  txt: string;
  target?: string;
  link: string;
  borderColor?: "red" | "blue" | "grey";
  bgColor?: "red" | "blue" | "grey";
  smVariant?: "small";
  lgVariant?: "large";
  mdVariant?: "medium";
  size?: string;
  textSize?: string;
}) => {
  //dyanmic props to bg colors and border colors
  const bgVariant = {
    grey: "bg-grey-100",
    red: "bg-tkd-red-100 hover:bg-opacity-90",
    blue: "bg-tkd-blue-200 hover:bg-opacity-90",
  };
  const borderVariant = {
    grey: "border-grey-100",
    red: "border-tkd-red-200 hover:border-opacity-90",
    blue: "border-tkd-blue-300 hover:border-opacity-90",
  };

  const screenSmVariant = {
    small: "sm:border-1  sm:px-1 sm:py-1 sm:text-sm  ",
  };

  const screenLgVariant = {
    large: "lg:px-7 lg:py-7 lg:text-3xl",
  };

  const screenMdVariant = {
    medium: "md:px-5 md:py-5 md:text-2xl md:border-3",
  };

  //fall back to default colors if no provided colors
  const bgClass = bgVariant[bgColor];
  const borderClass = borderVariant[borderColor];
  const smClass = screenSmVariant[smVariant];
  const lgClass = screenLgVariant[lgVariant];
  const mdClass = screenMdVariant[mdVariant];

  return (
    <Link
      href={link}
      target={target}
      className={`box-border flex items-center justify-center border-4 border-solid font-inika text-xl font-medium lg:text-3xl ${bgClass} ${borderClass} ${smClass} ${lgClass} ${mdClass} ${textSize} ${size} `}
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
