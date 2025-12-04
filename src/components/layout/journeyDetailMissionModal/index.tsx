import { TouchableOpacity, StyleSheet, View } from "react-native";
import { Icon } from "../../ui/Icon";
import { colors } from "@/src/styles/theme";
import { GlobalText } from "../../ui/GlobalText";
import { GlobalModal } from "../../ui/Modal";
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
                gap: 24,
                alignItems: 'center',
                marginVertical: 40
            }}>
                <GlobalText variant="bold" style={{ fontSize: 20 }}>Deseja sair?</GlobalText>
                <GlobalText variant="medium" style={{ fontSize: 16, textAlign: 'center', color: colors.neutral90 }}>
                    Ao confirmar você precisará refazer o login novamente
                </GlobalText>
            </View>

        </GlobalModal>
    );
}

