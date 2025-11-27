import { TouchableOpacity, StyleSheet, View } from "react-native";
import { Icon } from "../../ui/Icon";
import { colors } from "@/src/styles/theme";
import { GlobalText } from "../../ui/GlobalText";
type HeaderBackProps = {
    title: string
    onPress?: () => void;
};

export function HeaderBack({ title, onPress }: HeaderBackProps) {
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity onPress={onPress}>
                <Icon name="ChevronLeft" color={colors.neutral100} size={24} />
            </TouchableOpacity>
            <GlobalText variant="bold" style={styles.text}>{title}</GlobalText>
            <View style={styles.space}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 8,
    },
    text: {
        fontSize: 20,
    },
    space: {
        width: 24,
        height: 24
    }
});