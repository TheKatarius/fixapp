import { cn } from "@shared/utilities/class-merging";

interface TabButtonProps {
  isActive: boolean;
  icon: string;
  label: string;
  onClick: () => void;
}

export const TabButton = ({ isActive, onClick, icon, label }: TabButtonProps) => (
  <button
    onClick={onClick}
    className={cn(
      "flex flex-1 items-center justify-center gap-2 rounded-lg py-3 text-sm font-semibold transition-all duration-300",
      isActive
        ? "transform bg-white text-[var(--primary-600)]"
        : "text-white/70 hover:cursor-pointer hover:bg-white/10 hover:text-white",
    )}
  >
    <i className={`pi ${icon}`} />
    {label}
  </button>
);
