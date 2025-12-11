import { View, Image } from "react-native";
import GoalImage from "@/assets/images/components/journey/goal2.png"
import CoinImage from "@/assets/images/principal/coin.png"
import XpImage from "@/assets/images/principal/crystal.png"
import AvatarImage from "@/assets/images/perfil/gnome.png"

import { Icon } from "../../ui/Icon";
import { colors } from "@/src/styles/theme";
import { GlobalText } from "../../ui/GlobalText";
import { GlobalModal } from "../../ui/Modal";
import { Button } from "../../ui/Button";
import { useState } from "react";
import { styles } from "./styles";
import { RewardCard } from "../RewarsRow";
import { ButtonSmall } from "../../ui/ButtonSmall";
import { pickImageBase64 } from "@/src/utils/pickerImage";

type DetailMissionProps = {
    visible: boolean;
    setVisible: (value: boolean) => void;
    mssionId: number | null;
};

export default function DetailMissionModal({ visible, setVisible, mssionId }: DetailMissionProps) {
    const [assigned, setAssigned] = useState(true);
    const [assignedToMe, setAssignedToMe] = useState(true);
    const [isProve, setIsProve] = useState(false);

    const isFree = !assigned;
    const isTakenByOther = assigned && !assignedToMe;
    const isMine = assigned && assignedToMe;

    const [imageProof, setImageProof] = useState<{
        uri: string | null;
        base64: string | null;
        fileName: string;
        type: string;
    } | null>(null);


    return (
        <GlobalModal
            visible={visible}
            onClose={() => setVisible(false)}
        >
            {isFree && (
                <>
                    <View style={styles.container}>
                        <Image source={GoalImage} style={styles.goalImage} />

                        <View style={styles.headerTextContainer}>
                            <GlobalText variant="bold" style={styles.title}>
                                Tirar o Lixo
                            </GlobalText>

                            <GlobalText variant="medium" style={styles.description}>
                                Objetivo muito foda da missão.
                                Ex: Dar pirueta e pular corda.
                            </GlobalText>

                            <GlobalText variant="semibold" style={styles.deadline}>
                                Termina em {mssionId} dias
                            </GlobalText>
                        </View>

                        <View style={styles.rewardsRow}>
                            <RewardCard icon={CoinImage} label="Moedas" value={100} />
                            <RewardCard icon={XpImage} label="XP" value={100} />
                        </View>

                        {isProve && (
                            <View style={styles.proveWarning}>
                                <Icon name="BadgeAlert" color={colors.yellow100} />
                                <GlobalText variant="medium" style={styles.proveText}>
                                    Esta missão requer prova
                                </GlobalText>
                            </View>
                        )}

                        <Button color="neutral">Pegar Missão</Button>
                    </View>

                </>
            )}

            {isTakenByOther && (
                <>
                    <View style={styles.container}>
                        <Image source={GoalImage} style={styles.goalImage} />

                        <View style={styles.headerTextContainer}>
                            <GlobalText variant="bold" style={styles.title}>
                                Tirar o Lixo
                            </GlobalText>

                            <GlobalText variant="medium" style={styles.description}>
                                Objetivo muito foda da missão.
                                Ex: Dar pirueta e pular corda.
                            </GlobalText>

                            <GlobalText variant="semibold" style={styles.deadline}>
                                Termina em {mssionId} dias
                            </GlobalText>
                        </View>

                        <View style={styles.rewardsRow}>
                            <RewardCard icon={CoinImage} label="Moedas" value={100} />
                            <RewardCard icon={XpImage} label="XP" value={100} />
                        </View>

                        {isProve && (
                            <View style={styles.proveWarning}>
                                <Icon name="BadgeAlert" color={colors.yellow100} />
                                <GlobalText variant="medium" style={styles.proveText}>
                                    Esta missão requer prova
                                </GlobalText>
                            </View>
                        )}

                        <View style={styles.missonAssigned} >
                            <Image source={AvatarImage} style={styles.avatarImage} />
                            <GlobalText style={styles.textAssigned} variant="bold" >Eduardo esta com essa missão</GlobalText>
                        </View>
                    </View>
                </>
            )}

            {isMine && (
                <View style={styles.container}>
                    <Image source={GoalImage} style={styles.goalImage} />

                    <View style={styles.headerTextContainer}>
                        <GlobalText variant="bold" style={styles.title}>
                            Tirar o Lixo
                        </GlobalText>

                        <GlobalText variant="medium" style={styles.description}>
                            Objetivo muito foda da missão.
                            Ex: Dar pirueta e pular corda.
                        </GlobalText>

                        <GlobalText variant="semibold" style={styles.deadline}>
                            Termina em {mssionId} dias
                        </GlobalText>
                    </View>

                    <View style={styles.rewardsRow}>
                        <RewardCard icon={CoinImage} label="Moedas" value={100} />
                        <RewardCard icon={XpImage} label="XP" value={100} />
                    </View>

                    {!isProve && (
                        <View style={styles.proveArea}>
                            <ButtonSmall icon="ArchiveRestore" color="#AC7F5E" colorBorder="#7F5C42"
                                onPress={async () => {
                                    const image = await pickImageBase64();
                                    if (image) {
                                        setImageProof(image);
                                    }
                                }}
                            />
                            <View style={styles.proveTextArea}>
                                {imageProof ? (
                                    <View style={{ flexDirection: "row-reverse", alignItems: "center", gap: 8, justifyContent: "space-between", width: "100%" }}>
                                        <Image
                                            source={{ uri: imageProof.uri || "" }}
                                            style={{ width: 60, height: 60, borderRadius: 12 }}
                                        />
                                        <GlobalText
                                            variant="semibold"
                                            style={{ color: colors.gray100, fontSize: 16 }}
                                        >
                                            {imageProof.fileName}
                                        </GlobalText>
                                    </View>
                                ) : (
                                    <GlobalText
                                        variant="semibold"
                                        style={{ color: colors.gray100, fontSize: 16 }}
                                    >
                                        Anexe uma Imagem
                                    </GlobalText>
                                )}
                            </View>
                        </View>
                    )}

                    <View style={styles.isMineWarning}>
                        <Icon name="BadgeInfo" color={colors.blue100} />
                        <GlobalText variant="medium" style={styles.isMineText}>
                            Você esta com essa missão
                        </GlobalText>
                    </View>


                    <Button color="#25D366" colorBorder="#2BAC5B" icon="Check">Concluir Missão</Button>
                </View>
            )}

        </GlobalModal>
    );
}

