export const TEXT_FIELD_TYPE = "filled";

export const LOADING_SERVICES = {
  AUTH: Symbol("AUTH"),
  LOGIN: Symbol("LOGIN"),
  SIGN_UP: Symbol("SIGN_UP"),
};

export const JWT_SECRET = new TextEncoder().encode("SOME_SECRET_TOKEN");
