import { Text, TextProps } from "react-native";
import { colors, fonts } from "@/src/styles/theme";

interface GlobalTextProps extends TextProps {
  variant?: "regular" | "medium" | "semibold" | "bold";
}

export function GlobalText({ style, variant = "regular", ...rest }: GlobalTextProps) {

  const fontMap = {
    regular: fonts.regular,
    medium: fonts.medium,
    semibold: fonts.semiBold,
    bold: fonts.bold,
  };

  return (
    <Text
      {...rest}
      style={[
        { fontFamily: fontMap[variant], color: colors.neutral100 },
        style,
      ]}
    />
  );
}
