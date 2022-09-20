import { createContext } from "react";

import { LoadingContextData } from "./interfaces/LoadingContextData";

export const LoadingContext = createContext<LoadingContextData | undefined>(
  undefined
);
