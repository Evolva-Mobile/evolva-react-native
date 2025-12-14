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

    title: {
        paddingVertical: 18,
        paddingHorizontal: 8,
        fontSize: 42,
        width: "100%",
        textAlign: 'center',
    },

    avatarContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: "100%",
        paddingBottom: 25,
        borderBottomColor: colors.gray90,
        borderBottomWidth: 2,
        gap: 20,
    },

    avatarImg: {
        width: 110,
        height: 110,
    },
    actionChoice: {
        width: 159
    },

    formUser: {
        paddingVertical: 20,
        gap: 20,
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
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        padding: 16,
    }

});