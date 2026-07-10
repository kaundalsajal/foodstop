import React from "react";
import clsx from "clsx";
type Variant = "outline" | "normal";

interface ButtonProps {
  children: React.ReactNode;
  variant: Variant;
  color?: string;
  className?: string
}

const variantStyles: Record<Variant, string> = {
  outline: "border-2 border-[#D3CDCD] rounded-[48px] bg-white",
  normal: " rounded-[48px]",
};

function Button({ children, variant, color="", className="" }: ButtonProps) {
  return (
    <button className={clsx(variantStyles[variant], "h-10.25",className ,"cursor-pointer")}>
      {children}
    </button>
  );
}

export default Button;
