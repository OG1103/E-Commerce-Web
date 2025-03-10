import { createContext, useContext } from "react";

export type TAuthContext = {
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  user: TUser | null;
  refresh: () => void;
};

export type TUser = {
  name: string;
  email: string;
  verified: boolean;
  role: "User" | "Admin";
  cart: object | undefined;
};

export const AuthContext = createContext<TAuthContext>({} as TAuthContext);

export function useAuthContext() {
  return useContext(AuthContext);
}
