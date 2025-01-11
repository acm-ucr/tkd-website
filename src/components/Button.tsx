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
    red: "bg-red-300 hover:bg-red-200",
    blue: "bg-blue-300 hover:bg-blue-200",
  };
  const borderVariant = {
    grey: "border-grey-100",
    red: "border-red-800 hover:border-red-600",
    blue: "border-blue-800 hover:border-blue-600",
  };

  //fall back to default colors if no provided colors
  const bgClass = bgVariant[bgColor];
  const borderClass = borderVariant[borderColor];

  return (
    <Link
      href={link}
      target={target}
      className={`font-inika-white box-border flex items-center justify-center border-4 border-solid px-7 py-8 text-xl lg:text-3xl ${bgClass} ${borderClass} `}
    >
      <div className="relative inline-block whitespace-nowrap">
        <span className="flex justify-center text-black opacity-100">
          {txt}
        </span>
      </div>
    </Link>
  );
};

export default Button;
