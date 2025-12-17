import { colors } from '@/src/styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    topContainer: {
        alignItems: "flex-end",
        gap: 50
    },

    itensContent: {
        width: '100%',
        alignItems: 'center',
    },
    imgContainer: {
        marginVertical: 40
    },
    imgInitial: {
        width: 128,
        height: 128,

    },
    pagConatiner: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
        marginVertical: 20,

    },
    bolInactive: {
        width: 10,
        height: 10,
        borderRadius: 50,
        backgroundColor: colors.gray90,
        marginHorizontal: 5,
    },
    bolActive: {
        width: 12,
        height: 12,
        borderRadius: 50,
        backgroundColor: colors.red190,
        marginHorizontal: 5,
    },

    footerContainer: {
        gap: 70,
    },

    textContent: {
        alignItems: 'center',
    },

    title: {
        paddingVertical: 18,
        fontSize: 32,
    },
    subInfo: {
        fontSize: 16,
        textAlign: 'center',
        color: colors.gray100
    },

    textSkip: {
        fontSize: 16,
        color: colors.neutral90
    }
});