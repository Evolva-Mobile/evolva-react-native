import { createNativeStackNavigator } from "@react-navigation/native-stack";

import RegisterScreen from "../screens/auth/create-account";
import ForgotPassword from "../screens/auth/forgot-password";
import PageAccount from "../screens/auth/page-account";
import PageInitial from "../screens/page-initial";
import LoginScreen from "../screens/auth/login";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

export default function AuthRoutes() {
    const [showInitial, setShowInitial] = useState<boolean | null>(null);

    useEffect(() => {
        const load = async () => {
            const seen = await AsyncStorage.getItem("@onboarding_seen");
            setShowInitial(!seen);
        };

        load();
    }, []);

    if (showInitial === null) return null;

    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: '#FFF' }
        }}>
            {/* Pagina Inicial */}
            {showInitial && (
                <Stack.Screen name="PageInitial" component={PageInitial} />
            )}
    
            {/* Auth */}
            <Stack.Screen name="PageAccount" component={PageAccount} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name='Register' component={RegisterScreen} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />

        </Stack.Navigator>
    );
}
