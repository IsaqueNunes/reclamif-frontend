import { ReactNode, createContext, useContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";

type UserContextType = {
  user: any;
  login: (data: any) => void;
  logout: () => void;
};

const AuthContext = createContext<UserContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>();
  const navigate = useNavigate();

  // call this function when you want to authenticate the user
  const login = async (data: string) => {
    console.log(data)
    setUser(data);
    navigate("/");
  };

  // call this function to sign out logged in user
  const logout = () => {
    setUser(null);
    navigate("/", { replace: true });
  };

  const value = useMemo(
    () => ({
      user, login, logout
    }),
    [user]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) throw new Error("useAuth should be used inside AuthProvider");

  return context;
};
