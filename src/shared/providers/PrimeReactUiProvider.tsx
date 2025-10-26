import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";

import { PRIME_REACT_CONFIG } from "@config/PrimeReactConfig.const";
import { PrimeReactProvider } from "primereact/api";

export const PrimeReactUiProvider = ({ children }: { children: React.ReactNode }): React.JSX.Element => {
  return <PrimeReactProvider value={PRIME_REACT_CONFIG}>{children}</PrimeReactProvider>;
};
