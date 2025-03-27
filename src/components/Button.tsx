// import React from "react";
// import Link from "next/link";

// const Button = ({
//   txt,
//   target = "_self",
//   link,
//   textSize = "text-xl lg:text-3xl max-md:text-base",
//   padding = "",
//   customStyle,
// }: {
//   txt: string;
//   target?: string;
//   link: string;
//   textSize?: string;
//   padding?: string;
//   customStyle?: string;
// }) => {
//   return (
//     <Link
//       href={link}
//       target={target}
//       className={`box-border flex items-center justify-center border-2 border-solid ${textSize} ${padding} font-inika font-medium ${customStyle}`}
//     >
//       <div className="relative inline-block whitespace-nowrap">
//         <span className="flex justify-center text-white opacity-100">
//           {txt}
//         </span>
//       </div>
//     </Link>
//   );
// };

// export default Button;

// import { buttonVariants } from "@/ui/button";
import Link from "next/link";
import { cva } from "class-variance-authority";
import { cn } from "@/utils/cn";

type ButtonProps = {
  variant?: "blue" | "red";
  children?: string;
  className?: string;
  link?: string;
  target?: string;
};

const Button = ({
  link,
  target = "",
  variant,
  children,
  className,
}: ButtonProps) => {
  return (
    <Link
      href={link === undefined ? "" : link}
      target={target}
      className={cn(buttonVariants({ variant }), className)}
    >
      {children}
    </Link>
  );
};

const buttonVariants = cva(
  "p-[4%] box-border flex items-center justify-center border-2 border-solid font-medium text-white whitespace-nowrap",
  {
    variants: {
      variant: {
        blue: "bg-tkd-blue-200 border-tkd-blue-300",
        red: "bg-tkd-red-100 border-tkd-red-200",
      },
    },
    defaultVariants: {
      variant: "red",
    },
  },
);

export default Button;
