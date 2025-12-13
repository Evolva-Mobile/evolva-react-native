import { StyleSheet } from "react-native";
import { colors } from "@/src/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 12,
    },

    goalImage: {
        width: 64,
        height: 64,
        marginBottom: 14
    },

    headerTextContainer: {
        flexDirection: "column",
        justifyContent: "center",
        gap: 18,
    },

    title: {
        fontSize: 20,
        textAlign: "center",
    },

    description: {
        fontSize: 16,
        paddingHorizontal: 18,
        textAlign: "center",
        color: colors.neutral80,
    },

    deadline: {
        fontSize: 16,
        textAlign: "center",
        color: colors.neutral90,
    },

    rewardsRow: {
        flexDirection: "row",
        gap: 16,
        paddingVertical: 16,
        width: "100%",
    },

    rewardCard: {
        alignItems: "center",
        borderRadius: 16,
        borderWidth: 3,
        borderColor: colors.gray90,
        flex: 1,
        padding: 12,
        height: 78,
        flexDirection: "row",
        justifyContent: "space-between",
    },

    rewardValue: {
        fontSize: 18,
    },

    rewardLabel: {
        fontSize: 14,
        color: colors.gray100,
    },

    rewardIcon: {
        width: 26,
        height: 26,
    },

    isMineWarning: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 12,
        alignItems: "center",
        paddingBottom: 16,
    },

    proveWarning: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 12,
        alignItems: "center",
        paddingBottom: 16,
    },

    isMineText: {
        color: colors.blue100,
    },

    proveText: {
        color: colors.yellow100,
    },

    missonAssigned: {
        borderRadius: 20,
        paddingHorizontal: 30,
        paddingVertical: 16,
        flexDirection: "row-reverse",
        alignItems: "center",

        width: "100%",
        backgroundColor: colors.gray90,

    },

    textAssigned: {
        fontSize: 14,
        width: "100%",
    },

    avatarImage: {
        width: 35,
        height: 35
    },

    proveArea: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        marginBottom: 12,
        gap: 18
    },

    proveTextArea: {
        flex: 1,
        borderRadius: 16,
        padding: 12,
        height: 78,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 3,
        borderColor: colors.gray90,
    }

});
