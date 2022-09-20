import { PropsWithChildren, useCallback, useMemo, useState } from "react";

import { ServicesLoadingState } from "./interfaces/LoadingContextData";
import { LoadingContext } from "./LoadingContext";

import { LOADING_SERVICES } from "@/config/constants";

const getInitialLoadingState = (): ServicesLoadingState =>
  Object.values(LOADING_SERVICES).reduce(
    (prev, service) => ({
      [service]: false,
      ...prev,
    }),
    {} as ServicesLoadingState
  );

export function LoadingProvider({
  children,
}: PropsWithChildren<Record<string | number, unknown>>) {
  const [loadingStates, setLoadingStates] = useState(getInitialLoadingState);

  const setIsLoading = useCallback(
    (service: keyof ServicesLoadingState, state: boolean) => {
      setLoadingStates({
        ...loadingStates,
        [service]: state,
      });
    },
    [setLoadingStates, loadingStates]
  );

  const values = useMemo(
    () => ({
      loadingStates,
      setIsLoading,
    }),
    [loadingStates, setIsLoading]
  );
  return (
    <LoadingContext.Provider value={values}>{children}</LoadingContext.Provider>
  );
}
