import { createContext, ReactNode, useEffect, useState } from "react";
import Router from "next/router";
import { signInRequest } from "@/fake_services/auth";
import { setCookie } from "nookies";

type User = {
  name: string;
  email: string;
};

type SignInData = {
  email: string;
  password: string;
};

type AuthContextType = {
  isAuthenticated: boolean;
  user: User | null;
  signIn: (data: SignInData) => Promise<void>;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const isAuthenticated = !!user;

  async function signIn({ email, password }: SignInData) {
    const { token, user } = await signInRequest({ email, password });
    console.log("token", token)

    setCookie(undefined, "backoffice-token", token, {
      maxAge: 60 * 60 * 1, // 1 hour
      // utilizar a prop expires para definir a validade do cookie
    });

    setUser(user);
    Router.push("/dashboard");
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
