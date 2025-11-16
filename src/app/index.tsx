import { useEffect } from "react";
import AppRoutes from "../routes";
import { useFonts, WorkSans_400Regular, WorkSans_500Medium, WorkSans_700Bold, WorkSans_600SemiBold } from "@expo-google-fonts/work-sans";
import { Oldenburg_400Regular } from "@expo-google-fonts/oldenburg";
import * as SplashScreen from "expo-splash-screen";
import ToastManager  from "toastify-react-native";


export default function App() {
  const [fontsLoaded] = useFonts({
    WorkSans_400Regular,
    WorkSans_500Medium,
    WorkSans_600SemiBold,
    WorkSans_700Bold,
    Oldenburg_400Regular,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <>
      <AppRoutes />
      <ToastManager />
    </>
  );
}
