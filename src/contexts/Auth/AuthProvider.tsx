import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useCookies } from "react-cookie";

import { AuthContext } from "./AuthContext";
import { UserData } from "./interfaces/AuthContextData";

import { useLoading } from "../Loading";

import { GetUserService } from "@/services/get-user.service";

async function getUserByToken(token: string): Promise<UserData> {
  const userFound = await GetUserService.exec(token);
  return {
    token,
    email: userFound.email,
    firstName: userFound.firstName,
    lastName: userFound.lastName,
  };
}

export function AuthProvider({
  children,
}: PropsWithChildren<Record<string | number, unknown>>) {
  const [user, setUser] = useState<UserData>();
  const [{ access_token: accessToken }, setCookies, removeCookies] = useCookies(
    ["access_token"]
  );
  const { setIsLoading } = useLoading("AUTH");

  const setUserToken = useCallback(
    (token?: string) => {
      setCookies("access_token", token);
    },
    [setCookies]
  );

  const logoutCurrentUser = useCallback(() => {
    removeCookies("access_token");
    setUser(undefined);
  }, [removeCookies]);

  useEffect(() => {
    async function getCurrentUser() {
      if (!accessToken) return;
      try {
        setIsLoading(true);
        setUser(await getUserByToken(accessToken));
      } catch {
        removeCookies("access_token");
      } finally {
        setIsLoading(false);
      }
    }
    getCurrentUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken]);

  const values = useMemo(
    () => ({
      user,
      setUserToken,
      logoutCurrentUser,
    }),
    [user, setUserToken, logoutCurrentUser]
  );

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}
