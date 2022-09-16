import { createContext } from "react";

import { AlertContextData } from "./interfaces/AlertContextData";

export const AlertContext = createContext<AlertContextData | undefined>(
  undefined
);
