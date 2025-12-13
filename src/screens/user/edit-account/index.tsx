
import { InputText } from "@/src/components/ui/InputText";
import { useAppNavigation } from "@/src/utils/navigation";
import { useEffect, useState } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import Img from "@/assets/images/principal/elf.png";
import { Button } from "@/src/components/ui/Button";
import { USER } from "@/src/config/api-routes/user";
import { GlobalText } from "@/src/components/ui/GlobalText";
import { HeaderBack } from "@/src/components/layout/headerBack";
import { Icon } from "@/src/components/ui/Icon";
import { colors } from "@/src/styles/theme";
import { GetRequest } from "@/src/config/api-request/GetRequest";
import { PatchRequest } from "@/src/config/api-request/PatchRequest";
import { showToast } from "@/src/utils/toastShow";
import { styles } from "./style";
import { GlobalModal } from "@/src/components/ui/Modal";
import { avatarList } from "./avatarList";
import { ScrollView } from "react-native-gesture-handler";

type userProps = {
    name: string,
    email: string
    avatar_url: string
    password: string
    password_confirmation: string
}

type ModalChoiceImgProps = {
    visible: boolean,
    onConfirm: (img: SelectedImgProp) => void,
    setVisible: (value: boolean) => void
}

type SelectedImgProp = {
    width: number,
    uri?: string,
    height: number
}

export default function EditUserScreen() {
    const navigation = useAppNavigation();
    const [visible, setVisible] = useState(false);
    const [selectedAvatar, setSelectedAvatar] = useState<SelectedImgProp>({
        width: 0,
        uri: '',
        height: 0
    });

    const [user, setUser] = useState<userProps>({
        name: "",
        email: "",
        password: "",
        avatar_url: "",
        password_confirmation: ""
    })

    const handleSubmit = async () => {
        const payload: any = {
            name: user.name,
            email: user.email,
            avatar_url: user.avatar_url
        };

        const password = user.password ?? "";
        const password_confirmation = user.password_confirmation ?? "";

        if (password !== "" && password_confirmation !== "") {
            payload.password = user.password;
            payload.password_confirmation = user.password_confirmation;
        }
        try {
            const response = await PatchRequest(USER.UPDATE('1'), payload)
            if (response) {
                showToast.success("Conta atualizada com sucesso!");
                getUser();
            }
            showToast.error(response.message || "Erro ao atualizar a conta.");
        } catch (error) {
            console.log("Erro ao editar conta: ", error);
            showToast.error("Ocorreu um erro inesperado.");
        }
    }

    const getUser = async () => {
        try {
            const response = await GetRequest(USER.GET_USER())
            if (response) {
                setUser(response)
                console.log(response)
            }
        } catch (error) {
            console.log("erro ao criar conta: ", error);
        }
    }

    useEffect(() => {
        getUser()
    }, [])

     useEffect(() => {
        console.log(user)
    }, [user])

    return (
        <View style={styles.container}>
            <View>
                <HeaderBack title={"Editar conta"} onPress={navigation.goBack} />

                <View style={styles.formUser}>
                    <View style={styles.avatarContainer}>
                        <Image
                            source={selectedAvatar.uri
                                ? { uri: selectedAvatar.uri }
                                : user.avatar_url
                                    ? { uri: user.avatar_url }
                                    : Img
                            }
                            style={styles.avatarImg}
                        />

                        <View style={styles.actionChoice}>
                            <Button color="neutral" onPress={() => setVisible(true)}>Escolher</Button>
                            <ModalChoiceImg
                                visible={visible}
                                setVisible={setVisible}
                                onConfirm={(img) => {
                                    setSelectedAvatar(img);
                                    setUser(prev => ({
                                        ...prev,
                                        avatar_url: img.uri || ""
                                    }));
                                }}
                            />
                        </View>
                    </View>
                    <View style={styles.firtsFilds}>
                        <InputText
                            label="Nome"
                            value={user.name}
                            onChangeText={(text) => setUser({ ...user, name: text })}
                            icon={"User"} />
                        <InputText
                            label="E-mail"
                            value={user.email}
                            onChangeText={(text) => setUser({ ...user, email: text })}
                            icon={"Mailbox"} />

                        <GlobalText style={styles.verifyPassword} variant="medium">Nova senha:</GlobalText>

                        <InputText
                            label="Senha"
                            type="password"
                            value={user.password}
                            onChangeText={(text) => setUser({ ...user, password: text })}
                            icon={"KeySquare"} />
                    </View>
                    <View>
                        <View style={styles.verifyPasswordContainer}>
                            <Icon name="BadgeAlert" size={22} color={colors.gray100} />
                            <GlobalText style={styles.verifyPassword} variant="medium">Sua senha deve conter no mínimo 8 caracteres.</GlobalText>
                        </View>

                        <InputText
                            label="Repita a senha"
                            type="password"
                            value={user.password_confirmation}
                            onChangeText={(text) => setUser({ ...user, password_confirmation: text })}
                            icon={"Repeat"} />
                    </View>
                </View>
            </View>

            <View style={styles.footerContainer}>
                <Button color={"secondary"} onPress={handleSubmit}>
                    Salvar dados
                </Button>
            </View>
        </View>
    );
}

function ModalChoiceImg({ visible, setVisible, onConfirm }: ModalChoiceImgProps) {
    const [selected, setSelected] = useState<SelectedImgProp>({
        width: 0,
        uri: '',
        height: 0
    });

    const onConfirmAvatar = () => {
        onConfirm(selected);
        setVisible(false);
    }

    return (
        <GlobalModal
            visible={visible}
            onClose={() => setVisible(false)}
        >
            <View style={{
                gap: 12,
                alignItems: 'center'
            }}>
                <GlobalText variant="bold" style={{ fontSize: 20 }}>Escolha um avatar</GlobalText>
                <GlobalText variant="medium" style={{ fontSize: 16, textAlign: 'center', color: colors.neutral80 }}>
                    Esta foto sera exibida em seu perfil
                </GlobalText>
            </View>
            <ScrollView style={{
                height: 455,
                marginVertical: 30,
            }}>


                <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    gap: 4,
                    justifyContent: "center"
                }}>
                    {avatarList.map((img, index) => (
                        <TouchableOpacity onPress={() => setSelected(img)}>
                            <Image
                                key={index}
                                source={img}
                                style={{
                                    width: 90,
                                    height: 90,
                                    borderRadius: 50,
                                    borderWidth: 3,
                                    borderColor: selected === img ? colors.grenn100 : "transparent",
                                    marginVertical: 10
                                }}
                            />
                        </TouchableOpacity>
                    ))}

                </View>
            </ScrollView>
            <Button color="neutral" onPress={onConfirmAvatar}>Confirmar</Button>
        </GlobalModal>
    )
}
