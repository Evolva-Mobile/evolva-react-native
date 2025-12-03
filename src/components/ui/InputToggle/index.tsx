import { colors, fonts } from "@/src/styles/theme";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TextInputProps, TouchableOpacity, View } from "react-native";
import { Icon } from "../Icon";
import { GlobalText } from "../GlobalText";
import * as Icons from "lucide-react-native";

type ToggleProps = {
    label: string;
    labelBold?: string;
    icon: keyof typeof Icons;
};

export function InputToggle({ label, icon, labelBold }: ToggleProps) {



    return (
        <View style={styles.inputContainer}>
            <View style={styles.labelToggle}>
                <Icon name={icon} color={colors.gray100}  size={20}/>
                <View style={{flexDirection: 'row', gap: 6}}> 
                    <GlobalText style={styles.label}>{label}</GlobalText>
                    {labelBold && (
                        <GlobalText style={styles.labelBold} variant="semibold">{labelBold}</GlobalText>
                    )}
                    <GlobalText style={styles.label}>?</GlobalText>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {

    },
    labelToggle: {
        flexDirection: 'row',
        gap: 12,
        alignItems: 'center'
    },
    label: {
        color: colors.gray100
    },
    labelBold: {

    }
});
