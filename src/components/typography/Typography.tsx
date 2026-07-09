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
  h1: "font-poppins text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight",
  h2: "font-poppins text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight",
  h3: "font-poppins text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-tight",
  h4: "font-poppins text-xl sm:text-2xl lg:text-3xl xl:text-4xl leading-snug",
  h5: "font-poppins text-lg sm:text-xl lg:text-2xl xl:text-[28px] leading-snug",
  h6: "font-poppins text-base sm:text-lg lg:text-xl leading-snug",

  "body-lg": "font-poppins text-base sm:text-lg leading-7",
  body: "font-poppins text-sm sm:text-base leading-7",
  "body-sm": "font-poppins text-xs sm:text-sm leading-6",

  caption: "font-poppins text-xs leading-5",
  overline: "font-poppins text-xs uppercase tracking-[0.1em]",
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
