import { Oldenburg_400Regular } from "@expo-google-fonts/oldenburg";
import { useFonts, WorkSans_400Regular, WorkSans_500Medium, WorkSans_600SemiBold, WorkSans_700Bold } from "@expo-google-fonts/work-sans";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import Toast from "react-native-toast-message";
import { CustomToast } from "../components/ui/Toast";
import MainRoutes from "../routes";
import { AuthProvider } from "../contexts/AuthContext";

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
      <AuthProvider>
        <MainRoutes />
      </AuthProvider>

      <Toast
        config={{
          success: CustomToast.success,
          error: CustomToast.error,
          warning: CustomToast.warning,
          info: CustomToast.info,
        }}
        visibilityTime={1500}
        autoHide
        position="top"
      />

    </>
  );
}
