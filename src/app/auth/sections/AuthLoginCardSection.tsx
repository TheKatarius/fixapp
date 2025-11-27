import { ButtonComponent, TabButton, TextComponent } from "@shared/components";
import { useState } from "react";

export const AuthLoginCardSection = (): React.JSX.Element => {
  const [userRole, setUserRole] = useState<"client" | "professional">("client");

  const getRoleDescription = () => {
    if (userRole === "client") {
      return "Jako klient znajdziesz sprawdzonych fachowców, porównasz opinie i wyślesz zapytanie w kilka kliknięć.";
    }

    return "Jako wykonawca utworzysz profil, odbierzesz zapytania od klientów i zbudujesz swoją reputację.";
  };

  return (
    <div className="flex min-h-screen flex-1 flex-col items-center justify-center bg-white pb-40">
      <div className="flex flex-col items-center">
        <div className="mb-10 flex max-w-[300px] flex-col items-center text-center">
          <TextComponent element="h1" color="primary" weight="bold" className="mb-2">
            FixApp
          </TextComponent>
          <TextComponent element="h6" color="neutral" align="center">
            Platforma łącząca klientów z zweryfikowanymi fachowcami
          </TextComponent>
        </div>

        <div className="flex w-full max-w-[400px] rounded-xl bg-gray-100/80 p-1 backdrop-blur-sm">
          <TabButton
            variant="onLight"
            isActive={userRole === "client"}
            onClick={() => setUserRole("client")}
            icon="pi-user"
            label="Klient"
          />
          <TabButton
            variant="onLight"
            isActive={userRole === "professional"}
            onClick={() => setUserRole("professional")}
            icon="pi-briefcase"
            label="Wykonawca"
          />
        </div>

        <div className="mb-10 flex max-w-[400px] items-center gap-3 rounded-xl bg-[var(--primary-50)]">
          <i className="pi pi-info-circle flex-shrink-0 text-[var(--primary-500)]" style={{ fontSize: "1.1rem" }} />
          <TextComponent element="h6" className="text-sm leading-relaxed font-medium text-[var(--neutral-700)]">
            {getRoleDescription()}
          </TextComponent>
        </div>

        <div className="flex w-full max-w-[400px] flex-col gap-4">
          <ButtonComponent variant="classic" icon="pi pi-google" iconPos="left" label="Kontynuuj przez Google" />
          <ButtonComponent variant="classic" icon="pi pi-facebook" iconPos="left" label="Kontynuuj przez Facebook" />
        </div>

        <div className="mt-2 max-w-[400px]">
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
