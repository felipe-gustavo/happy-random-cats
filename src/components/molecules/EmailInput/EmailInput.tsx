import { TextField } from "@mui/material";

import { useTranslation } from "react-i18next";

import { TEXT_FIELD_TYPE } from "@/config/constants";
import { useLoading } from "@/contexts/Loading";
import { useLogin } from "@/contexts/Login";
import { validateEmail } from "@/utils/validateEmail";

export type EmailInputProps = {
  className?: string;
};

export function EmailInput({ className }: EmailInputProps) {
  const { t } = useTranslation();
  const { email, errors, setEmail, setErrors } = useLogin();
  const { loadingState } = useLoading("LOGIN");

  const handleChange = (
    ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (errors.email) {
      setErrors({ ...errors, email: undefined });
    }
    setEmail(ev.currentTarget.value);
  };

  const handleOnBlur = (
    ev: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
  ) => {
    if (validateEmail(ev.currentTarget.value)) return;
    setErrors({ ...errors, email: t("shared.errors.invalid_email") });
  };

  return (
    <TextField
      fullWidth
      id="email"
      name="email"
      type="email"
      label={t("login.inputs.email")}
      value={email}
      className={className}
      error={!!errors.email}
      disabled={loadingState}
      onBlur={handleOnBlur}
      onChange={handleChange}
      variant={TEXT_FIELD_TYPE}
      helperText={
        errors.email && (
          // eslint-disable-next-line react/no-danger
          <span dangerouslySetInnerHTML={{ __html: errors.email }} />
        )
      }
    />
  );
}

EmailInput.defaultProps = {
  className: undefined,
};
