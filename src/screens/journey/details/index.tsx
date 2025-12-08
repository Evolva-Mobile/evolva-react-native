import { ScrollView, View, Image } from "react-native"
import ImageAvatar from '@/assets/images/components/journey/avatars/standard.png'
import ImagePlayer from '@/assets/images/perfil/unicorn.png'
import ImageCrown from '@/assets/images/principal/crown.png'
import { styles } from "./style"
import { GlobalText } from "@/src/components/ui/GlobalText";
import QRCode from 'react-native-qrcode-svg';
import { colors } from "@/src/styles/theme";
import { Button } from "@/src/components/ui/Button";
import { ButtonSmall } from "@/src/components/ui/ButtonSmall"
import { JourneyProps } from "../main-journey/type"

export default function DetailsJorney({ journey }: { journey?: JourneyProps }) {
    const players = [
        { name: "Eduardo", xp: 12312123, avatar: ImagePlayer },
        { name: "Rodolfo", xp: 55123, avatar: ImagePlayer },
        { name: "Vitor", xp: 3412, avatar: ImagePlayer },
        { name: "P1", xp: 1412, avatar: ImagePlayer },
        { name: "P2", xp: 342, avatar: ImagePlayer },
        { name: "P3", xp: 142, avatar: ImagePlayer },
        { name: "P4", xp: 142, avatar: ImagePlayer },
    ];
    return (

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
                    {journey?.description ?? "Sem descrição"}
                </GlobalText>
            </View>

            {/* Codigo */}
            <View style={styles.codeContainer}>
                <GlobalText variant="bold" style={styles.titleJourney}>
                    Compartilhar QrCode
                </GlobalText>

                <View style={styles.bodyCode}>
                    <QRCode
                        value={journey?.join_code}
                    />
                </View>

                <View style={styles.dividerContainer}>
                    <View style={styles.dividerLine} />
                    <GlobalText variant={"regular"} style={styles.dividerText}>ou</GlobalText>
                    <View style={styles.dividerLine} />
                </View>

                <View style={styles.bodyTextCode}>
                    <GlobalText variant="semibold" style={styles.textCode}>
                        {journey?.join_code}
                    </GlobalText>
                </View>

                <GlobalText variant="bold" style={styles.titleJourney}>
                    Compartilhar Link
                </GlobalText>
                <View style={{ flexDirection: "row", justifyContent: "space-around", width: "100%" }}>
                    <ButtonSmall icon="Copy" color="neutral" />
                    <ButtonSmall icon="MessageCircle" color="neutral" />
                    <ButtonSmall icon="Share2" color="neutral" />
                </View>
            </View>

            {/* Lista de Jogadores */}
            <View>
                <GlobalText variant="semibold" style={styles.titleList}>Mestre</GlobalText>
                <View
                    style={styles.masterPlayer}>
                    <View style={styles.masterContent}>
                        <Image source={ImagePlayer} style={styles.imgAvatar} />

                        <View>
                            <GlobalText variant="semibold" style={styles.textMaster}>Mestre Foda</GlobalText>
                            <GlobalText style={styles.subTextMaster}>1231 XP</GlobalText>
                        </View>
                    </View>
                    <Image source={ImageCrown} style={styles.imgCrown} />
                </View>
            </View>
            <View>
                <GlobalText variant="semibold" style={styles.titleList}>Jogadores</GlobalText>
                <View style={styles.listPlayers}>
                    {players.map((player, index) => {
                        const isLast = index === players.length - 1;
                        return (
                            <View
                                key={index}
                                style={[
                                    styles.itemPlayer,
                                    isLast && { borderBottomWidth: 0 }
                                ]}
                            >

                                <Image source={player.avatar} style={styles.imgAvatar} />

                                <View>
                                    <GlobalText variant="semibold">{player.name}</GlobalText>
                                    <GlobalText style={styles.textXp}>{player.xp} XP</GlobalText>
                                </View>
                            </View>
                        );
                    })}
                </View>
            </View>

            {/* Danger Zone */}
            <Button color={colors.red90} colorBorder={colors.red100} colorText={colors.withe100} icon='HeartCrack'>
                Sair da Jornada
            </Button>
        </ScrollView>

    );
}

