import { createContext } from "react";

import { AuthContextData } from "./interfaces/AuthContextData";

export const AuthContext = createContext<AuthContextData | undefined>(
  undefined
);
