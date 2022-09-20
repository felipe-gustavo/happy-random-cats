export interface SignUpErrorPayload {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  ensurePassword?: string;
}

export interface SignUpValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  ensurePassword: boolean;
}

export interface SignUpContextData {
  values: SignUpValues;
  setValue: <T extends keyof SignUpValues>(
    field: T,
    value: SignUpValues[T]
  ) => void;
  setError: <T extends keyof SignUpErrorPayload>(
    field: T,
    error?: SignUpErrorPayload[T]
  ) => void;
  errors: SignUpErrorPayload;
}
