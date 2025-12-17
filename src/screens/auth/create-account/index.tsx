import { InputText } from "@/src/components/ui/InputText";
import { PostRequest } from "@/src/config/api-request/PostRequest";
import { useAppNavigation } from "@/src/utils/navigation";
import Img from "@/assets/images/principal/trumpet.png";
import { useState } from "react";
import { TouchableOpacity, View, Image } from "react-native";
import { styles } from "./style";
import { Button } from "@/src/components/ui/Button";
import { Icon } from "@/src/components/ui/Icon";
import { USER } from "@/src/config/api-routes/user";
import { GlobalText } from "@/src/components/ui/GlobalText";
import { colors } from "@/src/styles/theme";

import { showToast } from "@/src/utils/toastShow";

type userProps = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
};

export default function RegisterScreen() {
    const navigation = useAppNavigation();
    const [user, setUser] = useState<userProps>({
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
    });

    const isPasswordValid = user.password.length >= 8;

    const handleSubmit = async () => {
        if (user.password !== user.password_confirmation) {
            showToast.warning("As senhas não coincidem")
            return;
        }

        if (!isPasswordValid) {
            showToast.warning("A senha é muito curta")
            return;
        }

        try {
            const response = await PostRequest(USER.REGISTER(), user);

            if (response) {
                showToast.success(response.message)
                navigation.navigate("Login");
            } else {
                showToast.error(response.message)
            }
        } catch (error) {
            showToast.error("Erro inesperado")

        }
    };

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.headerContainer}>
                    <Image source={Img} style={styles.img} />
                    <GlobalText variant="bold" style={styles.title}>
                        Criar conta
                    </GlobalText>
                </View>

                <View style={styles.formUser}>
                    <View style={styles.firtsFilds}>
                        <InputText
                            label="Nome"
                            value={user.name}
                            onChangeText={(text) => setUser({ ...user, name: text })}
                            icon={"User"}
                        />
                        <InputText
                            label="E-mail"
                            value={user.email}
                            onChangeText={(text) => setUser({ ...user, email: text })}
                            icon={"Mailbox"}
                        />
                        <InputText
                            label="Senha"
                            type="password"
                            value={user.password}
                            onChangeText={(text) => setUser({ ...user, password: text })}
                            icon={"KeySquare"}
                        />
                    </View>

                    <View>
                        <View style={styles.verifyPasswordContainer}>
                            <Icon
                                name={isPasswordValid ? "BadgeCheck" : "BadgeAlert"}
                                size={22}
                                color={isPasswordValid ? "#4CAF50" : colors.gray100}
                            />
                            <GlobalText
                                style={{
                                    ...styles.verifyPassword,
                                    color: isPasswordValid ? "#4CAF50" : colors.gray100
                                }}
                                variant="medium"
                            >
                                Sua senha deve conter no mínimo 8 caracteres.
                            </GlobalText>
                        </View>

                        <InputText
                            label="Repita a senha"
                            type="password"
                            value={user.password_confirmation}
                            onChangeText={(text) =>
                                setUser({ ...user, password_confirmation: text })
                            }
                            icon={"Repeat"}
                        />
                    </View>
                </View>
            </View>

            <View style={styles.footerContainer}>
                <Button color={"secondary"} onPress={handleSubmit}>
                    Criar conta
                </Button>

                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <GlobalText style={styles.linkFooterText} variant="bold">
                        Voltar
                    </GlobalText>
                </TouchableOpacity>
            </View>
        </View>
    );
}
