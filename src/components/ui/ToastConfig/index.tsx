import { View, Text } from "react-native";
import { CheckCircle, XCircle } from "lucide-react-native";

interface Props {
  text1?: string;
}

export const toastConfig = {

  success: ({ text1 } :Props) => (
    <View
      style={{
        backgroundColor: "#4CAF50", // verde preenchendo tudo
        padding: 16,
        borderRadius: 12,
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
      }}
    >
      <CheckCircle size={28} color="#fff" />
      <Text style={{ color: "#fff", fontSize: 16, fontWeight: "600" }}>
        {text1}
      </Text>
    </View>
  ),

  error: ({ text1 } :Props) => (
    <View
      style={{
        backgroundColor: "#FF3B30",
        padding: 16,
        borderRadius: 12,
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
      }}
    >
      <XCircle size={28} color="#fff" />
      <Text style={{ color: "#fff", fontSize: 16, fontWeight: "600" }}>
        {text1}
      </Text>
    </View>
  ),
};
