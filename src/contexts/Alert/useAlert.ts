import { useContext } from "react";

import { AlertContext } from "./AlertContext";

export function useAlert() {
  const alertContext = useContext(AlertContext);

  if (alertContext === undefined) {
    throw new Error(
      "You need use this hook inside Alert/AlertProvider component"
    );
  }

  return alertContext;
}
