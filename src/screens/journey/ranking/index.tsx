import { View, Image } from "react-native"
import { styles } from "./style"
import { GlobalText } from "@/src/components/ui/GlobalText";

import ImageMedal from '@/assets/images/components/journey/first-position.png'
import ImageAvatar from '@/assets/images/perfil/minotaur.png'
import { HeaderBack } from "@/src/components/layout/headerBack";
import { useAppNavigation } from "@/src/utils/navigation";
export default function RankJorney() {
    const navigation = useAppNavigation();

    return (
        <View style={styles.container}>
            <HeaderBack title={"Editar conta"} onPress={navigation.goBack} />
            <View>
                <GlobalText variant="bold" style={styles.title}>Pódio</GlobalText>
                <View style={styles.listRank}>
                    <View style={styles.itemPlayer}>
                        <Image
                            source={ImageMedal}
                            style={styles.imgMedal}
                        />

                        <Image
                            source={ImageAvatar}
                            style={styles.imgAvatar}
                        />
                        <View style={styles.textRank}>
                            <GlobalText variant="semibold">Eduardo</GlobalText>
                            <GlobalText style={styles.textXp}> 12312123 XP</GlobalText>
                        </View>
                    </View>
                    <View style={styles.itemPlayer}>
                        <Image
                            source={ImageMedal}
                            style={styles.imgMedal}
                        />
                        <Image
                            source={ImageAvatar}
                            style={styles.imgAvatar}
                        />

                        <View style={styles.textRank}>
                            <GlobalText variant="semibold">Rodolfo</GlobalText>
                            <GlobalText style={styles.textXp}>55123 XP</GlobalText>
                        </View>
                    </View>
                    <View style={styles.itemPlayer}>
                        <Image
                            source={ImageMedal}
                            style={styles.imgMedal}
                        />

                        <Image
                            source={ImageAvatar}
                            style={styles.imgAvatar}
                        />
                        <View style={styles.textRank}>
                            <GlobalText variant="semibold">Vitor</GlobalText>
                            <GlobalText style={styles.textXp}>3412 XP</GlobalText>
                        </View>
                    </View>
                </View>
            </View>

            <View>
                <GlobalText variant="bold" style={styles.title}>Outros Jogadores</GlobalText>
                <View style={styles.listRank}>
                    <View style={styles.itemPlayer}>
                        <GlobalText variant="semibold" style={{ fontSize: 16 }}>4º</GlobalText>

                        <Image
                            source={ImageAvatar}
                            style={styles.imgAvatar}
                        />
                        <View style={styles.textRank}>
                            <GlobalText variant="semibold">P1</GlobalText>
                            <GlobalText style={styles.textXp}>1412 XP</GlobalText>
                        </View>
                    </View>
                    <View style={styles.itemPlayer}>
                        <GlobalText variant="semibold" style={{ fontSize: 16 }}>5º</GlobalText>

                        <Image
                            source={ImageAvatar}
                            style={styles.imgAvatar}
                        />
                        <View style={styles.textRank}>
                            <GlobalText variant="semibold">P2</GlobalText>
                            <GlobalText style={styles.textXp}>342 XP</GlobalText>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

