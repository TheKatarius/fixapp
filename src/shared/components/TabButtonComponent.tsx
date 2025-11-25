import { cn } from "@shared/utilities/class-merging";

import { ButtonComponent } from "./ButtonComponent"; // Upewnij się, że ścieżka importu jest poprawna

interface TabButtonProps {
  isActive: boolean;
  icon: string;
  label: string;
  onClick: () => void;
  variant?: "onDark" | "onLight";
}

export const TabButton = ({ isActive, onClick, icon, label, variant = "onDark" }: TabButtonProps) => {
  const baseStyles =
    "flex-1 gap-2 rounded-lg py-3 text-sm font-semibold transition-all duration-300 border-none outline-none shadow-none h-auto px-4";

  const onDarkStyles = isActive
    ? "bg-white text-[var(--primary-600)]"
    : "bg-transparent text-white/70 hover:bg-white/10 hover:text-white";

  const onLightStyles = isActive
    ? "bg-white text-[var(--primary-600)] shadow-sm"
    : "bg-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-200/50";

  const currentStyles = variant === "onDark" ? onDarkStyles : onLightStyles;

  return (
    <ButtonComponent
      variant="classic"
      onClick={onClick}
      label={label}
      icon={`pi ${icon} text-lg`}
      className={cn(baseStyles, currentStyles, {
        "hover:cursor-pointer": !isActive,
      })}
    />
  );
};
