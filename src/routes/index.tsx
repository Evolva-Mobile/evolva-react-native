import { NavigationContainer } from "@react-navigation/native";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

export default function MainRoutes() {
  const { user, loading } = useContext(AuthContext);

  if (loading) return null;

  return (
    <>
      {user ? <AppRoutes /> : <AuthRoutes />}
    </>
  );
}
