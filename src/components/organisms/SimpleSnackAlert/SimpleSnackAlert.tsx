import { Alert, Snackbar } from "@mui/material";

import { useAlert } from "@/contexts/Alert";

export function SimpleSnackAlert() {
  const { alertProps, setAlert } = useAlert();
  const { open, message, severity, autoHideDuration, origin, variant } =
    alertProps;

  const handleClose = () => {
    setAlert({
      ...alertProps,
      open: false,
    });
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
        onClose={handleClose}
        severity={severity}
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}
