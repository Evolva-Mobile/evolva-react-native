import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PageInitial from "../screens/page-initial";
import SettingsUserScreen from "../screens/user/settings";
import EditUserScreen from "../screens/user/edit-account";
import ProfileScreen from "../screens/user/profile";
import MainJourney from "../screens/journey/main-journey";

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
    return (
        <Stack.Navigator 
        initialRouteName="Journey"
        screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: '#FFF' }
        }}>
            {/* User */}
            <Stack.Screen name='Settings' component={SettingsUserScreen} />
            <Stack.Screen name='EditUser' component={EditUserScreen} />
            <Stack.Screen name='Profile' component={ProfileScreen} />

            {/* Jornada */}
            <Stack.Screen name="Journey" component={MainJourney} />
        </Stack.Navigator>
    );
}
