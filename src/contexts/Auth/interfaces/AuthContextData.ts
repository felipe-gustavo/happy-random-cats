export interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  token: string;
}

export interface AuthContextData {
  user?: UserData;
  setUserToken: (token: string) => void;
  logoutCurrentUser: () => void;
}
