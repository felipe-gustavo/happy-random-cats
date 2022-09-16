import { TextField } from "@mui/material";

import { TEXT_FIELD_TYPE } from "@/constants/UI";
import { useLogin } from "@/contexts/Login";

export type EmailInputProps = {
  className?: string;
};

export function EmailInput({ className }: EmailInputProps) {
  const { email, errors, setEmail, setErrors } = useLogin();

  const handlerChange = (
    ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (errors.password) {
      setErrors({ ...errors, email: undefined });
    }
    setEmail(ev.currentTarget.value);
  };

  return (
    <TextField
      fullWidth
      id="email"
      name="email"
      type="email"
      label="Email"
      className={className}
      onChange={handlerChange}
      variant={TEXT_FIELD_TYPE}
      error={!!errors.email}
      value={email}
      helperText={errors.email}
    />
  );
}

EmailInput.defaultProps = {
  className: undefined,
};
