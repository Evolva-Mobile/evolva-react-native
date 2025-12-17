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
import { JourneyResponse } from "../main-journey/type"


export default function DetailsJorney({ journey }: { journey?: JourneyResponse }) {
    const players = journey?.data.members.filter(
        (member) => !member.is_master
    ) ?? [];


    return (

        <ScrollView
            contentContainerStyle={{ paddingBottom: 28, gap: 24, paddingHorizontal: 24, paddingTop: 8, backgroundColor: '#FFF' }}
            showsVerticalScrollIndicator={false}
        >
            {/* Avatar da Jornada */}
            <View style={styles.journeyInfo}>
                <Image
                    source={journey?.data.image_url ?? ImageAvatar}
                    style={styles.imgAvatarJourney}
                />
                <GlobalText variant="medium" style={styles.descJourney}>
                    {journey?.data.description ?? "Sem descrição"}
                </GlobalText>
            </View>

            {/* Codigo */}
            <View style={styles.codeContainer}>
                <GlobalText variant="bold" style={styles.titleJourney}>
                    Compartilhar QrCode
                </GlobalText>

                <View style={styles.bodyCode}>
                    <QRCode
                        value={journey?.data.join_code}
                    />
                </View>

                <View style={styles.dividerContainer}>
                    <View style={styles.dividerLine} />
                    <GlobalText variant={"regular"} style={styles.dividerText}>ou</GlobalText>
                    <View style={styles.dividerLine} />
                </View>

                <View style={styles.bodyTextCode}>
                    <GlobalText variant="semibold" style={styles.textCode}>
                        {journey?.data.join_code}
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
                <GlobalText variant="semibold" style={styles.titleList}>
                    Mestre
                </GlobalText>

                {journey?.data.members.map((member) =>
                    member.is_master ? (
                        <View key={member.id} style={styles.masterPlayer}>
                            <View style={styles.masterContent}>
                                <Image
                                    source={
                                        member.avatar
                                            ? { uri: member.avatar }
                                            : ImagePlayer
                                    }
                                    style={styles.imgAvatar}
                                />

                                <View>
                                    <GlobalText variant="semibold" style={styles.textMaster}>
                                        {member.name}
                                    </GlobalText>

                                    <GlobalText style={styles.subTextMaster}>
                                        {member.id} XP
                                    </GlobalText>
                                </View>
                            </View>

                            <Image source={ImageCrown} style={styles.imgCrown} />
                        </View>
                    ) : null
                )}

            </View>
            <View>
                <GlobalText variant="semibold" style={styles.titleList}>
                    Jogadores
                </GlobalText>

                <View style={styles.listPlayers}>
                    {players.map((member, index) => {
                        const isLast = index === players.length - 1;

                        return (
                            <View
                                key={member.id}
                                style={[
                                    styles.itemPlayer,
                                    isLast && { borderBottomWidth: 0 }
                                ]}
                            >
                                <Image
                                    source={
                                        member.avatar
                                            ? { uri: member.avatar }
                                            : ImagePlayer
                                    }
                                    style={styles.imgAvatar}
                                />

                                <View>
                                    <GlobalText variant="semibold">
                                        {member.name}
                                    </GlobalText>

                                    <GlobalText style={styles.textXp}>
                                        {member.id} XP
                                    </GlobalText>
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

