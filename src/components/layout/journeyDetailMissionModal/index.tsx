import { TouchableOpacity, StyleSheet, View, Image } from "react-native";
import GoalImage from "@/assets/images/components/journey/goal2.png"
import CoinImage from "@/assets/images/principal/coin.png"
import XpImage from "@/assets/images/principal/frankenstein.png"
import { Icon } from "../../ui/Icon";
import { colors } from "@/src/styles/theme";
import { GlobalText } from "../../ui/GlobalText";
import { GlobalModal } from "../../ui/Modal";
import { Button } from "../../ui/Button";
import { useState } from "react";
type DetailMissionProps = {
    visible: boolean;
    setVisible: (value: boolean) => void;
};

export default function DetailMissionModal({ visible, setVisible }: DetailMissionProps) {
    const [isProve, setIsProve] = useState(false);

    return (
        <GlobalModal
            visible={visible}
            onClose={() => setVisible(false)}
        >
            <View style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 12
            }}>
                <Image source={GoalImage} style={{ width: 56, height: 56 }}/>
                <View style={{

                    flexDirection: "column",
                    justifyContent: "center",
                    gap: 12
                }}>
                    <GlobalText variant="bold" style={{ fontSize: 20, textAlign: "center" }}>Tirar o Lixo</GlobalText>
                    <GlobalText variant="medium" style={{ fontSize: 16, textAlign: 'center', color: colors.neutral80 }}>
                        Objetivo muito foda da missão.
                        Ex: Dar pirueta e pular corda.
                    </GlobalText>
                    <GlobalText variant="semibold" style={{ fontSize: 16, textAlign: 'center', color: colors.neutral90 }}>
                        Termina em 10 dias
                    </GlobalText>
                </View>
                <View style={{ flexDirection: "row", gap: 16, paddingVertical: 16, width: "100%"}}>
                <View style={{alignItems: "center", borderRadius: 16, borderWidth: 3, borderColor: colors.gray90, flex: 1, padding: 12, height: 78, flexDirection: "row", justifyContent: "space-between" }}>
                        <View>
                            <GlobalText variant="bold" style={{ fontSize: 18 }}>100</GlobalText>
                            <GlobalText variant="medium" style={{ fontSize: 14, color: colors.gray100 }}>Moedas</GlobalText>
                        </View>
                        <View style={{ height: "100%" }} >
                            <Image source={CoinImage} style={{ width: 26, height: 26 }} />
                        </View>
                    </View>
                    <View style={{alignItems: "center", borderRadius: 16, borderWidth: 3, borderColor: colors.gray90, flex: 1, padding: 12, height: 78, flexDirection: "row", justifyContent: "space-between" }}>
                        <View>
                            <GlobalText variant="bold" style={{ fontSize: 18 }}>100</GlobalText>
                            <GlobalText variant="medium" style={{ fontSize: 14, color: colors.gray100 }}>Moedas</GlobalText>
                        </View>
                        <View style={{ height: "100%" }} >
                            <Image source={XpImage} style={{ width: 26, height: 26 }} />
                        </View>
                       
                    </View>
                </View>
                {!isProve && (
                    <View style={{flexDirection: "row", justifyContent: "center", gap: 12, alignItems: "center", paddingBottom: 16}}>
                        <Icon name="BadgeAlert" color={colors.yellow100}/>
                        <GlobalText variant="medium" style={{color: colors.yellow100}}>Esta missão requer prova</GlobalText>
                    </View>
                )}
                <Button color="neutral">Pegar Missão</Button>
            </View>

        </GlobalModal>
    );
}

