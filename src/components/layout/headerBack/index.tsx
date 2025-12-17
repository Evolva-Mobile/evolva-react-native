import { TouchableOpacity, StyleSheet, View } from "react-native";
import { Icon } from "../../ui/Icon";
import { colors } from "@/src/styles/theme";
import { GlobalText } from "../../ui/GlobalText";
import { useAppNavigation } from "@/src/utils/navigation";
type HeaderBackProps = {
    title?: string
    onPress?: () => void;
    config?: boolean
};

export function HeaderBack({ title, onPress, config }: HeaderBackProps) {
    const navigation = useAppNavigation();
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity onPress={onPress}>
                <Icon name="ChevronLeft" color={colors.neutral100} size={24} />
            </TouchableOpacity>
            <GlobalText variant="bold" style={styles.text}>{title}</GlobalText>
            {config ? (
                <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                    <Icon name="Bolt" color={colors.neutral100} size={24} />
                </TouchableOpacity>
            )
                :
                (<View style={styles.space}></View>)
            }

        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 24,
        paddingHorizontal: 24
    },
    text: {
        fontSize: 20,
    },
    space: {
        width: 24,
        height: 24
    }
});