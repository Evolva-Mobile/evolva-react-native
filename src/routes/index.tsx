import { NavigationContainer } from "@react-navigation/native";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;

  Home: undefined;
  Journeys: undefined;
  CreateJourney: undefined;

  Journey: {
    journeyId: string;
  };

  Settings: undefined;
  EditUser: undefined;
  Profile: undefined;
};

export default function MainRoutes() {
  const { user, loading } = useContext(AuthContext);

  if (loading) return null;

  return (
    <>
      {user ? <AppRoutes /> : <AuthRoutes />}
    </>
  );
}
