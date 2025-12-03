import { colors, fonts } from "@/src/styles/theme";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TextInputProps, TouchableOpacity, View } from "react-native";
import { Icon } from "../Icon";
import { GlobalText } from "../GlobalText";
import * as Icons from "lucide-react-native";

type InputProps = {
    label: string;
    icon: keyof typeof Icons;
    type?: string | "password"
} & TextInputProps;

export function InputText({ label, value, onChangeText, type, icon }: InputProps) {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [show, setShow] = useState<boolean>(false);


    return (
        <View
            style={[
                styles.inputContainer,
                {
                    borderColor: isFocused ? colors.primary : colors.gray90,
                },
            ]}
        >
            {type === "password" ? (
                <>
                    <Icon name={icon} size={24} color={colors.gray100} />

                    <TextInput
                        style={styles.input}
                        value={value}
                        placeholder={label}
                        secureTextEntry={!show}
                        onChangeText={onChangeText}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                    />
                    <TouchableOpacity onPress={() => setShow(!show)}>
                        {!show ? <Icon name="Eye" size={24} color={colors.gray100} /> : <Icon name="EyeOffIcon" size={24} color={colors.gray100} />}
                    </TouchableOpacity>
                </>
            ) : (
                <>
                    <Icon name={icon} size={24} color={colors.gray100} />
                    <TextInput
                        style={styles.input}
                        value={value}
                        placeholder={label}
                        onChangeText={onChangeText}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                    />
                </>
            )}
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
        transitionDelay: ".3",
        gap: 8,
        alignItems: "center",
        backgroundColor: colors.gray80,
    },
    
    input: {
        flex: 1,
        minWidth: 0,
        height: 40,
        color: colors.gray100,
        fontFamily: fonts.medium
    },
});
