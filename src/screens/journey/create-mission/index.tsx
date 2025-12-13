import { InputText } from "@/src/components/ui/InputText";
import { PostRequest } from "@/src/config/api-request/PostRequest";
import { useAppNavigation } from "@/src/utils/navigation";
import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { styles } from "./style";
import { Button } from "@/src/components/ui/Button";
import { Icon } from "@/src/components/ui/Icon";
import { USER } from "@/src/config/api-routes/user";
import { GlobalText } from "@/src/components/ui/GlobalText";
import { colors } from "@/src/styles/theme";
import { showToast } from "@/src/utils/toastShow";
import { InputToggle } from "@/src/components/ui/InputToggle";
import { InputDate } from "@/src/components/ui/InputDate";
import { TASK } from "@/src/config/api-routes/task";

type taskProps = {
    journey_id?: number | string;
    title: string;
    description: string;
    type: string;
    xp_reward: number;
    coin_reward: number;
    deadline: string; // ISO date string (ex: '2025-12-31T23:59:00.000Z')
    requires_proof: boolean;
    proof_url: string;
};

export default function RegisterMissionScreen() {
    const navigation = useAppNavigation();
    const [task, setTask] = useState<taskProps>({
        journey_id: 13,
        title: "",
        description: "",
        xp_reward: 0,
        coin_reward: 0,
        type: "normal",
        deadline: "",
        requires_proof: false,
        proof_url: ""
    });

    useEffect(() => {
        console.log(task);

    }, [task])

    const handleSubmit = async () => {
        if (task.title === "") {
            showToast.warning("Digite um titulo")
            return;
        }
        else if (!task.coin_reward) {
            showToast.warning("Digite a quantidade de moedas")
            return;
        }
        else if (!task.xp_reward) {
            showToast.warning("Digite a quantidade de xp")
            return;
        }

        try {
            const response = await PostRequest(TASK.CREATE(), task);

            if (response) {
                showToast.success(response.message)
                clearFilds();
            } else {
                showToast.error(response.message)
            }
        } catch (error) {
            showToast.error("Erro inesperado")

        }
    };

    const clearFilds = () => {
        setTask({
            title: "",
            description: "",
            xp_reward: 0,
            coin_reward: 0,
            type: "normal",
            deadline: "",
            requires_proof: false,
            proof_url: ""
        })
    }

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
                            value={task.title}
                            onChangeText={(text) => setTask({ ...task, title: text })}
                            icon={"FlagTriangleRight"}
                        />
                        <InputText
                            label="Objetivo"
                            value={task.description}
                            onChangeText={(text) => setTask({ ...task, description: text })}
                            icon={"ScrollText"}
                        />
                        <View style={styles.samePlace}>
                            <View style={styles.inputHalf}>
                                <InputText
                                    label="XP"
                                    type="number"
                                    keyboardType="numeric"
                                    value={String(task.xp_reward)}
                                    onChangeText={(text) => setTask({ ...task, xp_reward: Number(text) })}
                                    icon={"Stars"}
                                />
                            </View>
                            <View style={styles.inputHalf}>
                                <InputText
                                    label="Coin"
                                    type="number"
                                    keyboardType="numeric"
                                    value={String(task.coin_reward)}
                                    onChangeText={(text) => setTask({ ...task, coin_reward: Number(text) })}
                                    icon={"CircleStar"}
                                />
                            </View>
                        </View>

                        <InputDate label={"Data"} icon={"Calendar"} value={task.deadline} onChange={(text) => setTask({ ...task, deadline: text })} />

                        {/* <View style={styles.samePlace}>
                            <View style={styles.inputHalf}>
                                <InputText
                                    label="Hora Inicio"
                                    type="number"
                                    value={task.}
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
                        </View> */}

                        <View style={styles.containersToggles}>
                            <InputToggle icon="File" label="Requer" labelBold="Prova" value={task.requires_proof} setValue={(e) => setTask({ ...task, requires_proof: e })} />
                            <InputToggle icon="Skull" label="É" labelBold="Boss" value={task.type === "boss"} setValue={(isBoss) => setTask({ ...task, type: isBoss ? "boss" : "normal" })} />
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
