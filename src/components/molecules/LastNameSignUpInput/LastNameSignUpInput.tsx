import { TextField } from "@mui/material";

import { useTranslation } from "react-i18next";

import { TEXT_FIELD_TYPE } from "@/config/constants";
import { useLoading } from "@/contexts/Loading";
import { useSignUp } from "@/contexts/SignUp";

export type LastNameSignUpInputProps = {
  className?: string;
};

export function LastNameSignUpInput({ className }: LastNameSignUpInputProps) {
  const { t } = useTranslation();
  const { value, error, setValue, setError } = useSignUp("lastName");
  const { loadingState } = useLoading("SIGN_UP");

  const handleChange = (
    ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (error) setError();
    setValue(ev.currentTarget.value);
  };

  return (
    <TextField
      id="lastName"
      name="lastName"
      label={t("sign_up.inputs.lastName")}
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

LastNameSignUpInput.defaultProps = {
  className: undefined,
};
