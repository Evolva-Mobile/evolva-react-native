import { ReactNode, useRef } from "react"
import { Pressable, StyleSheet, Animated } from "react-native"
import { GlobalText } from "../GlobalText"
import { colors } from "@/src/styles/theme";
import { Icon } from "../Icon";
import * as Icons from "lucide-react-native";

type ButtonProps = {
  children: ReactNode;
  color?: "primary" | "secondary" | "neutral" | string;
  colorBorder?: string;
  colorText?: string;
  icon?: keyof typeof Icons;
  onPress?: () => void;
}

export function Button({
  children,
  color = "primary",
  colorText,
  icon,
  colorBorder,
  onPress,
}: ButtonProps) {

  const backgroundColor =
    color === "neutral"
      ? colors.withe100
      : colors[color as "primary" | "secondary"] ?? color;

  const bottomBorderColor =
    colorBorder ||
    (color === "primary"
      ? colors.yellow100
      : color === "secondary"
      ? colors.brown100
      : color === "neutral"
      ? colors.gray90
      : colors.gray90);

  const outerBorderColor =
    color === "neutral"
      ? colorBorder || colors.gray90
      : "transparent";

  const effectiveTextColor =
    colorText ??
    (color === "neutral"
      ? colors.neutral100
      : color === "primary"
      ? colors.neutral100
      : colors.withe100);


  const translate = useRef(new Animated.Value(0)).current;
  const border = useRef(new Animated.Value(4)).current;

  const onPressIn = () => {
    Animated.parallel([
      Animated.spring(translate, {
        toValue: 4,
        useNativeDriver: true,
        speed: 20,
        bounciness: 0,
      }),
      Animated.spring(border, {
        toValue: 0,
        useNativeDriver: false,
        speed: 20,
        bounciness: 0,
      }),
    ]).start();
  };

  const onPressOut = () => {
    Animated.parallel([
      Animated.spring(translate, {
        toValue: 0,
        useNativeDriver: true,
        speed: 50,
        bounciness: 0,
      }),
      Animated.spring(border, {
        toValue: 4,
        useNativeDriver: false,
        speed: 50,
        bounciness: 0,
      }),
    ]).start();
  };

  return (
    <Pressable
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      style={{ width: "100%" }}
    >
      <Animated.View
        style={[
          styles.btnContainer,
          {
            backgroundColor,
            borderColor: outerBorderColor,
            borderWidth: color === "neutral" ? 2 : 0,
            borderBottomWidth: border,
            borderBottomColor: bottomBorderColor,
            justifyContent: icon ? "space-between" : "center",
            transform: [{ translateY: translate }],
          },
        ]}
      >
        <GlobalText
          variant="bold"
          style={[styles.text, { color: effectiveTextColor }]}
        >
          {children}
        </GlobalText>

        {icon && (
          <Icon name={icon} color={effectiveTextColor} />
        )}
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    borderRadius: 24,
    paddingHorizontal: 30,
    paddingVertical: 14,
    height: 64,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    width: "100%",
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    textTransform: "uppercase",
  },
});
