import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importando telas
import LoginScreen from '../screens/auth/login';
import RegisterScreen from '../screens/auth/create-account';
import ForgotPassword from '../screens/auth/forgot-password';
import EditUserScreen from '../screens/user/edit-account';
import SettingsUserScreen from '../screens/user/settings';
import ProfileScreen from '../screens/user/profile';

// Definindo tipos das rotas
export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  Details: { itemId: number; otherParam?: string }; // com parâmetros
  Settings: undefined;
  EditUser: undefined;
  Profile: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppRoutes: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: '#FFF' }
      }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name='Register' component={RegisterScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />

      {/* User */}
      <Stack.Screen name='Settings' component={SettingsUserScreen} />
      <Stack.Screen name='EditUser' component={EditUserScreen} />
      <Stack.Screen name='Profile' component={ProfileScreen} />
    </Stack.Navigator>
  );
}
export default AppRoutes
