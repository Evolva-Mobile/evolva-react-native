
import { useAppNavigation } from "@/src/utils/navigation";
import { useState } from "react";
import { Modal, TouchableOpacity, View, Image } from "react-native";
import Img from "@/assets/images/principal/frankenstein.png";
import { styles } from "./style";
import { GlobalText } from "@/src/components/ui/GlobalText";
import { HeaderBack } from "@/src/components/layout/headerBack";
import { Icon } from "@/src/components/ui/Icon";
import { colors } from "@/src/styles/theme";
import { Button } from "@/src/components/ui/Button";
import { PostRequest } from "@/src/config/api-request/PostRequest";
import { USER } from "@/src/config/api-routes/user";
import { showToast } from "@/src/utils/toastShow";
import { GlobalModal } from "@/src/components/ui/Modal";

export default function SettingsUserScreen() {
    const navigation = useAppNavigation();
    const [visible, setVisible] = useState(false);
    const handleSubmit = async () => {

        try {
            const response = await PostRequest(USER.LOGOUT())
            if (response) {
                setVisible(false)
                showToast.success(response.message);
                navigation.navigate('Login')
            }

        } catch (error) {
            console.log("Erro ao logar na conta: ", error);
            showToast.error("Algo deu errado");
        }
    }
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
            <Button color={colors.red90} colorBorder={colors.red100} colorText={colors.withe100} onPress={() => setVisible(true)} icon='DoorClosed'>
                Sair
            </Button>

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