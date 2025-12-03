import { colors } from "@/src/styles/theme";
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    containerScroll: {
        paddingBottom: 28,
        gap: 24,
        paddingHorizontal: 24,
        paddingTop: 8,
        backgroundColor: colors.withe100
    },

    headerContainer: {
        alignItems: 'center',
        justifyContent: "center"
    },

    title: {
        paddingVertical: 0,
        fontSize: 20,
        width: "100%",
        textAlign: 'left',
    },

    formUser: {
        paddingVertical: 20,
        gap: 20,
        flexDirection: 'column'
    },

    samePlace: {
        gap: 16,
        flexDirection: 'row',
        width: '100%'
    },

    inputHalf: {
        flex: 1
    },

    containersToggles: {
        gap: 26
    },

    footerContainer: {
        gap: 28,
        alignItems: "center",
        width: "100%"
    },
});