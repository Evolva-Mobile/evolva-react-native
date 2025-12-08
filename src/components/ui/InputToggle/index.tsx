import { colors } from "@/src/styles/theme";
import { useState, useRef } from "react";
import {
    StyleSheet,
    Animated,
    TouchableOpacity,
    View,
} from "react-native";
import { Icon } from "../Icon";
import { GlobalText } from "../GlobalText";
import * as Icons from "lucide-react-native";

type ToggleProps = {
    label: string;
    labelBold?: string;
    icon: keyof typeof Icons;
    value: boolean;
    setValue: (v: boolean) => void
};

export function InputToggle({ label, icon, labelBold, value, setValue }: ToggleProps) {


    // animação
    const anim = useRef(new Animated.Value(0)).current;

    const toggle = () => {
        Animated.timing(anim, {
            toValue: value ? 0 : 1,
            duration: 50,
            useNativeDriver: false,
        }).start();

        setValue(!value)

    };


    const translateX = anim.interpolate({
        inputRange: [0, 1],
        outputRange: [-4, 24],
    });


    const backgroundColor = anim.interpolate({
        inputRange: [0, 1],
        outputRange: [colors.gray100, colors.secondary],
    });


    return (
        <View style={styles.inputContainer}>
            <View style={styles.labelToggle}>
                <Icon name={icon} color={colors.gray100} size={20} />

                <View style={styles.labelGroup}>
                    <GlobalText style={styles.label}>{label}</GlobalText>

                    {labelBold && (
                        <GlobalText
                            style={styles.labelBold}
                            variant="semibold"
                        >
                            {labelBold}
                        </GlobalText>
                    )}

                    <GlobalText style={styles.label}>?</GlobalText>
                </View>
            </View>


            <TouchableOpacity
                activeOpacity={0.8}
                onPress={toggle}
                style={styles.touchArea}
            >
                <Animated.View style={[styles.track, { backgroundColor }]}>
                    <Animated.View
                        style={[
                            styles.thumb,
                            { transform: [{ translateX }], borderColor: backgroundColor },
                        ]}
                    />
                </Animated.View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 4,
    },

    labelToggle: {
        flexDirection: "row",
        gap: 12,
        alignItems: "center",
    },

    labelGroup: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
    },

    label: {
        color: colors.gray100,
        fontSize: 16,
    },

    labelBold: {
        color: colors.gray100,
        fontSize: 16,
    },

    touchArea: {
        paddingHorizontal: 4,
        paddingVertical: 2,
    },

    track: {
        width: 54,
        height: 22,
        borderRadius: 16,
        padding: 2,
        justifyContent: "center",
    },

    thumb: {
        width: 32,
        height: 32,
        borderRadius: 12,
        backgroundColor: colors.withe100,
        borderWidth: 3,
        borderBottomWidth: 5,
        borderColor: colors.gray100
    },
});
