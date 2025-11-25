import { TextComponent } from "./TextComponent";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="flex items-center gap-4 rounded-xl py-3 transition-colors hover:-translate-x-3 hover:bg-white/5 hover:pl-3">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/20">
        <i className={`pi ${icon} text-xl`} />
      </div>

      <div className="flex flex-col gap-0.5">
        <TextComponent element="h5" color="white" weight="bold">
          {title}
        </TextComponent>

        <TextComponent element="h6" color="white" className="text-xs opacity-80 transition-opacity hover:opacity-100">
          {description}
        </TextComponent>
      </div>
    </div>
  );
};
