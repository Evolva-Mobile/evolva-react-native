import { Image, TouchableOpacity, StyleSheet, Animated, Pressable } from "react-native"
import ImageGoogle from '@/assets/images/another/google-logo-48.png'
import { GlobalText } from "../GlobalText";
import { useRef } from "react";
import { colors } from "@/src/styles/theme";

export function ButtonGoogle() {
    const translate = useRef(new Animated.Value(0)).current;
    const border = useRef(new Animated.Value(4)).current;

    const onPressIn = () => {
        Animated.spring(translate, {
            toValue: 4,
            useNativeDriver: true,
            speed: 20,
            bounciness: 0,
        }).start();

        Animated.spring(border, {
            toValue: 0,
            useNativeDriver: false,
            speed: 20,
            bounciness: 0,
        }).start();
    };

    const onPressOut = () => {
        Animated.spring(translate, {
            toValue: 0,
            useNativeDriver: true,
            speed: 50,
            bounciness: 0,
        }).start();

        Animated.spring(border, {
            toValue: 4,
            useNativeDriver: false,
            speed: 50,
            bounciness: 0,
        }).start();
    };

    return (
        <Pressable
            onPressIn={onPressIn}
            onPressOut={onPressOut}
        >
            <Animated.View style={[styles.btnContainer, {
                transform: [{ translateY: translate }],
                borderBottomWidth: border
            }]}>
                <GlobalText variant="medium" style={styles.txt}>Google</GlobalText>
                <Image source={ImageGoogle} style={styles.img} />
            </Animated.View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    btnContainer: {
        borderRadius: 50,
        paddingHorizontal: 8,
        paddingVertical: 14,
        height: 70,
        flexDirection: "row-reverse",
        alignItems: "center",
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: colors.gray90,
        width: "100%",
        gap: 8
    },
    img: {
        width: 30,
        height: 30,
    },
    txt:{
        color: "#00A6EF",
        textTransform: "uppercase"
    }
});