import { ReactNode, useRef } from "react"
import { Pressable, StyleSheet, Animated } from "react-native"
import { GlobalText } from "../GlobalText"
import { colors } from "@/src/styles/theme";
import { Icon } from "../Icon";
import * as Icons from "lucide-react-native";

type ButtonProps = {
  color?: "primary" | "secondary" | "neutral" | string;
  colorBorder?: string;
  colorText?: string;
  icon: keyof typeof Icons;
  onPress?: () => void;
}

export function ButtonSmall({
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
    >
      <Animated.View
        style={[
          styles.btnContainer,
          {
            backgroundColor,
            borderColor: outerBorderColor,
            borderBottomWidth: border,
            borderBottomColor: bottomBorderColor,
            transform: [{ translateY: translate }],
          },
        ]}
      >
        <Icon name={icon} color={bottomBorderColor} />
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    borderRadius: 18,
    height: 64,
    alignItems: "center",
    justifyContent: "center",
    width: 64,
    borderWidth: 2,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    textTransform: "uppercase",
  },
});
