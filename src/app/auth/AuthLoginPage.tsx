import { AuthLoginCardSection } from "@app/auth/sections/AuthLoginCardSection";
import { AuthLoginInfoSection } from "@app/auth/sections/AuthLoginInfoSection";

export const AuthLoginPage = (): React.JSX.Element => {
  return (
    <div className="flex">
      <AuthLoginCardSection />
      <AuthLoginInfoSection />
    </div>
  );
};
