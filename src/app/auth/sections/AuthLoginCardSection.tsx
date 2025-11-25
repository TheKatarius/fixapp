import { ButtonComponent, TextComponent } from "@shared/components";

export const AuthLoginCardSection = (): React.JSX.Element => {
  return (
    <div className="flex min-h-screen flex-1 items-center justify-center bg-white px-4">
      <div className="flex flex-col items-center">
        <div className="mb-10 flex w-[300px] flex-col items-center text-center">
          <TextComponent element="h1" color="primary" weight="bold" className="mb-2">
            FixApp
          </TextComponent>
          <TextComponent element="h6" color="neutral" align="center">
            Platforma łącząca klientów z zweryfikowanymi fachowcami
          </TextComponent>
        </div>

        <div className="flex w-full flex-col gap-4">
          <ButtonComponent variant="classic" icon="pi pi-google" iconPos="left" label="Kontynuuj przez Google" />

          <ButtonComponent variant="classic" icon="pi pi-facebook" iconPos="left" label="Kontynuuj przez Facebook" />
        </div>

        <div className="mt-6 text-center">
          <TextComponent element="h6" color="neutral" weight="normal" className="text-xs">
            Logując się, akceptujesz{" "}
            <a href="/regulamin" className="text-[var(--primary-500)] hover:underline">
              Regulamin
            </a>{" "}
            i{" "}
            <a href="/polityka-prywatnosci" className="text-[var(--primary-500)] hover:underline">
              Politykę prywatności
            </a>
            .
          </TextComponent>
        </div>
      </div>
    </div>
  );
};
