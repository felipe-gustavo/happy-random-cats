import { useCallback, useState } from "react";

import { useAlert } from "@/contexts/Alert";
import { useLogin } from "@/contexts/Login";
import { FieldError } from "@/errors/FieldError";
import { doLoginService } from "@/services/login/do-login.service";

export function useLoginServices() {
  const [isFetching, setIsFetching] = useState(false);
  const [useId, setUserId] = useState<string>();

  const { openAlert } = useAlert();
  const { email, password, setErrors } = useLogin();

  const doLogin = useCallback(async () => {
    setErrors({});
    setIsFetching(true);
    try {
      const id = await doLoginService(email, password);
      setUserId(id);
    } catch (e) {
      if (e instanceof FieldError && ["email", "password"].includes(e.field)) {
        setErrors({ [e.field]: e.message });
        return;
      }

      openAlert({
        message: "Unknown error on try to login, try again later",
        severity: "error",
        autoHideDuration: false,
      });
    } finally {
      setIsFetching(false);
    }
  }, [email, password, setErrors, setIsFetching, openAlert]);

  return {
    useId,
    doLogin,
    isFetching,
  };
}
