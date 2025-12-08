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

    title: {
        fontSize: 20,
        marginBottom: 14
    },
    descJourney: {
        color: colors.neutral80
    },
    listMission: {
        borderWidth: 3,
        borderRadius: 16,
        borderColor: colors.gray90,
        justifyContent: 'center',
        paddingHorizontal: 18
    },
    itemMission: {
        paddingVertical: 10,
        flexDirection: 'row',
        gap: 10,
        borderBottomWidth: 3,
        borderBottomColor: colors.gray90,
        alignItems: 'flex-start',
        justifyContent: "space-between"
    }, 
    containerMissionImage:{
        width: 51,
        height: 56,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 12,
        borderWidth: 2,
        borderColor: colors.blue100,
        borderBottomWidth: 4,
        backgroundColor: colors.blue90
    },
    imgMission : {
        width: 28,
        height: 28
    },
    text: {
        color: colors.gray100
    },
    samePlace: {
        flexDirection: "row",
        gap: 6
    },
    sameTextPlace: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        marginTop: 6
    },
    noneMission:{
        flexDirection: "row",
        gap: 24,
        justifyContent: 'center',
        alignItems: "center",
        padding: 16
    }

});