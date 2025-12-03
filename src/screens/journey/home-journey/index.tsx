import { ScrollView, View, Image, StyleSheet } from "react-native"
import { styles } from "./style"
import { GlobalText } from "@/src/components/ui/GlobalText";
import ImageAvatar from '@/assets/images/components/journey/avatars/standard.png'
import HomeRank from "@/src/components/layout/journeyRank";
import { colors } from "@/src/styles/theme";

export default function HomeJourney() {

    return (
        <View style={{ flex: 1, backgroundColor: "#FFF" }}>
            <ScrollView
                contentContainerStyle={{ paddingBottom: 28, gap: 24, paddingHorizontal: 24, paddingTop: 8, backgroundColor: '#FFF' }}
                showsVerticalScrollIndicator={false}
            >
                {/* Avatar da Jornada */}
                <View style={styles.journeyInfo}>
                    <Image
                        source={ImageAvatar}
                        style={styles.imgAvatarJourney}
                    />
                    <GlobalText variant="medium" style={styles.descJourney}>
                        Grupo criado para afazeres de casa
                    </GlobalText>
                </View>

                <HomeRank />
            </ScrollView>
        </View>
    );
}

