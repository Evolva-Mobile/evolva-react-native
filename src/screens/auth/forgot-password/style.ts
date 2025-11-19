import { colors } from "@/src/styles/theme";
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingBottom: 24,
        paddingTop: 28,
        justifyContent: 'space-between',
    },

    headerContainer: {
        alignItems: 'center',
        justifyContent: "center"
    },
    title: {
        paddingVertical: 18,
        paddingHorizontal: 8,
        fontSize: 42,
        textAlign: "center"
    },

    img: {
        width: 65,
        height: 65,
    },
    formUser: {
        paddingVertical: 20,
        gap: 18,
        flexDirection: 'column'
    },
    footerContainer: {
        gap: 28,
        alignItems: "center",
        width: "100%"
    },
    linkFooterText: {
        color: colors.secondary
    }

});