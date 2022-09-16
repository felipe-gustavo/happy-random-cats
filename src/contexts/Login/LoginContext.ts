import { createContext } from "react";

import { LoginContextData } from "./interfaces/LoginContextData";

export const LoginContext = createContext<LoginContextData | undefined>(
  undefined
);
