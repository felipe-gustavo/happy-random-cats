import { createContext } from "react";

import { SignUpContextData } from "./interfaces/SignUpContextData";

export const SignUpContext = createContext<SignUpContextData | undefined>(
  undefined
);
