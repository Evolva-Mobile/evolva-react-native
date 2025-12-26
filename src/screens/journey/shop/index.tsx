import { ScrollView, View, Image, StyleSheet, TouchableOpacity } from "react-native"

import { GlobalText } from "@/src/components/ui/GlobalText";
import ImageShop from '@/assets/images/principal/shopping-basket.png'
import ImageMission from '@/assets/images/components/journey/goal.png'
import HomeRank from "@/src/components/layout/journeyRank";
import { colors } from "@/src/styles/theme";
import { Icon } from "@/src/components/ui/Icon";
import { useState } from "react";
import DetailMissionModal from "@/src/components/layout/journeyDetailMissionModal";
import { JourneyResponse } from "../main-journey/type";
import { styles } from "./style";
import { useAppNavigation } from "@/src/utils/navigation";


export default function ShopScreen({ journey }: { journey?: JourneyResponse }) {
    const [visible, setVisible] = useState(false);
    const [selectedMissionId, setSelectedMissionId] = useState<number | null>(null);
    const navigation = useAppNavigation();
    const handlePressMission = (missionId: number) => {
        setVisible(true);
        setSelectedMissionId(missionId);
    }

    return (
        <View style={{ flex: 1, backgroundColor: "#FFF" }}>
            <ScrollView
                contentContainerStyle={{
                    paddingBottom: 28,
                    gap: 24,
                    paddingHorizontal: 24,
                    paddingTop: 8,
                    backgroundColor: "#FFF",
                }}
                showsVerticalScrollIndicator={false}
            >
                {/* Avatar da Jornada */}
                <View style={styles.journeyInfo}>
                    <View style={{width: 90, height: 90, backgroundColor: colors.blue900, borderRadius: 100, alignItems: "center", justifyContent: "center"}}>
                        <Image source={ImageShop} style={styles.img} />
                    </View>
                    

                    <GlobalText variant="medium" style={styles.desc}>
                        LOJA
                    </GlobalText>
                </View>

            </ScrollView>
        </View>


    )
}