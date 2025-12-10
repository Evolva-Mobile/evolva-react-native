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

    imgAvatarJourney: {
        width: 90,
        height: 90
    },

    titleJourney: {
        fontSize: 20
    },

    descJourney: {
        color: colors.neutral80
    },

    codeContainer: {
        borderBottomColor: colors.gray90,
        borderBottomWidth: 3,
        gap: 14,
        paddingBottom: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },

    bodyCode: {
        paddingVertical: 28,
        paddingHorizontal: 28,
        backgroundColor: colors.gray80,
        borderColor: colors.gray90,
        borderStyle: "dashed",
        borderWidth: 3,
        borderRadius: 16
    },

    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 6,
        width: '50%'
    },

    dividerLine: {
        flex: 1,
        height: 3,
        borderRadius: 100,
        backgroundColor: colors.gray90,
    },

    dividerText: {
        marginHorizontal: 8,
        fontSize: 14,
        color: colors.neutral80,
    },

    bodyTextCode: {
        paddingVertical: 6,
        paddingHorizontal: 28,
        backgroundColor: colors.gray80,
        borderColor: colors.gray90,
        borderStyle: "dashed",
        borderWidth: 3,
        borderRadius: 16
    },

    textCode: {
        color: colors.neutral80,
        fontSize: 16
    },
    titleList: {
        fontSize: 18,
        marginBottom: 16
    },
    imgCrown: {
        width: 40,
        height: 40
    },
    masterPlayer: {
        paddingVertical: 12,
        flexDirection: 'row',
        paddingHorizontal: 18,
        justifyContent: "space-between",
        borderRadius: 16,
        backgroundColor: '#000437',
        alignItems: 'center',
    },
    masterContent: {
        gap: 30,
        alignItems: 'center',
        flexDirection: 'row'
    },
    textMaster: {
        color: colors.withe100,
        fontSize: 14
    },
    subTextMaster: {
        color: colors.withe100,
        fontSize: 12
    },
    listPlayers: {
        borderWidth: 3,
        borderRadius: 16,
        borderColor: colors.gray90,
        justifyContent: 'center',
        paddingHorizontal: 18
    },
    imgAvatar: {
        width: 53,
        height: 53
    },
    itemPlayer: {
        paddingVertical: 8,
        flexDirection: 'row',
        gap: 30,
        borderBottomWidth: 3,
        borderBottomColor: colors.gray90,
        alignItems: 'center',
    },
    textXp: {
        color: colors.neutral80,
    }

});