import { View, Image, StyleSheet, ImageSourcePropType } from "react-native";
import { GlobalText } from "../../ui/GlobalText";
import { colors } from "@/src/styles/theme";
 // ajuste conforme seu projeto

interface RewardCardProps {
  value: number | string;
  label: string;
  icon: ImageSourcePropType;
}

export function RewardCard({ value, label, icon }: RewardCardProps) {
  return (
    <View style={styles.rewardCard}>
      <View>
        <GlobalText variant="bold" style={styles.rewardValue}>
          {value}
        </GlobalText>
        <GlobalText variant="medium" style={styles.rewardLabel}>
          {label}
        </GlobalText>
      </View>

      <Image source={icon} style={styles.rewardIcon} />
    </View>
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
