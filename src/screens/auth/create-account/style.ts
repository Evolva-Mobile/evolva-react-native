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

    img: {
        width: 60,
        height: 60,
    },

    title: {
        paddingVertical: 18,
        paddingHorizontal: 8,
        fontSize: 42,
        width: "100%",
        textAlign: 'center',
    },

    imgContainer: {
        alignItems: 'center'
    },

    imgLogin: {
        width: 205,
        height: 205,
    },

    formUser: {
        paddingVertical: 20,
        gap: 20,
        flexDirection: 'column'
    },

    firtsFilds: {
        gap: 25
    },

    verifyPasswordContainer: {
        flexDirection: 'row',
        marginBottom: 30,
        gap: 6,
        alignItems: 'center'
    },

    verifyPassword: {
        color: colors.gray100,
        fontSize: 12
    },

    containerSubmit: {
        marginTop: 10
    },

    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
        width: '100%',
    },

    dividerText: {
        marginHorizontal: 10,
        fontSize: 14,
        color: colors.neutral80
    },

    footerContainer: {
        gap: 28,
        alignItems: "center",
        width: "100%"
    },

    footerText: {
        flexDirection: "row",
        gap: 4,
        justifyContent: "center"
    },

    linkFooterText: {
        color: colors.neutral100
    }
});