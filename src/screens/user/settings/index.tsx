
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

export default function SettingsUserScreen() {
    const navigation = useAppNavigation();
    const [visible, setVisible] = useState(false);

    const handleSubmit = async () => {

        try {
            const response = await PostRequest(USER.LOGOUT())
            if (response) {
                setVisible(false)
                navigation.navigate('Login')
            }

        } catch (error) {
            console.log("Erro ao logar na conta: ", error);
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
            
            <Modal
                visible={visible}
                transparent
                animationType="fade"
            >
                <View style={{
                    flex: 1,
                    padding: 20,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "rgba(0,0,0,0.5)"
                }}>
                    <View style={{
                        padding: 20,
                        width: '100%',
                        backgroundColor: "white",
                        borderRadius: 12,
                        alignItems: 'center',
                    }}>
                        <View style={{ alignItems: "flex-end", width: '100%' }} >
                            <TouchableOpacity onPress={() => setVisible(false)}>
                                <Icon name="X" />
                            </TouchableOpacity>
                        </View>
                        <Image source={Img} style={{ width: 70, height: 70 }} />
                        <View style={{
                            gap: 24,
                            alignItems: 'center',
                            marginVertical: 40
                        }}>
                            <GlobalText variant="bold" style={{ fontSize: 20 }}>Deseja sair?</GlobalText>
                            <GlobalText variant="medium" style={{ fontSize: 16, textAlign: 'center', color: colors.neutral90 }}>Ao confirmar você precisara refazer o login novamente</GlobalText>
                        </View>
                        <Button color="neutral" onPress={handleSubmit}>Confirmar</Button>

                    </View>
                </View>
            </Modal>
        </View>
    );
}