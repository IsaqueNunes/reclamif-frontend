import { ReactNode, createContext, useState } from "react";
import type { User } from "../utils/types/user"
import { LoginForm } from "../utils/validation";
import axios from "axios";

type UserContextType = {
    user: User | null;
    login: (user: LoginForm) => void;
    logout: () => void;
}

export const UserContext = createContext<UserContextType | null>(null);

type Props = {
    children: ReactNode
}

export default function UserContextProvider({ children }: Props) {
    const [user, setUser] = useState<User | null>(null);

    async function login(data: LoginForm) {
      const response = await axios.post<User | null>('http://localhost:3000/login', {
			...data
      });

      setUser(response.data);
      if (user) {
        localStorage.setItem('userId', user.id);
        localStorage.setItem('name', user.name);
        localStorage.setItem('email', user.email);
      }
    }

    function logout() {
      setUser(null);
      localStorage.removeItem('userId');
      localStorage.removeItem('name');
      localStorage.removeItem('email');
    }

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
