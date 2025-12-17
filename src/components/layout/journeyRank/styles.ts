import { colors } from "@/src/styles/theme";
import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        marginBottom: 14
    },
    cardRank: {
        borderWidth: 3,
        borderRadius: 20,
        borderColor: colors.gray90
    },
    barFirts: {
        width: 60,
        height: 70,
        borderTopRightRadius: 22,
        borderTopLeftRadius: 22,
        backgroundColor: colors.yellow90,
        borderWidth: 3,
        borderColor: colors.yellow100,
        borderBottomWidth: 0,
    },

    barSecond: {
        width: 60,
        height: 30,
        borderTopRightRadius: 22,
        borderTopLeftRadius: 22,
        backgroundColor: '#E5E5E5',
        borderWidth: 3,
        borderColor: '#AAAAAA',
        borderBottomWidth: 0,
    },

    barThird: {
        width: 60,
        height: 50,
        borderTopRightRadius: 22,
        borderTopLeftRadius: 22,
        backgroundColor: '#F7F7F7',
        borderWidth: 3,
        borderColor: '#E5E5E5',
        borderBottomWidth: 0,
    },
    imgThird: {
        width: 50,
        height: 50
    },
    imgSecond: {
        width: 50,
        height: 50
    },
    imgFirts: {
        width: 60,
        height: 60
    },

    podium: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
    },
    cardsPodium: {
        flexDirection: 'row',
        position: 'relative',
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    columnFirtPodium: {
        zIndex: 10,
        alignItems: 'center'
    },

    columnThirdPodium: {
        position: 'absolute',
        alignItems: 'center',
        flexDirection: 'column',
        right: 40,
        gap: 12
    },

    columnSecondPodium: {
        alignItems: 'center',
        position: 'absolute',
        flexDirection: 'column',
        right: -40,
        gap: 12
    },
    moreRank: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingVertical: 12,
        paddingHorizontal: 18,
        alignItems: 'center',
        borderTopWidth: 3,
        borderTopColor: colors.gray90,
    },
    moreText: {
        fontSize: 16
    },
    topRank: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flexDirection: 'row',
        paddingHorizontal: 8,
        paddingRight: 16,
    },
    listRank: {
        width: '45%'
    },
    imgMedal: {
        width: 20,
        height: 20
    },
    imgAvatar: {
        width: 53,
        height: 53
    },
    itemPlayer: {
        paddingVertical: 12,
        justifyContent: 'space-between',
        paddingRight: 15,
        flexDirection: 'row',
        gap: 10,
        borderBottomWidth: 3,
        borderBottomColor: colors.gray90,
        alignItems: 'center',
    },
    textXp: {
        color: colors.neutral80,
    }
});