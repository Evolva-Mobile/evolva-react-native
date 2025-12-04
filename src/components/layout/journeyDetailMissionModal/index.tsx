import { TouchableOpacity, StyleSheet, View, Image } from "react-native";
import { Icon } from "../../ui/Icon";
import { colors } from "@/src/styles/theme";
import { GlobalText } from "../../ui/GlobalText";
import { GlobalModal } from "../../ui/Modal";
import { Button } from "../../ui/Button";
type DetailMissionProps = {
    visible: boolean;
    setVisible: (value: boolean) => void;
};

export default function DetailMissionModal({ visible, setVisible }: DetailMissionProps) {


    return (
        <GlobalModal
            visible={visible}
            onClose={() => setVisible(false)}
        >
            <View style={{

            }}>
                <Image source={""} />
                <View>
                    <GlobalText variant="bold" style={{ fontSize: 20 }}>Tirar o Lixo</GlobalText>
                    <GlobalText variant="medium" style={{ fontSize: 16, textAlign: 'center', color: colors.neutral90 }}>
                        Objetivo muito foda da missão.
                        Ex: Dar pirueta e pular corda.
                    </GlobalText>
                    <GlobalText variant="medium" style={{ fontSize: 16, textAlign: 'center', color: colors.neutral90 }}>
                        Termina em 10 dias
                    </GlobalText>
                </View>
                <View>
                    <View>
                        <View>
                            <GlobalText>100</GlobalText>
                            <GlobalText>Moedas</GlobalText>
                        </View>
                        <Image source={""} />
                    </View>
                    <View>
                        <View>
                            <GlobalText>100</GlobalText>
                            <GlobalText>Moedas</GlobalText>
                        </View>
                        <Image source={""} />
                    </View>
                </View>
                {isProve && (
                    <View>
                        <Icon name="BadgeAlert"/>
                        <GlobalText>Esta missão requer prova</GlobalText>
                    </View>
                )}
                <Button color="neutral">Pegar Missão</Button>
            </View>

        </GlobalModal>
    );
}

