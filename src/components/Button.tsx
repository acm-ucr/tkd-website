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
  "h-50 w-50 p-[4%] box-border flex items-center justify-center border-2 border-solid font-medium text-white whitespace-nowrap",
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
