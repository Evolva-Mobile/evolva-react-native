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

    title: {
        paddingVertical: 18,
        paddingHorizontal: 8,
        fontSize: 42,
        width: "100%",
        textAlign: 'center',
    },

    avatarContainer: {
        alignItems: 'center'
    },

    avatarImg: {
        width: 128,
        height: 128,
    },

    formUser: {
        paddingVertical: 20,
        gap: 20,
        marginTop: 24,
        flexDirection: 'column'
    },

    firtsFilds: {
        gap: 18
    },

    verifyPasswordContainer: {
        flexDirection: 'row',
        marginBottom: 25,
        gap: 6,
        alignItems: 'center'
    },

    verifyPassword: {
        color: colors.gray100,
        fontSize: 12
    },

    footerContainer: {
        gap: 28,
        alignItems: "center",
        width: "100%"
    }
});