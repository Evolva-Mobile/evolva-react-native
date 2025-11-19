import { TouchableOpacity, StyleSheet, View } from "react-native";
import { Icon } from "../../ui/Icon";
import { colors } from "@/src/styles/theme";
import { GlobalText } from "../../ui/GlobalText";
type HeaderBackProps = {
    title: string
    onPress?: () => void;
};

export function Modal({ title, onPress }: HeaderBackProps) {
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity style={styles.backButton} onPress={onPress}>
                <Icon name="ChevronLeft" color={colors.primary} size={22} />
            </TouchableOpacity>
            <GlobalText variant="medium">{title}</GlobalText>
            <View></View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    backButton: {
        padding: 8,
        borderRadius: "50%",
        borderColor: colors.primary,
        borderWidth: 2
    },
});