import type { APIOptions } from "primereact/api";

export const PRIME_REACT_CONFIG: Partial<APIOptions> = {
  appendTo: "self",
  styleContainer: document.head,
  cssTransition: true,
  hideOverlaysOnDocumentScrolling: true,
  inputStyle: "filled",
  locale: "pl",
  nonce: "randomNonce",
  ripple: true,
  zIndex: { modal: 1100, overlay: 1000, menu: 1000, tooltip: 1100, toast: 1200 },
  nullSortOrder: -1,
};
