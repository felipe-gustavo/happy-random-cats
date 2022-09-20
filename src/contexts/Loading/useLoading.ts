import { useContext } from "react";

import {
  LoadingContextData,
  LoadingServices,
} from "./interfaces/LoadingContextData";

import { LoadingContext } from "./LoadingContext";

import { LOADING_SERVICES } from "@/config/constants";

export type LoadingContextDataForOneService = {
  loadingState: boolean;
  setIsLoading: (state: boolean) => void;
};

export function useLoading<T extends keyof LoadingServices>(
  service: T
): LoadingContextDataForOneService;
export function useLoading(service?: undefined): LoadingContextData;
export function useLoading<T extends keyof LoadingServices>(
  service?: T
): LoadingContextData | LoadingContextDataForOneService {
  const loadingContext = useContext(LoadingContext);

  if (loadingContext === undefined) {
    throw new Error(
      "You need use this hook inside Loading/LoadingProvider component"
    );
  }

  if (!service) {
    return loadingContext;
  }

  return {
    loadingState: loadingContext.loadingStates[LOADING_SERVICES[service]],
    setIsLoading: loadingContext.setIsLoading.bind(
      null,
      LOADING_SERVICES[service]
    ),
  };
}
