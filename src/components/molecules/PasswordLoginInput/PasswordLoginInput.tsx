import { useTranslation } from "react-i18next";

import { PasswordInput } from "@/components/atoms/PasswordInput";
import { TEXT_FIELD_TYPE } from "@/config/constants";
import { useLoading } from "@/contexts/Loading";
import { useLogin } from "@/contexts/Login";

type PasswordLoginInputProps = {
  className?: string;
};

export function PasswordLoginInput({ className }: PasswordLoginInputProps) {
  const { t } = useTranslation();
  const { password, errors, setPassword, setErrors } = useLogin();
  const { loadingState } = useLoading("LOGIN");

  const handleChange = (
    ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (errors.password) {
      setErrors({ ...errors, password: undefined });
    }
    setPassword(ev.currentTarget.value);
  };

  return (
    <PasswordInput
      fullWidth
      id="password"
      name="password"
      label={t("login.inputs.password")}
      value={password}
      className={className}
      disabled={loadingState}
      onChange={handleChange}
      variant={TEXT_FIELD_TYPE}
      error={!!errors.password}
      helperText={errors.password}
    />
  );
}

PasswordLoginInput.defaultProps = {
  className: PasswordLoginInput,
};
