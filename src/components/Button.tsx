import React from "react";
import Link from "next/link";

const Button = ({
  txt,
  target = "_self",
  link,
  borderColor = "grey", //defaults to "grey" border class if no colors provided
  bgColor = "grey", //defaults to "grey" bg class if no colors provided
}: {
  txt: string;
  target?: string;
  link: string;
  borderColor?: "red" | "blue" | "grey";
  bgColor?: "red" | "blue" | "grey";
}) => {
  //dyanmic props to bg colors and border colors
  const bgVariant = {
    grey: "bg-grey-100",
    red: "bg-tkd-red-100 hover:bg-red-400",
    blue: "bg-tkd-blue-200 hover:bg-blue-500",
  };
  const borderVariant = {
    grey: "border-grey-100",
    red: "border-tkd-red-200 hover:border-red-700",
    blue: "border-tkd-blue-300 hover:border-blue-800",
  };

  //fall back to default colors if no provided colors
  const bgClass = bgVariant[bgColor];
  const borderClass = borderVariant[borderColor];

  return (
    <Link
      href={link}
      target={target}
      className={`box-border flex items-center justify-center border-4 border-solid px-7 py-7 font-inika text-xl font-medium lg:text-3xl ${bgClass} ${borderClass} `}
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
