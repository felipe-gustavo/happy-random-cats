import { useTranslation } from "react-i18next";

import { PasswordInput } from "@/components/atoms/PasswordInput";
import { TEXT_FIELD_TYPE } from "@/config/constants";
import { useLoading } from "@/contexts/Loading";
import { useSignUp } from "@/contexts/SignUp";

export type PasswordSignUpInputProps = {
  className?: string;
};

export function PasswordSignUpInput({ className }: PasswordSignUpInputProps) {
  const { t } = useTranslation();
  const { value, error, setValue, setError } = useSignUp("password");
  const { loadingState } = useLoading("SIGN_UP");

  const handleChange = (
    ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (error) setError();
    setValue(ev.currentTarget.value);
  };

  return (
    <PasswordInput
      id="password"
      name="password"
      label={t("sign_up.inputs.password")}
      value={value}
      className={className}
      error={!!error}
      disabled={loadingState}
      onChange={handleChange}
      variant={TEXT_FIELD_TYPE}
      helperText={error}
    />
  );
}

PasswordSignUpInput.defaultProps = {
  className: undefined,
};
