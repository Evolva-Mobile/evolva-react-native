import { colors } from "@/src/styles/theme";
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 24,
        paddingHorizontal: 16,
        justifyContent: 'space-between',
    },

    containerSettings: {
        width: '100%',
        marginTop: 25,
    },
    settingsTitleList:{
        marginBottom: 16,
        fontSize: 18,
        color: colors.neutral90,
        paddingLeft: 8
    },
    settingsList: {
        width: '100%',
        borderRadius: 18,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderWidth: 2,
        borderColor: colors.gray90,
    },

    itemList: {
        flexDirection: 'row',
        padding: 16,
        borderBottomColor: colors.gray90,
        borderBottomWidth: 2,
        justifyContent: 'space-between'
    },
    itemListText: {
        color: colors.neutral90
    },

    itemListLast: {
        flexDirection: 'row',
        padding: 16,
        justifyContent: 'space-between'
    }
});