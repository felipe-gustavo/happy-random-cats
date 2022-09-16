import { useContext } from "react";

import { LoginContext } from "./LoginContext";

export function useLogin() {
  const loginContext = useContext(LoginContext);

  if (loginContext === undefined) {
    throw new Error(
      "You need use this hook inside Login/LoginProvider component"
    );
  }

  return loginContext;
}
