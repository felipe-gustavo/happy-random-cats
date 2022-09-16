export interface LoginErrorPayload {
  email?: string;
  password?: string;
}

export interface LoginContextData {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  setErrors: (errors: LoginErrorPayload) => void;
  errors: LoginErrorPayload;
}
