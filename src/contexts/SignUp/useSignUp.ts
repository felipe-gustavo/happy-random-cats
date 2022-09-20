import { useContext } from "react";

import {
  SignUpContextData,
  SignUpErrorPayload,
  SignUpValues,
} from "./interfaces/SignUpContextData";

import { SignUpContext } from "./SignUpContext";

export type UseSignUpWitthField<T extends keyof SignUpValues> = {
  value: SignUpValues[T];
  error: SignUpErrorPayload[T];
  setValue: (value: SignUpValues[T]) => void;
  setError: (error?: SignUpErrorPayload[T]) => void;
};

export function useSignUp<T extends keyof SignUpValues>(
  field: T
): UseSignUpWitthField<T>;
export function useSignUp(field?: undefined): SignUpContextData;
export function useSignUp<T extends keyof SignUpValues>(
  field?: T
): UseSignUpWitthField<T> | SignUpContextData {
  const signUpContext = useContext(SignUpContext);

  if (signUpContext === undefined) {
    throw new Error(
      "You need use this hook inside Login/LoginProvider component"
    );
  }

  if (field) {
    return {
      value: signUpContext.values[field],
      error: signUpContext.errors[field],
      setValue: (value: SignUpValues[T]) =>
        signUpContext.setValue(field, value),
      setError: signUpContext.setError.bind(null, field),
    };
  }

  return signUpContext;
}
