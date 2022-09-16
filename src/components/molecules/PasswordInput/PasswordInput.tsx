import { TextField } from "@mui/material";

import { TEXT_FIELD_TYPE } from "@/constants/UI";
import { useLogin } from "@/contexts/Login";

type PasswordInputProps = {
  className?: string;
};

export function PasswordInput({ className }: PasswordInputProps) {
  const { password, errors, setPassword, setErrors } = useLogin();

  const handlerChange = (
    ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (errors.password) {
      setErrors({ ...errors, password: undefined });
    }
    setPassword(ev.currentTarget.value);
  };

  return (
    <TextField
      fullWidth
      id="password"
      name="password"
      label="Password"
      type="password"
      className={className}
      onChange={handlerChange}
      variant={TEXT_FIELD_TYPE}
      error={!!errors.password}
      value={password}
      helperText={errors.password}
    />
  );
}

PasswordInput.defaultProps = {
  className: PasswordInput,
};
