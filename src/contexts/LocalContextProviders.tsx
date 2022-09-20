import { PropsWithChildren } from "react";

import { AlertProvider } from "./Alert";
import { AuthProvider } from "./Auth";
import { LoadingProvider } from "./Loading";

import { LoginProvider } from "./Login";
import { SignUpProvider } from "./SignUp";

export function LocalContextProviders({
  children,
}: PropsWithChildren<Record<string | number | symbol, unknown>>) {
  return (
    <LoadingProvider>
      <AuthProvider>
        <AlertProvider>
          <LoginProvider>
            <SignUpProvider>{children}</SignUpProvider>
          </LoginProvider>
        </AlertProvider>
      </AuthProvider>
    </LoadingProvider>
  );
}
