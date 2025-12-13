

import { View } from "react-native";
import { HeaderBack } from "@/src/components/layout/headerBack";
import { useAppNavigation } from "@/src/utils/navigation";
import TabsJorney from "@/src/components/layout/tabsJourney";
import { useEffect, useState } from "react";
import { GetRequest } from "@/src/config/api-request/GetRequest";
import { JOURNEY } from "@/src/config/api-routes/journey";
import { JourneyResponse } from "./type";


export default function MainJourney() {
    const navigation = useAppNavigation();
    const [journey, setJourney] = useState<JourneyResponse>()

    const getJourney = async () => {
        try {
            const response = await GetRequest(JOURNEY.DETAIL(13))
            if (response) {
                setJourney(response)

            }
        } catch (error) {
            console.log("erro ao criar conta: ", error);
        }
    }
    useEffect(() => {
        getJourney()
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <HeaderBack title={journey?.data.title} onPress={navigation.goBack} />
            <TabsJorney journey={journey} />
        </View>
    );
}
