import React from "react";

type TextColor = "primary" | "secondary" | "neutral" | "success" | "danger" | "warning" | "info" | "white" | "black";

type TextWeight = "thin" | "normal" | "semibold" | "bold" | "extrabold";

type TextAlign = "left" | "center" | "right" | "justify";

type TextElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface TextComponentProps {
  element: TextElement;
  color?: TextColor;
  weight?: TextWeight;
  align?: TextAlign;
  className?: string;
  children: React.ReactNode;
  id?: string;
  onClick?: () => void;
}

/**
 * Get variant styles WITHOUT font-weight to prevent CSS specificity conflicts
 * Font weights are handled separately to ensure proper override behavior
 */
const getVariantStyles = (variant: TextElement): string => {
  switch (variant) {
    case "h1":
      return "text-4xl leading-tight"; // ~36px
    case "h2":
      return "text-3xl leading-tight"; // ~30px
    case "h3":
      return "text-2xl leading-normal"; // ~24px
    case "h4":
      return "text-xl leading-normal"; // ~20px
    case "h5":
      return "text-base leading-normal"; // ~16px
    case "h6":
      return "text-xs leading-normal"; // ~12px
    default:
      return "text-base leading-normal";
  }
};

/**
 * Get default font weights for each variant
 * These are applied when no custom weight is specified
 */
const getDefaultWeight = (variant: TextElement): string => {
  switch (variant) {
    case "h1":
    case "h2":
      return "font-extrabold";
    case "h3":
      return "font-bold";
    case "h4":
      return "font-semibold";
    case "h5":
    case "h6":
      return "font-normal";
    default:
      return "font-normal";
  }
};

const getColorStyles = (color: TextColor): string => {
  switch (color) {
    case "primary":
      return "text-[var(--primary-500)]";
    case "secondary":
      return "text-[var(--secondary-500)]";
    case "neutral":
      return "text-[var(--neutral-700)]";
    case "success":
      return "text-green-500";
    case "danger":
      return "text-red-500";
    case "warning":
      return "text-yellow-500";
    case "info":
      return "text-blue-500";
    case "white":
      return "text-white";
    case "black":
      return "text-black";
  }
};

const getWeightStyles = (weight?: TextWeight): string => {
  if (!weight) return "";

  switch (weight) {
    case "thin":
      return "!font-thin"; // Use !important to override variant defaults
    case "normal":
      return "!font-normal";
    case "bold":
      return "!font-bold";
    case "semibold":
      return "!font-semibold";
    case "extrabold":
      return "!font-extrabold";
    default:
      return "";
  }
};

const getAlignStyles = (align: TextAlign): string => {
  switch (align) {
    case "left":
      return "text-left";
    case "center":
      return "text-center";
    case "right":
      return "text-right";
    case "justify":
      return "text-justify";
    default:
      return "text-left";
  }
};

export const TextComponent = ({
  element,
  color = "neutral",
  weight,
  align = "left",
  className = "",
  id,
  children,
  onClick,
}: TextComponentProps): React.JSX.Element => {
  const Element = element;

  const baseStyles = "transition-colors duration-200";
  const variantStyles = getVariantStyles(element);
  const defaultWeightStyles = !weight ? getDefaultWeight(element) : "";
  const customWeightStyles = getWeightStyles(weight);
  const colorStyles = getColorStyles(color);
  const alignStyles = getAlignStyles(align);

  const combinedClassName = [
    baseStyles,
    variantStyles,
    defaultWeightStyles,
    colorStyles,
    alignStyles,
    customWeightStyles,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Element id={id} className={combinedClassName} onClick={onClick}>
      {children}
    </Element>
  );
};
