import { View, Image, StyleSheet, ImageSourcePropType, Pressable } from "react-native";
import { GlobalText } from "../../ui/GlobalText";
import { colors } from "@/src/styles/theme";
import { navigate } from "expo-router/build/global-state/routing";
import { useAppNavigation } from "@/src/utils/navigation";
import { RootStackParamList } from "@/src/routes";
// ajuste conforme seu projeto

interface NavigateManegementProps {
  value: number | string;
  label: string;
  navigateTo: () => void
  icon: ImageSourcePropType;
}

export function NavigateManegement({ value, label, icon, navigateTo }: NavigateManegementProps) {
  return (
    <Pressable style={styles.rewardCard} onPress={navigateTo}>
      <View>
        <GlobalText variant="bold" style={styles.rewardValue}>
          {value}
        </GlobalText>
        <GlobalText variant="medium" style={styles.rewardLabel}>
          {label}
        </GlobalText>
      </View>

      <Image source={icon} style={styles.rewardIcon} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  rewardCard: {
    alignItems: "center",
    borderRadius: 16,
    borderWidth: 3,
    borderColor: colors.gray90,
    flex: 1,
    padding: 12,
    height: 78,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rewardValue: {
    fontSize: 18,
  },
  rewardLabel: {
    fontSize: 14,
    color: colors.gray100,
  },
  rewardIcon: {
    width: 26,
    height: 26,
  },
});
