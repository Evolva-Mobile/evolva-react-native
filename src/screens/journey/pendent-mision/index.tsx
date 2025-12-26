import { InputText } from "@/src/components/ui/InputText";
import { PostRequest } from "@/src/config/api-request/PostRequest";
import { useState } from "react";
import { ScrollView, View } from "react-native";
import { styles } from "./style";
import { Button } from "@/src/components/ui/Button";
import { GlobalText } from "@/src/components/ui/GlobalText";
import { showToast } from "@/src/utils/toastShow";
import { InputToggle } from "@/src/components/ui/InputToggle";
import { InputDate } from "@/src/components/ui/InputDate";
import { TASK } from "@/src/config/api-routes/task";
import { JourneyResponse } from "../main-journey/type";
import { HeaderBack } from "@/src/components/layout/headerBack";
import { useAppNavigation } from "@/src/utils/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/src/routes";

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


type Props = NativeStackScreenProps<
    RootStackParamList,
    "PendentMission"
>;

export default function PendentMissionScreen({ route }: Props) {
    const navigation = useAppNavigation();

    return (
        <View style={{ flex: 1 }}>
            <HeaderBack
                title={route?.params.journey?.data.title}
                onPress={navigation.goBack}
            />
            <View style={{ flex: 1, backgroundColor: "#FFF" }}>

                <ScrollView
                    contentContainerStyle={styles.containerScroll}
                    showsVerticalScrollIndicator={false}
                >
                    <View>
                        <View style={styles.headerContainer}>
                            <GlobalText variant="bold" style={styles.title}>
                                Missões para aprovação
                            </GlobalText>
                        </View>

                    </View>
                </ScrollView>
            </View>
        </View>
    );
}
