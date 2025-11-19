import { colors } from "@/src/styles/theme";
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    headerContainer: {
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        borderBottomWidth: 2,
        borderBottomColor: colors.gray90,
        paddingBottom: 25,
        flexDirection: 'row',
    },

    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingBottom: 24,
        paddingTop: 36,
        justifyContent: 'space-between',
    },

    avatarContainer: {
        alignItems: 'flex-start',
        justifyContent: "flex-start",
        gap: 15,
        flexDirection: 'row'
    },

    avatarImg: {
        width: 90,
        height: 90,
    },

    tagsContainer: {
        alignItems: "flex-start",
        justifyContent: "space-between",
        height: 85
    },
    name: {
        fontSize: 24
    },

    dateContainer: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center'
    },
    date: {
        fontSize: 12,
        color: colors.gray100
    },
    tag: {
        fontSize: 15,
        color: colors.gray100
    },

    infosContainer: {
        marginTop: 16,
        gap: 30
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
        gap: 10
    },

    statisticsItem: {
        width: '48%',
        paddingHorizontal: 16,
        paddingVertical: 18,
        borderWidth: 2,
        borderRadius: 20,
        flexDirection: "row",
        gap: 12,
        alignItems: "flex-start",
        justifyContent: "space-between",
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