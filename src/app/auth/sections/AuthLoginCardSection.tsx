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
    <div className="flex min-h-screen flex-1 items-center justify-center bg-neutral-100">
      <div className="w-full max-w-md rounded-2xl bg-white px-8 py-10 shadow-lg">
        <div className="mb-8 flex flex-col items-center text-center">
          <TextComponent element="h1" color="primary" weight="extrabold" className="mb-1 tracking-tight">
            FixApp
          </TextComponent>
          <TextComponent element="h5" color="neutral" align="center" className="text-sm">
            Platforma łącząca klientów z&nbsp;zweryfikowanymi fachowcami
          </TextComponent>
        </div>

        <div className="mb-3 flex rounded-xl bg-neutral-100 p-1">
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

        <div className="mb-6">
          <TextComponent element="h6" color="neutral" className="text-xs text-[var(--neutral-600)]">
            {getRoleDescription()}
          </TextComponent>
        </div>

        <div className="mb-4 flex flex-col gap-3">
          <ButtonComponent variant="classic" icon="pi pi-google" iconPos="left" label="Kontynuuj z Google" />
          <ButtonComponent variant="classic" icon="pi pi-facebook" iconPos="left" label="Kontynuuj z Facebook" />
        </div>

        <div className="mt-2 space-y-1 text-center">
          <TextComponent element="h6" color="neutral" className="text-[11px]">
            FixApp weryfikuje fachowców i chroni Twoje dane osobowe.
          </TextComponent>
          <TextComponent element="h6" color="neutral" weight="normal" className="text-[11px]">
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
