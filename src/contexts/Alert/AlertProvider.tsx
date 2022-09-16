import { PropsWithChildren, useCallback, useMemo, useState } from "react";

import { AlertContext } from "./AlertContext";
import { AlertProps } from "./interfaces/AlertContextData";

export function AlertProvider({
  children,
}: PropsWithChildren<Record<string | number, unknown>>) {
  const [alertProps, setAlertProps] = useState<AlertProps>({
    open: false,
    message: "",
    severity: "success",
  });

  const handleSetAlert = useCallback(
    (newAlert: AlertProps) => {
      setAlertProps(newAlert);
    },
    [setAlertProps]
  );

  const handleOpenAlert = useCallback(
    (newAlert: Omit<AlertProps, "open">) => {
      setAlertProps({ ...newAlert, open: true });
    },
    [setAlertProps]
  );

  const values = useMemo(
    () => ({
      alertProps,
      setAlert: handleSetAlert,
      openAlert: handleOpenAlert,
    }),
    [alertProps, handleSetAlert, handleOpenAlert]
  );

  return (
    <AlertContext.Provider value={values}>{children}</AlertContext.Provider>
  );
}
