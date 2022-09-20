import { useContext } from "react";

import { AuthContext } from "./AuthContext";

export function useAuth() {
  const authContext = useContext(AuthContext);

  if (authContext === undefined) {
    throw new Error(
      "You need use this hook inside Auth/AuthProvider component"
    );
  }

  return authContext;
}
