import { Paper, Typography } from "@mui/material";

import { useEffect } from "react";

import { useHistory } from "react-router-dom";

import {
  SignUpFormContainer,
  InputsContainer,
  ButtonContainer,
} from "./SignUpForm.style";

import { ButtonSignUp } from "@/components/molecules/ButtonSignUp";
import { EmailSignUpInput } from "@/components/molecules/EmailSignUpInput";
import { EnsurePasswordSignUpInput } from "@/components/molecules/EnsurePasswordSignUpInput";
import { FirstNameSignUpInput } from "@/components/molecules/FirstNameSignUpInput";
import { LastNameSignUpInput } from "@/components/molecules/LastNameSignUpInput";
import { PasswordSignUpInput } from "@/components/molecules/PasswordSignUpInput";
import { useSignUp } from "@/contexts/SignUp";
import { useSignUpService } from "@/hooks/useSignUpService";

export function SignUpForm() {
  const { setValue, value: email } = useSignUp("email");
  const [signUp] = useSignUpService();
  const history = useHistory();

  const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (await signUp()) {
      history.push(`/login?email=${encodeURI(email)}`);
    }
  };

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const emailTosignUp = urlSearchParams.get("email");
    if (emailTosignUp) {
      setValue(emailTosignUp);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SignUpFormContainer>
      <Paper
        elevation={8}
        className="form-paper"
        component="form"
        onSubmit={handleSubmit}
      >
        <Typography className="signup-title" variant="h4">
          Sign up
        </Typography>
        <InputsContainer>
          <FirstNameSignUpInput className="signup-input" />
          <LastNameSignUpInput className="signup-input" />
          <EmailSignUpInput className="signup-input email" />
          <PasswordSignUpInput className="signup-input" />
          <EnsurePasswordSignUpInput className="signup-input" />
        </InputsContainer>
        <ButtonContainer>
          <ButtonSignUp />
        </ButtonContainer>
      </Paper>
    </SignUpFormContainer>
  );
}
