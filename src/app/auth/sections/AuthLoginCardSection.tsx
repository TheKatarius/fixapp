import { ButtonComponent } from "@shared/components";
import { Button } from "primereact/button";

export const AuthLoginCardSection = (): React.JSX.Element => {
  return (
    <div className="m-auto flex h-[100vh] w-[400px] flex-col items-center justify-center gap-4">
      <Button label="Kontynuuj przez Google" icon="pi pi-google" className="" />
      <Button label="Kontynuuj przez Facebook" icon="pi pi-facebook" className="" />
      <Button label="Kontynuuj przez Facebook" icon="pi pi-facebook" text={true} />

      <ButtonComponent label="Kontynuuj przez FixApp" icon="pi pi-check" variant="primary" />
      <ButtonComponent label="Kontynuuj przez FixApp" icon="pi pi-check" variant="primary" outlined />
      <ButtonComponent label="Kontynuuj przez FixApp" icon="pi pi-check" variant="secondary" />
      <ButtonComponent label="Kontynuuj przez FixApp" icon="pi pi-check" variant="secondary" outlined />
      <ButtonComponent label="Kontynuuj przez FixApp" icon="pi pi-check" variant="third" />
      <ButtonComponent label="Kontynuuj przez FixApp" icon="pi pi-check" variant="third" outlined />
    </div>
  );
};
