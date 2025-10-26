import "./index.css";

import { App } from "@app/App";
import { PrimeReactUiProvider } from "@shared/providers/PrimeReactUiProvider";
import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PrimeReactUiProvider>
      <App />
    </PrimeReactUiProvider>
  </React.StrictMode>,
);
