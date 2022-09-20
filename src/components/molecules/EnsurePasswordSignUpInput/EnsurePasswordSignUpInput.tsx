import { useTranslation } from "react-i18next";

import { PasswordInput } from "@/components/atoms/PasswordInput";
import { TEXT_FIELD_TYPE } from "@/config/constants";
import { useLoading } from "@/contexts/Loading";
import { useSignUp } from "@/contexts/SignUp";

export type EnsurePasswordSignUpInputProps = {
  className?: string;
};

export function EnsurePasswordSignUpInput({
  className,
}: EnsurePasswordSignUpInputProps) {
  const { t } = useTranslation();
  const { value: password } = useSignUp("password");
  const { error, setValue, setError } = useSignUp("ensurePassword");
  const { loadingState } = useLoading("SIGN_UP");

  const handleChange = (
    ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (!ev.currentTarget.value) {
      setError();
      return;
    }

    if (ev.currentTarget.value === password) {
      setValue(true);
      setError();
      return;
    }
    setValue(false);
    setError(t("sign_up.errors.password_not_match"));
  };

  return (
    <PasswordInput
      id="ensurePassword"
      name="ensurePassword"
      label={t("sign_up.inputs.ensurePassword")}
      className={className}
      error={!!error}
      disabled={loadingState}
      onChange={handleChange}
      variant={TEXT_FIELD_TYPE}
      helperText={error}
    />
  );
}

EnsurePasswordSignUpInput.defaultProps = {
  className: undefined,
};
