import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importando telas
import LoginScreen from '../screens/auth/login';
import PageInitial from '../screens/page-initial';
import RegisterScreen from '../screens/auth/create-account';
import ForgotPassword from '../screens/auth/forgot-password';
import EditUserScreen from '../screens/user/edit-account';
import SettingsUserScreen from '../screens/user/settings';
import PageAccount from '../screens/auth/page-account';
import ProfileScreen from '../screens/user/profile';
import TabsJorney from '../components/layout/tabsJourney';

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
  Jorney: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppRoutes: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Jorney"
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

      {/* Jornada */}
      <Stack.Screen name="Jorney" component={TabsJorney} />
    </Stack.Navigator>
  );
}
export default AppRoutes
