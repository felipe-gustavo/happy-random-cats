import { Alert, Snackbar, SnackbarCloseReason } from "@mui/material";

import { SyntheticEvent } from "react";

import { useAlert } from "@/contexts/Alert";

export function SimpleSnackAlert() {
  const { alertProps, setAlert } = useAlert();
  const {
    open,
    message,
    severity,
    autoHideDuration,
    origin,
    variant,
    enforceCloseByXButton,
  } = alertProps;

  const handleCloseAlert = () => {
    setAlert({
      ...alertProps,
      open: false,
    });
  };

  const handleClose = (
    ev: Event | SyntheticEvent<Element, Event>,
    reason: SnackbarCloseReason
  ) => {
    if (
      enforceCloseByXButton &&
      ["escapeKeyDown", "clickaway"].includes(reason)
    ) {
      ev.preventDefault();
      return;
    }
    handleCloseAlert();
  };

  return (
    <Snackbar
      open={open}
      anchorOrigin={origin || { horizontal: "center", vertical: "top" }}
      autoHideDuration={
        autoHideDuration === false ? undefined : autoHideDuration || 6000
      }
      onClose={handleClose}
    >
      <Alert
        elevation={6}
        variant={variant || "filled"}
        onClose={handleCloseAlert}
        severity={severity}
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}
