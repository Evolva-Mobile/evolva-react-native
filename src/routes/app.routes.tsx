import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingsUserScreen from "../screens/user/settings";
import EditUserScreen from "../screens/user/edit-account";
import ProfileScreen from "../screens/user/profile";
import MainJourney from "../screens/journey/main-journey";
import CreateJourney from "../screens/journey/create-journey";
import Home from "../screens/home";
import JourneysScreen from "../screens/journeys";

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                contentStyle: { backgroundColor: '#FFF' }
            }}>
            {/* User */}
            <Stack.Screen name='Settings' component={SettingsUserScreen} />
            <Stack.Screen name='EditUser' component={EditUserScreen} />
            <Stack.Screen name='Profile' component={ProfileScreen} />

            {/* Home */}
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Journeys' component={JourneysScreen} />

            {/* Jornada */}
            <Stack.Screen name="CreateJourney" component={CreateJourney} />
            <Stack.Screen name="Journey" component={MainJourney} />
        </Stack.Navigator>
    );
}
