

import { ActivityIndicator, View } from "react-native";
import { HeaderBack } from "@/src/components/layout/headerBack";
import { useAppNavigation } from "@/src/utils/navigation";
import TabsJorney from "@/src/components/layout/tabsJourney";
import { useCallback, useEffect, useState } from "react";
import { GetRequest } from "@/src/config/api-request/GetRequest";
import { JOURNEY } from "@/src/config/api-routes/journey";
import { JourneyResponse } from "./type";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/src/routes";
import { colors } from "@/src/styles/theme";
import { useFocusEffect } from "@react-navigation/native";

type Props = NativeStackScreenProps<
    RootStackParamList,
    "Journey"
>;

export default function MainJourney({ route }: Props) {
    const navigation = useAppNavigation();
    const [journey, setJourney] = useState<JourneyResponse>();
    const [loading, setLoading] = useState(true);

    const getJourney = async () => {
        try {
            setLoading(true);

            const response = await GetRequest(
                JOURNEY.DETAIL(route.params.journeyId)
            );

            if (response) {
                setJourney(response);                
            }
        } catch (error) {
            console.log("erro ao buscar jornada: ", error);
        } finally {
            setLoading(false);
        }
    };

    useFocusEffect(
        useCallback(() => {
            getJourney();
        }, [route.params.journeyId])
    );


    if (loading) {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#FFF",
                }}
            >
                <ActivityIndicator size="large" color={colors.primary} />
            </View>
        );
    }

    return (
        <View style={{ flex: 1 }}>
            <HeaderBack
                title={journey?.data.title}
                onPress={navigation.goBack}
            />

            <TabsJorney journey={journey} />
        </View>
    );
}
