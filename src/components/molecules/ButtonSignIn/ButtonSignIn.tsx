import { LoadingButton } from "@mui/lab";

import { ForwardedRef, forwardRef, useImperativeHandle, useMemo } from "react";

import { useLogin } from "@/contexts/Login";
import { useLoginServices } from "@/hooks/useLoginServices";

export type ButtonSignInProps = Record<string | number, unknown>;

export type ButtonSignInRef = {
  doLogin: () => Promise<void>;
};

function ButtonSignInComponent(
  props: ButtonSignInProps,
  ref: ForwardedRef<ButtonSignInRef>
) {
  const { email, password } = useLogin();
  const { doLogin, isFetching } = useLoginServices();

  const disabled = useMemo(
    () => !email || !password || isFetching,
    [email, password, isFetching]
  );

  const handleClick = async (
    ev: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    await doLogin();
    ev.preventDefault();
  };

  useImperativeHandle(
    ref,
    () => ({
      doLogin: async () => {
        if (!disabled) await doLogin();
      },
    }),
    [disabled, doLogin]
  );

  return (
    <LoadingButton
      size="large"
      fullWidth
      disabled={disabled}
      type="submit"
      variant="contained"
      onClick={handleClick}
      loading={isFetching}
    >
      Sign In
    </LoadingButton>
  );
}

export const ButtonSignIn = forwardRef(ButtonSignInComponent);
