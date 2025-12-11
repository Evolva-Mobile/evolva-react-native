import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
};

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  loading: true,
  login: async () => { },
  logout: async () => { },
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Carregar login salvo
  useEffect(() => {
    async function loadStorage() {
      const saved = await AsyncStorage.getItem("@user");
      if (saved) setUser(JSON.parse(saved));
      setLoading(false);
    }
    loadStorage();
  }, []);

  async function login(userData: any) {
    setUser(userData);
    await AsyncStorage.setItem("@user", JSON.stringify(userData));
  }

  async function logout() {
    setUser(null);
    await AsyncStorage.removeItem("@user");
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
