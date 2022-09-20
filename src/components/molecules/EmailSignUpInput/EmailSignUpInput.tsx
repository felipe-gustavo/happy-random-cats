import { TextField } from "@mui/material";

import { useTranslation } from "react-i18next";

import { TEXT_FIELD_TYPE } from "@/config/constants";
import { useLoading } from "@/contexts/Loading";
import { useSignUp } from "@/contexts/SignUp";
import { validateEmail } from "@/utils/validateEmail";

export type EmailSignUpInputProps = {
  className?: string;
};

export function EmailSignUpInput({ className }: EmailSignUpInputProps) {
  const { t } = useTranslation();
  const { value, error, setValue, setError } = useSignUp("email");
  const { loadingState } = useLoading("SIGN_UP");

  const handleChange = (
    ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (error) setError();
    setValue(ev.currentTarget.value);
  };

  const handleOnBlur = (
    ev: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
  ) => {
    if (validateEmail(ev.currentTarget.value)) return;
    setError(t("shared.errors.invalid_email"));
  };

  return (
    <TextField
      id="email"
      name="email"
      type="email"
      label={t("sign_up.inputs.email")}
      value={value}
      className={className}
      error={!!error}
      disabled={loadingState}
      onBlur={handleOnBlur}
      onChange={handleChange}
      variant={TEXT_FIELD_TYPE}
      helperText={
        error && (
          <span
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: error,
            }}
          />
        )
      }
    />
  );
}

EmailSignUpInput.defaultProps = {
  className: undefined,
};
