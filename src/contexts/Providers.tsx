import { CssBaseline } from "@mui/material";
import { PropsWithChildren } from "react";

import { AlertProvider } from "./Alert";

import { LoginProvider } from "./Login";

export function Providers({
  children,
}: PropsWithChildren<Record<string | number | symbol, unknown>>) {
  return (
    <AlertProvider>
      <LoginProvider>
        <CssBaseline />
        {children}
      </LoginProvider>
    </AlertProvider>
  );
}
