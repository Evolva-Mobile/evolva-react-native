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

});