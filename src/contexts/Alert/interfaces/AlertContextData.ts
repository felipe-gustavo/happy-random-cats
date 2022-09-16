import { AlertColor, AlertProps as MuiAlertProps } from "@mui/material";
import { SnackbarOrigin } from "notistack";

export interface AlertProps {
  open: boolean;
  severity: AlertColor;
  message: string | React.ReactNode;
  origin?: SnackbarOrigin;
  autoHideDuration?: number | false;
  variant?: MuiAlertProps["variant"];
}

export interface AlertContextData {
  alertProps: AlertProps;
  setAlert: (newAlert: AlertProps) => void;
  openAlert: (newAlert: Omit<AlertProps, "open">) => void;
}
