import { LoadingButton } from "@mui/lab";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import { useLoading } from "@/contexts/Loading";
import { useSignUp } from "@/contexts/SignUp";

export function ButtonSignUp() {
  const { t } = useTranslation();
  const { values, errors } = useSignUp();
  const { loadingState } = useLoading("SIGN_UP");

  const disabled = useMemo(
    () =>
      Object.values(values).some((value) => !value) ||
      Object.values(errors).some((error) => error) ||
      loadingState,
    [values, errors, loadingState]
  );

  return (
    <LoadingButton
      size="large"
      type="submit"
      variant="contained"
      disabled={disabled}
      loading={loadingState}
    >
      {t("sign_up.buttons.sign_up")}
    </LoadingButton>
  );
}
