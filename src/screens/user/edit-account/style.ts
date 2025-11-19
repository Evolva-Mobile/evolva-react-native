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
    actionChoice:{
        width: 158 
    },

    formUser: {
        paddingVertical: 20,
        gap: 20,
        marginTop: 12,
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