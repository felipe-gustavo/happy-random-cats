import { PropsWithChildren, useCallback, useMemo, useState } from "react";

import {
  SignUpErrorPayload,
  SignUpValues,
} from "./interfaces/SignUpContextData";

import { SignUpContext } from "./SignUpContext";

export function SignUpProvider({
  children,
}: PropsWithChildren<Record<string | number, unknown>>) {
  const [values, setValues] = useState<SignUpValues>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    ensurePassword: false,
  });
  const [errors, setErrors] = useState<SignUpErrorPayload>({});

  const setValue = useCallback(
    <T extends keyof SignUpValues>(field: T, value: SignUpValues[T]) => {
      setValues({
        ...values,
        [field]: value,
      });
    },
    [setValues, values]
  );

  const setError = useCallback(
    <T extends keyof SignUpErrorPayload>(
      field: T,
      error?: SignUpErrorPayload[T]
    ) => {
      setErrors({
        ...errors,
        [field]: error,
      });
    },
    [setErrors, errors]
  );

  const contextValue = useMemo(
    () => ({
      values,
      errors,
      setValue,
      setError,
    }),
    [values, errors, setValue, setError]
  );

  return (
    <SignUpContext.Provider value={contextValue}>
      {children}
    </SignUpContext.Provider>
  );
}
