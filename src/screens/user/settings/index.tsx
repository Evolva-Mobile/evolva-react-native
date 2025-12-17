
import Img from "@/assets/images/principal/frankenstein.png";
import { HeaderBack } from "@/src/components/layout/headerBack";
import { Button } from "@/src/components/ui/Button";
import { GlobalText } from "@/src/components/ui/GlobalText";
import { Icon } from "@/src/components/ui/Icon";
import { GlobalModal } from "@/src/components/ui/Modal";
import { PostRequest } from "@/src/config/api-request/PostRequest";
import { USER } from "@/src/config/api-routes/user";
import { AuthContext } from "@/src/contexts/AuthContext";
import { colors } from "@/src/styles/theme";
import { useAppNavigation } from "@/src/utils/navigation";
import { showToast } from "@/src/utils/toastShow";
import { useContext, useState } from "react";
import { Image, ScrollView, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

export default function SettingsUserScreen() {
    const navigation = useAppNavigation();
    const { logout } = useContext(AuthContext);

    const [visible, setVisible] = useState(false);
    const handleSubmit = async () => {

        try {
            const response = await PostRequest(USER.LOGOUT())
            if (response) {
                setVisible(false)
                showToast.success(response.message);
                await logout();
            }

        } catch (error) {
            console.log("Erro ao logar na conta: ", error);
            showToast.error("Algo deu errado");
        }
    }
    return (
        <View style={{ flex: 1 }}>
            <HeaderBack title={"Configurações"} onPress={navigation.goBack} />
            <View style={styles.container}>
                <ScrollView
                    contentContainerStyle={{
                        gap: 24,
                        backgroundColor: "#FFF",
                    }}
                    showsVerticalScrollIndicator={false}
                >
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
                </ScrollView>

                <Button color={colors.red90} colorBorder={colors.red100} colorText={colors.withe100} onPress={() => setVisible(true)} icon='DoorClosed'>
                    Sair
                </Button>
            </View>
            <GlobalModal
                visible={visible}
                onClose={() => setVisible(false)}
            >
                <Image source={Img} style={{ width: 70, height: 70 }} />
                <View style={{
                    gap: 24,
                    alignItems: 'center',
                    marginVertical: 40
                }}>
                    <GlobalText variant="bold" style={{ fontSize: 20 }}>Deseja sair?</GlobalText>
                    <GlobalText variant="medium" style={{ fontSize: 16, textAlign: 'center', color: colors.neutral90 }}>
                        Ao confirmar você precisará refazer o login novamente
                    </GlobalText>
                </View>
                <Button color="neutral" onPress={handleSubmit}>Confirmar</Button>
            </GlobalModal>
        </View >
    );
}