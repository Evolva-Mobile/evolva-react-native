
import { useAppNavigation } from "@/src/utils/navigation";
import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { GlobalText } from "@/src/components/ui/GlobalText";
import { HeaderBack } from "@/src/components/layout/headerBack";
import { Icon } from "@/src/components/ui/Icon";
import { colors } from "@/src/styles/theme";
import { Button } from "@/src/components/ui/Button";

export default function SettingsUserScreen() {
    const navigation = useAppNavigation();
    const [view, setView] = useState<boolean>(false)
    return (
        <View style={styles.container}>
            <View>
                <HeaderBack title={"Configurações"} onPress={navigation.goBack} />

                <View style={styles.containerSettings}>
                    <GlobalText variant="semibold" style={styles.settingsTitleList}>Gerais:</GlobalText>
                    <View style={styles.settingsList}>
                        <TouchableOpacity style={styles.itemList} onPress={() => navigation.navigate('EditUser')}>
                            <GlobalText variant="medium" style={styles.itemListText}>Editar conta</GlobalText>
                            <Icon name={'Pen'} size={20} color={colors.neutral90} />
                        </TouchableOpacity>
                        <View style={styles.itemListLast}>
                            <GlobalText variant="medium" style={styles.itemListText}>Tema</GlobalText>
                            <Icon name={'Moon'} size={20} color={"#1CB0F6"} />
                        </View>
                    </View>
                </View>
            </View>
            <Button color={colors.red90} colorBorder={colors.red100} colorText={colors.withe100} onPress={() => navigation.navigate('Settings')} icon='DoorClosed'>
                Sair
            </Button>
        </View>
    );
}