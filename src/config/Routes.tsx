import { BrowserRouter, Switch, Route } from "react-router-dom";

import { RouteAuthed } from "@/components/organisms/RouteAuthed";
import { Home } from "@/pages/Home";
import { LoginPage } from "@/pages/Login";
import { SignUpPage } from "@/pages/SignUp";

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={["/login", "signin"]} component={LoginPage} />
        <Route path="/signup" component={SignUpPage} />
        <RouteAuthed path={["/", "/home"]} component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
