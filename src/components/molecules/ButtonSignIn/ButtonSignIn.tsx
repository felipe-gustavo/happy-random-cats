import { LoadingButton } from "@mui/lab";

import { forwardRef, useMemo } from "react";

import { useTranslation } from "react-i18next";

import { useLoading } from "@/contexts/Loading";
import { useLogin } from "@/contexts/Login";

function ButtonSignInComponent() {
  const { t } = useTranslation();
  const { email, password, errors } = useLogin();
  const { loadingState } = useLoading("LOGIN");

  const disabled = useMemo(
    () =>
      !email ||
      !password ||
      loadingState ||
      !!errors.email ||
      !!errors.password,
    [email, password, loadingState, errors]
  );

  return (
    <LoadingButton
      size="large"
      fullWidth
      disabled={disabled}
      type="submit"
      variant="contained"
      loading={loadingState}
    >
      {t("login.buttons.sign_in")}
    </LoadingButton>
  );
}

export const ButtonSignIn = forwardRef(ButtonSignInComponent);
