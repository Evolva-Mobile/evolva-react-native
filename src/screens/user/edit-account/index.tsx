
import { InputText } from "@/src/components/ui/InputText";
import { PostRequest } from "@/src/config/api-request/PostRequest";
import { useAppNavigation } from "@/src/utils/navigation";
import { useState } from "react";
import { View, Image } from "react-native";
import Img from "@/assets/images/principal/elf.png";
import { styles } from "./style";
import { Button } from "@/src/components/ui/Button";
import { USER } from "@/src/config/api-routes/user";
import { GlobalText } from "@/src/components/ui/GlobalText";
import { HeaderBack } from "@/src/components/layout/headerBack";
import { Icon } from "@/src/components/ui/Icon";
import { colors } from "@/src/styles/theme";



type userProps = {
    name: string,
    email: string
    password: string
    password_confirmation: string
}

export default function EditUserScreen() {
    const navigation = useAppNavigation();
    const [user, setUser] = useState<userProps>({
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
    })

    const handleSubmit = async () => {
        console.log("usuario", user);
        try {
            const response = await PostRequest(USER.UPDATE(''), user)
            if (response.sucess) {
                console.log("conta criada");
                navigation.navigate('Login')
            }
        } catch (error) {
            console.log("erro ao criar conta: ", error);
        }
    }

    return (
        <View style={styles.container}>
            <View>
                <HeaderBack title={"Editar conta"} onPress={navigation.goBack} />

                <View style={styles.formUser}>
                    <View style={styles.avatarContainer}>
                        <Image source={Img} style={styles.avatarImg} />
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