import { createTheme, CssBaseline, StyledEngineProvider } from "@mui/material";
import { PropsWithChildren } from "react";
import { CookiesProvider } from "react-cookie";
import { ThemeProvider } from "styled-components";

import { LocalContextProviders } from "@/contexts/LocalContextProviders";

export function Providers({
  children,
}: PropsWithChildren<Record<string | number | symbol, unknown>>) {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <CookiesProvider>
          <LocalContextProviders>{children}</LocalContextProviders>
        </CookiesProvider>
      </StyledEngineProvider>
    </ThemeProvider>
  );
}
