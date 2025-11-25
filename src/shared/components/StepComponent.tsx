import { TextComponent } from "./TextComponent";

interface StepCardProps {
  maxStepNumber: number;
  stepNumber: number;
  icon: string;
  title: string;
  description: string;
}

export const StepCard = ({ maxStepNumber, stepNumber, icon, title, description }: StepCardProps) => {
  return (
    <div className="relative flex items-start gap-5 pl-2">
      {stepNumber !== maxStepNumber && <div className="absolute top-8 left-[27px] h-20 w-0.5 bg-white/10" />}

      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white shadow-lg ring-4 ring-white/20">
        <span className="font-extrabold text-[var(--primary-600)]">{stepNumber}</span>
      </div>

      <div className="flex flex-1 flex-col">
        <div className="flex items-center gap-2">
          <i className={`pi ${icon} text-sm text-white/70`} />
          <TextComponent element="h5" color="white" weight="bold">
            {title}
          </TextComponent>
        </div>

        <TextComponent element="h6" color="white" className="text-xs opacity-80">
          {description}
        </TextComponent>
      </div>
    </div>
  );
};
