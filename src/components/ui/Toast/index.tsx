
import { View, StyleSheet } from "react-native";
import { Icon } from "../Icon";
import { GlobalText } from "../GlobalText";

export const CustomToast = {
  success: ({ text1 }: any) => (
    <View style={[styles.container, { backgroundColor: "#28C840" }]}>
      <Icon name="CheckCircle2" size={20} color="#fff" />
      <GlobalText variant="regular" style={styles.text}>{text1}</GlobalText>
    </View>
  ),

  error: ({ text1 }: any) => (
    <View style={[styles.container, { backgroundColor: "#E55348" }]}>
      <Icon name="XCircle" size={20} color="#fff" />
      <GlobalText variant="regular" style={styles.text}>{text1}</GlobalText>
    </View>
  ),
  
  warning: ({ text1 }: any) => (
    <View style={[styles.container, { backgroundColor: "#f1c40f" }]}>
      <Icon name="AlertCircle" size={20} color="#fff" />
      <GlobalText variant="regular" style={styles.text}>{text1}</GlobalText>
    </View>
  ),

  info: ({ text1 }: any) => (
    <View style={[styles.container, { backgroundColor: "#3498db" }]}>
      <Icon name="Info" size={20} color="#fff" />
      <GlobalText variant="regular" style={styles.text}>{text1}</GlobalText>
    </View>
  ),
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    padding: 14,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    alignSelf: "center",
  },
  text: {
    flex: 1,
    color: "#fff",
    fontSize: 14
  },
});
