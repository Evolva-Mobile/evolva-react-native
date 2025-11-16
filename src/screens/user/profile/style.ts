import { colors } from "@/src/styles/theme";
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    headerContainer: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 8,
    },

    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 24,
        justifyContent: 'space-between',
    },

    avatarContainer: {
        alignItems: 'center'
    },

    avatarImg: {
        width: 128,
        height: 128,
    },

    profileContainer: {
        gap: 10,
        flexDirection: 'column'
    },

    tagsContainer: {
        textAlign: "center",
        alignItems: "center",
        borderBottomWidth: 2,
        borderBottomColor: colors.gray90,
        paddingBottom: 25
    },

    name: {
        fontSize: 24
    },

    tag: {
        fontSize: 14,
        color: colors.gray100
    },

    infosContainer: {
        gap: 46
    },

    listContainer: {
        gap: 16,
        marginTop: 15
    },

    title: {
        fontSize: 22,
    },

    statisticsList: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: "space-between",
        width: "100%",
    },

    statisticsItem: {
        width: '49%',
        paddingHorizontal: 16,
        paddingVertical: 18,
        borderWidth: 2,
        borderRadius: 20,
        flexDirection: "row",
        gap: 12,
        alignItems: "center",
        borderColor: colors.gray90,
    },

    statisticsImg: {
        width: 25,
        height: 25
    },

    statisticsText: {
        fontSize: 18,
    },

    statisticsSubText: {
        fontSize: 12,
        color: colors.gray100
    },
    achievementsList: {
        width: '100%',
        borderRadius: 18,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderWidth: 2,
        borderColor: colors.gray90,
    }


});