import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

// Importando telas
import RegisterScreen from '../screens/auth/create-account';
import ForgotPassword from '../screens/auth/forgot-password';
import LoginScreen from '../screens/auth/login';
import PageAccount from '../screens/auth/page-account';
import HomeScreen from '../screens/home';
import JourneysScreen from '../screens/journeys';
import PageInitial from '../screens/page-initial';
import EditUserScreen from '../screens/user/edit-account';
import ProfileScreen from '../screens/user/profile';
import SettingsUserScreen from '../screens/user/settings';

// Definindo tipos das rotas
export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  Details: { itemId: number; otherParam?: string }; // com parâmetros
  PageInitial: undefined;
  Settings: undefined;
  EditUser: undefined;
  PageAccount: undefined;
  Profile: undefined;
  Home: undefined;
  Journeys: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppRoutes: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="PageInitial"
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: '#FFF' }
      }}>
      {/* Pagina Inicial */}
      <Stack.Screen name="PageInitial" component={PageInitial} />

      {/* Auth */}
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name='Register' component={RegisterScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="PageAccount" component={PageAccount} />
      {/* User */}
      <Stack.Screen name='Settings' component={SettingsUserScreen} />
      <Stack.Screen name='EditUser' component={EditUserScreen} />
      <Stack.Screen name='Profile' component={ProfileScreen} />
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Journeys' component={JourneysScreen} />
    </Stack.Navigator>
  );
}
export default AppRoutes
