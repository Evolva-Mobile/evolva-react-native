import { View, Image, StyleSheet } from "react-native";
import { GlobalText } from "../../ui/GlobalText";

import ImageAvatar from '@/assets/images/components/journey/avatars/standard.png'
import MedalFirst from '@/assets/images/components/journey/first-position.png'
import MedalSecond from '@/assets/images/components/journey/second-position.png'
import MedalThird from '@/assets/images/components/journey/third-position.png'

import { Icon } from "../../ui/Icon";
import { styles } from "./styles";


export default function HomeRank() {
    const podium = [
        { position: 1, name: "Eduardo", xp: 12312123, avatar: ImageAvatar },
        { position: 2, name: "Rodolfo", xp: 55123, avatar: ImageAvatar },
        { position: 3, name: "Vitor", xp: 3412, avatar: ImageAvatar },
    ];
    return (
        <View>
            <GlobalText variant="bold" style={styles.title}>Pódio</GlobalText>
            {/* <Image source={player.avatar} style={styles.imgAvatar} /> */}
            <View style={styles.cardRank}>
                <View style={styles.topRank}>
                    <View style={styles.podium}>
                        <View style={styles.cardsPodium}>
                            <View style={styles.columnThirdPodium}>
                                <Image
                                    source={ImageAvatar}
                                    style={styles.imgThird}
                                />
                                <View style={styles.barThird} />
                            </View>
                            <View style={styles.columnFirtPodium}>

                                <Image
                                    source={ImageAvatar}
                                    style={styles.imgFirts}
                                />
                                <View style={styles.barFirts} />
                            </View>
                            <View style={styles.columnSecondPodium}>
                                <Image
                                    source={ImageAvatar}
                                    style={styles.imgSecond}
                                />
                                <View style={styles.barSecond} />
                            </View>


                        </View>
                    </View>
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
                                    <View style={styles.textRank}>
                                        <GlobalText variant="semibold">{player.name}</GlobalText>
                                        <GlobalText style={styles.textXp}>XP {player.xp}</GlobalText>
                                    </View>
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
                                </View>
                            );
                        })}
                    </View>
                </View>
                <View style={styles.moreRank}>
                    <GlobalText variant="semibold" style={styles.moreText}>Classificação Completa</GlobalText>
                    <Icon name="ChevronRight" color="#CBCBCB" />
                </View>
            </View>
        </View>
    )
}
