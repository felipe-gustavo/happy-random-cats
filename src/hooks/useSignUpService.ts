import { useCallback } from "react";

import { useTranslation } from "react-i18next";

import { useAlert } from "@/contexts/Alert";
import { useLoading } from "@/contexts/Loading";

import { useSignUp } from "@/contexts/SignUp";
import { ApiError } from "@/errors/ApiError";

import { SignUpService } from "@/services/sign-up.service";

export function useSignUpService() {
  const { t } = useTranslation("apiErrors");
  const { setIsLoading } = useLoading("SIGN_UP");
  const { openAlert } = useAlert();
  const { values, setError } = useSignUp();

  const signUp = useCallback(async () => {
    setIsLoading(true);
    try {
      return await SignUpService.exec(values);
    } catch (error) {
      if (error instanceof ApiError) {
        if (error.code === t("sign_up.emailAlreadyExists.code")) {
          setError(
            "email",
            t("sign_up.emailAlreadyExists.message", {
              email: encodeURI(values.email),
            })
          );
          return null;
        }
      }
      openAlert({
        message: t("login.unknown.message"),
        severity: "error",
        autoHideDuration: false,
        enforceCloseByXButton: true,
      });
      return null;
    } finally {
      setIsLoading(false);
    }
  }, [values, openAlert, setIsLoading, t, setError]);

  return [signUp];
}
