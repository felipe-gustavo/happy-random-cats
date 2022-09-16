import { BrowserRouter, Switch, Route } from "react-router-dom";

import { ForgotPasswordPage } from "@/pages/ForgotPassword/ForgotPasswordPage";
import { LoginPage } from "@/pages/Login/LoginPage";
import { RegisterPage } from "@/pages/Register/RegisterPage";

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={["/login", "/"]} component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/forgot-password" component={ForgotPasswordPage} />
      </Switch>
    </BrowserRouter>
  );
}
