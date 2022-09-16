import { PropsWithChildren, useCallback, useMemo, useState } from "react";

import { LoginErrorPayload } from "./interfaces/LoginContextData";

import { LoginContext } from "./LoginContext";

export function LoginProvider({
  children,
}: PropsWithChildren<Record<string | number, unknown>>) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<LoginErrorPayload>({});

  const handleSetEmail = useCallback(
    (newEmail: string) => {
      setEmail(newEmail);
    },
    [setEmail]
  );

  const handleSetPassword = useCallback(
    (newPassword: string) => {
      setPassword(newPassword);
    },
    [setPassword]
  );

  const handleErrors = useCallback(
    (newErrors: LoginErrorPayload) => {
      setErrors(newErrors);
    },
    [setErrors]
  );

  const values = useMemo(
    () => ({
      email,
      password,
      errors,
      setEmail: handleSetEmail,
      setPassword: handleSetPassword,
      setErrors: handleErrors,
    }),
    [email, password, errors, handleSetEmail, handleSetPassword, handleErrors]
  );

  return (
    <LoginContext.Provider value={values}>{children}</LoginContext.Provider>
  );
}
