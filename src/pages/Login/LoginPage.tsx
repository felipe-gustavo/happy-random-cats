import { Redirect } from "react-router-dom";

import { LoginPageContainer } from "./LoginPage.style";

import { LoginForm } from "@/components/organisms/LoginForm";
import { useAuth } from "@/contexts/Auth/useAuth";

export function LoginPage() {
  const { user } = useAuth();

  if (user) {
    return <Redirect to="home" />;
  }

  return (
    <LoginPageContainer>
      <LoginForm />
    </LoginPageContainer>
  );
}
