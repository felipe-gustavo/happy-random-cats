import { CircularProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Redirect, Route, useLocation } from "react-router-dom";

import { LoadingContainer } from "./RouteAuthed.styled";

import { useAuth } from "@/contexts/Auth/useAuth";
import { useLoading } from "@/contexts/Loading";

type RouteProps = typeof Route extends abstract new (
  props: infer P,
  ...rest: unknown[]
) => unknown
  ? P
  : Route extends (props: infer T, ...rest: unknown[]) => unknown
  ? T
  : never;

export function RouteAuthed(props: RouteProps) {
  const { user } = useAuth();
  const [once, setOnce] = useState(false);
  const { t } = useTranslation();
  const { loadingState } = useLoading("AUTH");
  useLocation();

  useEffect(() => {
    setOnce(true);
  }, []);

  if (loadingState && !user) {
    return (
      <LoadingContainer>
        <Typography variant="h6">{t("auth.verifying")}</Typography>
        <CircularProgress size={80} />
      </LoadingContainer>
    );
  }

  if (once && !user) {
    console.log("passouaqui");
    return <Redirect to="login" />;
  }

  return <Route {...props} />;
}
