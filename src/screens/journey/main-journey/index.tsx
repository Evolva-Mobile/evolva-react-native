

import { View } from "react-native";
import { HeaderBack } from "@/src/components/layout/headerBack";
import { useAppNavigation } from "@/src/utils/navigation";
import TabsJorney from "@/src/components/layout/tabsJourney";

export default function MainJourney() {
    const navigation = useAppNavigation();


    return (
        <View style={{ flex: 1 }}>
            <HeaderBack title={"Os Abestalhados"} onPress={navigation.goBack} />  
            <TabsJorney />
        </View>
    );
}
