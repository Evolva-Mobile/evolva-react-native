import { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import * as Icons from "lucide-react-native";
import { colors, fonts } from "@/src/styles/theme";
import { Icon } from "../Icon";

type InputDateProps = {
  label: string;
  icon: keyof typeof Icons;
  value: string;
  onChange: (text: string) => void;
};

export function InputDate({ label, icon, value, onChange }: InputDateProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleMask = (text: string) => {
    // Remove tudo que não for número
    let clean = text.replace(/\D/g, "");

    // Limitar a 8 dígitos (DDMMYYYY)
    if (clean.length > 8) clean = clean.slice(0, 8);

    let masked = clean;

    if (clean.length > 2) {
      masked = clean.slice(0, 2) + "/" + clean.slice(2);
    }

    if (clean.length > 4) {
      masked = masked.slice(0, 5) + "/" + masked.slice(5);
    }

    onChange(masked);
  };

  return (
    <View
      style={[
        styles.inputContainer,
        { borderColor: isFocused ? colors.primary : colors.gray90 },
      ]}
    >
      <Icon name={icon} size={24} color={colors.gray100} />

      <TextInput
        style={styles.input}
        placeholder={label}
        placeholderTextColor={colors.gray100}
        value={value}
        onChangeText={handleMask}
        keyboardType="numeric"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    borderRadius: 24,
    paddingHorizontal: 20,
    height: 64,
    borderWidth: 2,
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    backgroundColor: colors.gray80,
  },
  input: {
    flex: 1,
    height: 40,
    color: colors.gray100,
    fontFamily: fonts.medium,
    fontSize: 16,
  },
});
