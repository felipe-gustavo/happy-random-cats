import { useCallback } from "react";

import { useTranslation } from "react-i18next";

import { useAlert } from "@/contexts/Alert";
import { useAuth } from "@/contexts/Auth/useAuth";
import { useLoading } from "@/contexts/Loading";
import { useLogin } from "@/contexts/Login";

import { ApiError } from "@/errors/ApiError";
import { AuthService } from "@/services/auth.service";

export function useDoLoginService() {
  const { t } = useTranslation("apiErrors");
  const { setUserToken } = useAuth();
  const { setIsLoading } = useLoading("LOGIN");
  const { openAlert } = useAlert();
  const { email, password, setErrors } = useLogin();

  const doLogin = useCallback(async () => {
    setIsLoading(true);
    try {
      const { token } = await AuthService.exec(email, password);
      setUserToken(token);
      return token;
    } catch (error) {
      if (error instanceof ApiError) {
        if (error.code === t("login.emailNotFound.code")) {
          setErrors({
            email: t("login.emailNotFound.message", {
              email: encodeURI(email),
            }),
          });
          return null;
        }

        if (error.code === t("login.invalidPassword.code")) {
          setErrors({
            password: t("login.invalidPassword.message"),
          });
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
  }, [email, password, openAlert, setIsLoading, setUserToken, t, setErrors]);

  return [doLogin];
}
