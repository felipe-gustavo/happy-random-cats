import { TextField } from "@mui/material";

import { useTranslation } from "react-i18next";

import { TEXT_FIELD_TYPE } from "@/config/constants";
import { useLoading } from "@/contexts/Loading";
import { useSignUp } from "@/contexts/SignUp";

export type FirstNameSignUpInputProps = {
  className?: string;
};

export function FirstNameSignUpInput({ className }: FirstNameSignUpInputProps) {
  const { t } = useTranslation();
  const { value, error, setValue, setError } = useSignUp("firstName");
  const { loadingState } = useLoading("SIGN_UP");

  const handleChange = (
    ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (error) setError();
    setValue(ev.currentTarget.value);
  };

  return (
    <TextField
      id="firstName"
      name="firstName"
      label={t("sign_up.inputs.firstName")}
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

FirstNameSignUpInput.defaultProps = {
  className: undefined,
};
