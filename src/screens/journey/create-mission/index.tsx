import { InputText } from "@/src/components/ui/InputText";
import { PostRequest } from "@/src/config/api-request/PostRequest";
import { useAppNavigation } from "@/src/utils/navigation";
import { useState } from "react";
import { ScrollView, View } from "react-native";
import { styles } from "./style";
import { Button } from "@/src/components/ui/Button";
import { Icon } from "@/src/components/ui/Icon";
import { USER } from "@/src/config/api-routes/user";
import { GlobalText } from "@/src/components/ui/GlobalText";
import { colors } from "@/src/styles/theme";
import { showToast } from "@/src/utils/toastShow";
import { InputToggle } from "@/src/components/ui/InputToggle";

type userProps = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
};

export default function RegisterMissionScreen() {
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

            if (response.success) {
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
        <View style={{ flex: 1, backgroundColor: "#FFF" }}>
            <ScrollView
                contentContainerStyle={styles.containerScroll}
                showsVerticalScrollIndicator={false}
            >
                <View>
                    <View style={styles.headerContainer}>
                        <GlobalText variant="bold" style={styles.title}>
                            Criar Missão
                        </GlobalText>
                    </View>

                    <View style={styles.formUser}>
                        <InputText
                            label="Nome da Missão"
                            value={user.name}
                            onChangeText={(text) => setUser({ ...user, name: text })}
                            icon={"FlagTriangleRight"}
                        />
                        <InputText
                            label="Objetivo"
                            value={user.email}
                            onChangeText={(text) => setUser({ ...user, email: text })}
                            icon={"ScrollText"}
                        />
                        <View style={styles.samePlace}>
                            <View style={styles.inputHalf}>
                                <InputText
                                    label="XP"
                                    type="number"
                                    value={user.password}
                                    onChangeText={(text) => setUser({ ...user, password: text })}
                                    icon={"Stars"}
                                />
                            </View>
                            <View style={styles.inputHalf}>
                                <InputText
                                    label="Coin"
                                    type="number"
                                    value={user.password}
                                    onChangeText={(text) => setUser({ ...user, password: text })}
                                    icon={"CircleStar"}
                                />
                            </View>
                        </View>
                        <View style={styles.samePlace}>
                            <InputText
                                label="Data"
                                type="number"
                                value={user.password}
                                onChangeText={(text) => setUser({ ...user, password: text })}
                                icon={"Calendar"}
                            />
                        </View>
                        <View style={styles.samePlace}>
                            <View style={styles.inputHalf}>
                                <InputText
                                    label="Hora Inicio"
                                    type="number"
                                    value={user.password}
                                    onChangeText={(text) => setUser({ ...user, password: text })}
                                    icon={"Clock12"}
                                />
                            </View>
                            <View style={styles.inputHalf}>
                                <InputText
                                    label="Hora Fim"
                                    type="number"
                                    value={user.password}
                                    onChangeText={(text) => setUser({ ...user, password: text })}
                                    icon={"Clock9"}
                                />
                            </View>
                        </View>

                        <View style={styles.containersToggles}>
                            <InputToggle icon="File" label="Requer" labelBold="Prova" />
                            <InputToggle icon="Skull" label="É" labelBold="Boss" />
                        </View>
                    </View>
                </View>

                <View style={styles.footerContainer}>
                    <Button color={"secondary"} onPress={handleSubmit}>
                        Escrever Missão
                    </Button>
                </View>
            </ScrollView>
        </View>
    );
}
