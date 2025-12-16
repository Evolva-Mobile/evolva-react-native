import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GetRequest } from "../config/api-request/GetRequest";
import { USER } from "../config/api-routes/user";

type userProps = {
  id: number;
  name: string;
  email: string;
  avatar_url: string | null;
  coins: number;
  email_verified_at: string | null;
  created_at: string;
  updated_at: string;
  xp: number;
  level: number;
}
type AuthContextProps = {
  user: userProps | null;
  loading: boolean;
  login: (userData: any) => Promise<void>;
  logout: () => Promise<void>;
  reloadUser: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  loading: true,
  login: async () => {},
  logout: async () => {},
  reloadUser: async () => {},
});


export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<userProps | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorage() {
      const saved = await AsyncStorage.getItem("@user");
      if (saved) setUser(JSON.parse(saved));
      setLoading(false);
    }
    loadStorage();
  }, []);

  async function persistUser(userData: userProps | null) {
    if (userData) {
      await AsyncStorage.setItem("@user", JSON.stringify(userData));
    } else {
      await AsyncStorage.removeItem("@user");
    }
  }

  async function login(userData: userProps) {
    setUser(userData);
    await persistUser(userData);
  }

  async function logout() {
    setUser(null);
    await persistUser(null);
  }

  // 🔥 MÉTODO DE RELOAD
  async function reloadUser() {
    try {
      const response = await GetRequest(USER.GET_USER());
      if (response) {
        setUser(response);
        await persistUser(response);
      }
    } catch (error) {
      console.log("Erro ao recarregar usuário:", error);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
        reloadUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

