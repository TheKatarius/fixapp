import { Button, type ButtonProps } from "primereact/button";

type ButtonVariant = "primary" | "secondary" | "third" | "accent" | "success" | "danger" | "warning" | "info";

type AllowedProps =
  | "badge"
  | "badgeClassName"
  | "disabled"
  | "icon"
  | "iconPos"
  | "label"
  | "loading"
  | "outlined"
  | "tooltip"
  | "tooltipOptions"
  | "visible"
  | "onClick";

interface ButtonComponentProps extends Pick<ButtonProps, AllowedProps> {
  variant: ButtonVariant;
  className?: string;
}

const getVariantStyles = (outlined: boolean, variant: ButtonVariant): string => {
  const base = "border-2 outline-none focus:ring w-[400px] h-10 font-medium rounded-lg text-sm transition-all";

  switch (variant) {
    case "primary":
      return outlined
        ? `${base} border-[var(--primary-600)] text-[var(--primary-600)] hover:text-[var(--primary-700)] hover:border-[var(--primary-200)] hover:bg-[var(--primary-200)] focus:ring-[var(--primary-600)] disabled:border-[var(--neutral-300)] disabled:text-[var(--neutral-500)]`
        : `${base} bg-[var(--primary-500)] hover:bg-[var(--primary-600)] focus:ring-[var(--primary-500)] text-white disabled:bg-[var(--neutral-300)] disabled:text-[var(--neutral-500)]`;

    case "secondary":
      return outlined
        ? `${base} border-[var(--secondary-500)] text-[var(--secondary-500)] hover:border-[var(--secondary-100)] hover:bg-[var(--secondary-100)] focus:ring-[var(--secondary-400)] disabled:border-[var(--neutral-300)] disabled:text-[var(--neutral-500)]`
        : `${base} bg-[var(--secondary-500)] hover:bg-[var(--secondary-600)] focus:ring-[var(--secondary-500)] text-white disabled:bg-[var(--neutral-300)] disabled:text-[var(--neutral-500)]`;

    case "third":
      return outlined
        ? `${base} border-[var(--neutral-500)] text-[var(--neutral-700)] hover:border-[var(--neutral-200)] hover:bg-[var(--neutral-200)] focus:ring-[var(--neutral-500)] disabled:border-[var(--neutral-300)] disabled:text-[var(--neutral-500)]`
        : `${base} bg-[var(--neutral-400)] hover:bg-[var(--neutral-500)] focus:ring-[var(--neutral-500)] text-white disabled:bg-[var(--neutral-300)] disabled:text-[var(--neutral-500)]`;

    default:
      return base;
  }
};

export const ButtonComponent = ({
  badge = undefined,
  badgeClassName = undefined,
  className = "",
  disabled = false,
  icon = undefined,
  iconPos = "left",
  label = "Przycisk",
  loading = false,
  outlined = false,
  tooltip = undefined,
  tooltipOptions = undefined,
  variant = "primary",
  visible = true,
  onClick = () => {},
}: ButtonComponentProps): React.JSX.Element => {
  return (
    <Button
      badge={badge}
      badgeClassName={badgeClassName}
      disabled={disabled}
      label={label}
      icon={icon}
      iconPos={iconPos}
      loading={loading}
      className={getVariantStyles(outlined, variant) + className}
      tooltip={tooltip}
      tooltipOptions={tooltipOptions}
      visible={visible}
      onClick={onClick}
    />
  );
};
