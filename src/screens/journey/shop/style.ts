import { colors } from "@/src/styles/theme";
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    journeyInfo: {
        borderBottomColor: colors.gray90,
        borderBottomWidth: 3,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 14,
        paddingBottom: 16
    },

    img: {
        width: 50,
        height: 50
    },

    title: {
        fontSize: 20,
        marginBottom: 14
    },
    desc: {
        color: colors.neutral80
    },

});