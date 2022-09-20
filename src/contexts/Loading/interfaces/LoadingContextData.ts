import { LOADING_SERVICES } from "@/config/constants";

export type LoadingServices = typeof LOADING_SERVICES;

export type ServicesLoadingState = {
  [K in LoadingServices[keyof LoadingServices]]: boolean;
};

export interface LoadingContextData {
  loadingStates: ServicesLoadingState;
  setIsLoading: (service: keyof ServicesLoadingState, state: boolean) => void;
}
