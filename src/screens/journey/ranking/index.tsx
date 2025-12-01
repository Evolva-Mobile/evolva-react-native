import { View, Image, ScrollView } from "react-native";
import { styles } from "./style";
import { GlobalText } from "@/src/components/ui/GlobalText";

import MedalFirst from '@/assets/images/components/journey/first-position.png'
import MedalSecond from '@/assets/images/components/journey/second-position.png'
import MedalThird from '@/assets/images/components/journey/third-position.png'

import ImageAvatar from '@/assets/images/perfil/minotaur.png'
import { useAppNavigation } from "@/src/utils/navigation";

export default function RankJorney() {
    const navigation = useAppNavigation();

    const players = [
        { position: 1, name: "Eduardo", xp: 12312123, avatar: ImageAvatar },
        { position: 2, name: "Rodolfo", xp: 55123, avatar: ImageAvatar },
        { position: 3, name: "Vitor", xp: 3412, avatar: ImageAvatar },
        { position: 4, name: "P1", xp: 1412, avatar: ImageAvatar },
        { position: 5, name: "P2", xp: 342, avatar: ImageAvatar },
        { position: 6, name: "P3", xp: 142, avatar: ImageAvatar },
        { position: 7, name: "P4", xp: 142, avatar: ImageAvatar },
        { position: 8, name: "P5", xp: 142, avatar: ImageAvatar },
        { position: 9, name: "P6", xp: 142, avatar: ImageAvatar },
    ];

    const podium = players.slice(0, 3);
    const others = players.slice(3);

    return (
        <ScrollView
            contentContainerStyle={{ paddingBottom: 28, gap: 24, paddingHorizontal: 24, paddingTop: 8, backgroundColor: '#FFF' }}
            showsVerticalScrollIndicator={false}
        >
            <View>
                <GlobalText variant="bold" style={styles.title}>Pódio</GlobalText>

                <View style={styles.listRank}>
                    {podium.map((player, index) => {
                        const isLast = index === podium.length - 1;
                        return (
                            <View
                                key={player.position}
                                style={[
                                    styles.itemPlayer,
                                    isLast && { borderBottomWidth: 0 }
                                ]}
                            >
                                <Image
                                    source={
                                        index === 0
                                            ? MedalFirst
                                            : index === 1
                                                ? MedalSecond
                                                : MedalThird
                                    }
                                    style={styles.imgMedal}
                                />

                                <Image source={player.avatar} style={styles.imgAvatar} />

                                <View style={styles.textRank}>
                                    <GlobalText variant="semibold">{player.name}</GlobalText>
                                    <GlobalText style={styles.textXp}>{player.xp} XP</GlobalText>
                                </View>
                            </View>
                        );
                    })}
                </View>
            </View>


            <View>
                <GlobalText variant="bold" style={styles.title}>Outros Jogadores</GlobalText>

                <View style={styles.listRank}>
                    {others.map((player, index) => {
                        const isLast = index === others.length - 1;

                        return (
                            <View
                                key={player.position}
                                style={[
                                    styles.itemPlayer,
                                    isLast && { borderBottomWidth: 0 }
                                ]}
                            >
                                <GlobalText variant="semibold" style={{ fontSize: 16 }}>
                                    {player.position}º
                                </GlobalText>

                                <Image source={player.avatar} style={styles.imgAvatar} />

                                <View style={styles.textRank}>
                                    <GlobalText variant="semibold">{player.name}</GlobalText>
                                    <GlobalText style={styles.textXp}>{player.xp} XP</GlobalText>
                                </View>
                            </View>
                        );
                    })}
                </View>
            </View>
        </ScrollView>
    );
}
