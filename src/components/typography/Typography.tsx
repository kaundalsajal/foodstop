import { ElementType, ReactNode } from "react";
import clsx from "clsx";

type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body-lg"
  | "body"
  | "body-sm"
  | "caption"
  | "overline";

type Color =
  | "primary"
  | "text-primary"
  | "text-secondary"
  | "text-muted"
  | "white"
  | "inherit";

type Weight = "light" | "normal" | "medium" | "semibold" | "bold";

interface TypographyProps {
  variant?: Variant;
  as?: ElementType;
  color?: Color;
  weight?: Weight;
  align?: "left" | "center" | "right" | "justify";
  className?: string;
  children: ReactNode;
}

const variantStyles: Record<Variant, string> = {
  h1: "font-poppins text-[36px] sm:text-[48px] lg:text-[60px] xl:text-[72px] leading-tight",
  h2: "font-poppins text-[30px] sm:text-[36px] lg:text-[48px] xl:text-[60px] leading-tight",
  h3: "font-poppins text-[24px] sm:text-[30px] lg:text-[36px] xl:text-[48px] leading-tight",
  h4: "font-poppins text-[20px] sm:text-[24px] lg:text-[30px] xl:text-[36px] leading-snug",
  h5: "font-poppins text-[18px] sm:text-[20px] lg:text-[24px] xl:text-[28px] leading-snug",
  h6: "font-poppins text-[16px] sm:text-[18px] lg:text-[20px] leading-snug",

  "body-lg": "font-poppins text-[16px] sm:text-[18px] leading-7",
  body: "font-poppins text-[14px] sm:text-[16px] leading-7",
  "body-sm": "font-poppins text-[12px] sm:text-[14px] leading-6",

  caption: "font-poppins text-[12px] leading-5",

  overline: "font-poppins text-[12px] uppercase tracking-[0.1em]",
};

const colorStyles: Record<Color, string> = {
  primary: "text-primary",
  "text-primary": "text-text-primary",
  "text-secondary": "text-text-secondary",
  "text-muted": "text-text-muted",
  white: "text-white",
  inherit: "text-inherit",
};

const weightStyles: Record<Weight, string> = {
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

const defaultTag: Record<Variant, ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",

  "body-lg": "p",
  body: "p",
  "body-sm": "p",

  caption: "span",
  overline: "span",
};

export default function Typography({
  variant = "body",
  as,
  color = "text-primary",
  weight = "normal",
  align = "left",
  className,
  children,
}: TypographyProps) {
  const Component = as ?? defaultTag[variant];

  return (
    <Component
      className={clsx(
        variantStyles[variant],
        colorStyles[color],
        weightStyles[weight],
        {
          "text-left": align === "left",
          "text-center": align === "center",
          "text-right": align === "right",
          "text-justify": align === "justify",
        },
        className,
      )}
    >
      {children}
    </Component>
  );
}
