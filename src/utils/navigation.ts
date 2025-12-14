import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../routes";

export type AppNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

export const useAppNavigation = () =>
  useNavigation<AppNavigationProp>();
