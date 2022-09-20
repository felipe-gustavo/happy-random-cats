import { Paper, Typography } from "@mui/material";

import { useEffect } from "react";

import { useHistory } from "react-router-dom";

import {
  LoginFormContainer,
  InputsContainer,
  ButtonContainer,
} from "./LoginForm.style";

import { ButtonSignIn } from "@/components/molecules/ButtonSignIn";
import { EmailInput } from "@/components/molecules/EmailInput";
import { PasswordLoginInput } from "@/components/molecules/PasswordLoginInput";
import { SignUpLink } from "@/components/molecules/SignUpLink";
import { useLogin } from "@/contexts/Login";
import { useDoLoginService } from "@/hooks/useDoLoginService";

export function LoginForm() {
  const { setEmail } = useLogin();
  const [doLogin] = useDoLoginService();
  const history = useHistory();

  const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (await doLogin()) {
      history.push("/home");
    }
  };

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const email = urlSearchParams.get("email");
    if (email) {
      setEmail(email);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LoginFormContainer>
      <Paper
        elevation={8}
        className="form-paper"
        component="form"
        onSubmit={handleSubmit}
      >
        <Typography className="login-title" variant="h4">
          Sign in
        </Typography>
        <InputsContainer>
          <EmailInput className="login-input" />
          <PasswordLoginInput className="login-input" />
        </InputsContainer>
        <SignUpLink />
        <ButtonContainer>
          <ButtonSignIn />
        </ButtonContainer>
      </Paper>
    </LoginFormContainer>
  );
}
