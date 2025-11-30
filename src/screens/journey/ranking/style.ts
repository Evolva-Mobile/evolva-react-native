import { colors } from "@/src/styles/theme";
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingVertical: 24,
        gap: 24,
    },
    title: {
        fontSize: 20,
        marginBottom: 14
    },
    listRank: {
        borderWidth: 3,
        borderRadius: 16,
        borderColor: colors.gray90,
        justifyContent: 'center',
        paddingHorizontal: 18

    },
    imgMedal: {
        width: 30,
        height: 30
    },
    imgAvatar: {
        width: 53,
        height: 53
    },

    itemPlayer: {
        paddingVertical: 8,
        flexDirection: 'row',
        gap: 10,
        borderBottomWidth: 3,
        borderBottomColor: colors.gray90,
        alignItems: 'center',


    },
    textRank: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1
    },
    textXp:{
        color: colors.neutral80,
    }
});