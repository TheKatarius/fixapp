type IconSize = "xs" | "sm" | "md" | "lg" | "xl";

type Theme = "primary";

interface AdvancedIconCardProps {
  icon: string;
  size?: IconSize;
  theme?: Theme;
  className?: string;
  onClick?: () => void;
}

const getSizeClasses = (size: IconSize): { card: string; icon: string } => {
  switch (size) {
    case "xs":
      return { card: "h-10 w-10", icon: "text-md" };
    case "sm":
      return { card: "h-12 w-12", icon: "text-lg" };
    case "md":
      return { card: "h-16 w-16", icon: "text-2xl" };
    case "lg":
      return { card: "h-20 w-20", icon: "text-3xl" };
    case "xl":
      return { card: "h-24 w-24", icon: "text-4xl" };
    default:
      return { card: "h-16 w-16", icon: "text-2xl" };
  }
};

const getBackgroundTheme = (theme: Theme): string => {
  switch (theme) {
    case "primary":
      return "bg-[var(--primary-300)]";
  }
};

export const IconCardComponent = ({
  icon,
  size = "md",
  theme = "primary",
  className = "",
  onClick = () => {},
}: AdvancedIconCardProps): React.JSX.Element => {
  const sizeClasses = getSizeClasses(size);
  const backgroundTheme = getBackgroundTheme(theme);

  return (
    <div
      className={`flex items-center justify-center rounded-xl shadow-lg ${sizeClasses.card} ${backgroundTheme} ${className}`}
      onClick={onClick}
    >
      <i className={`pi ${icon} text-white ${sizeClasses.icon}`} />
    </div>
  );
};
