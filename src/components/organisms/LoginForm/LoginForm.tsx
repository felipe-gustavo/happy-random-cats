import { Paper, Typography } from "@mui/material";

import { createRef } from "react";

import {
  LoginFormContainer,
  InputsContainer,
  ButtonContainer,
} from "./LoginForm.style";

import {
  ButtonSignIn,
  ButtonSignInRef,
} from "@/components/molecules/ButtonSignIn";
import { EmailInput } from "@/components/molecules/EmailInput";
import { PasswordInput } from "@/components/molecules/PasswordInput";

export function LoginForm() {
  const buttonSignRef = createRef<ButtonSignInRef>();

  const handlerForm = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    await buttonSignRef.current?.doLogin();
  };

  return (
    <LoginFormContainer>
      <Paper
        elevation={8}
        className="form-paper"
        component="form"
        onSubmit={handlerForm}
      >
        <Typography className="login-title" variant="h4">
          Sign in
        </Typography>
        <InputsContainer>
          <EmailInput className="login-input" />
          <PasswordInput className="login-input" />
        </InputsContainer>
        <ButtonContainer>
          <ButtonSignIn />
        </ButtonContainer>
      </Paper>
    </LoginFormContainer>
  );
}
