import { ScrollView, View, Image, StyleSheet, TouchableOpacity } from "react-native"
import { styles } from "./style"
import { GlobalText } from "@/src/components/ui/GlobalText";
import ImageAvatar from '@/assets/images/components/journey/avatars/standard.png'
import ImageMission from '@/assets/images/components/journey/goal.png'
import HomeRank from "@/src/components/layout/journeyRank";
import { colors } from "@/src/styles/theme";
import { Icon } from "@/src/components/ui/Icon";
import { useState } from "react";
import { JourneyProps } from "../main-journey/type";
import DetailMissionModal from "@/src/components/layout/journeyDetailMissionModal";


export default function HomeJourney({ journey }: { journey?: JourneyProps }) {
    const [visible, setVisible] = useState(false);

    const missions = [
        { title: "Tirar Lixo", days: "10", xp: 4123, status: false },
        { title: "Lavar Louça", days: "10", xp: 1231, status: true },
        { title: "Teste", days: "10", xp: 1231, status: true },
    ];

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
                    <Image source={ImageAvatar} style={styles.imgAvatarJourney} />

                    <GlobalText variant="medium" style={styles.descJourney}>
                        {journey?.description ?? "Sem descrição"}
                    </GlobalText>
                </View>

                <HomeRank />

                {/* Lista de Missões */}
                <View>
                    {journey?.tasks.length !== 0 ? (
                        <>
                            <GlobalText variant="bold" style={styles.title}>
                                Missões
                            </GlobalText>

                            <View style={styles.listMission}>
                                {journey?.tasks.map((mission, index) => {
                                    const isLast = index === journey.tasks.length - 1;

                                    return (
                                        <TouchableOpacity
                                            activeOpacity={0.8}
                                            onPress={() => setVisible(true)}
                                            key={index}
                                            style={[
                                                styles.itemMission,
                                                isLast && { borderBottomWidth: 0 },
                                            ]}
                                        >
                                            <View style={{ flexDirection: "row", gap: 10 }}>
                                                <View style={styles.containerMissionImage}>
                                                    <Image
                                                        source={ImageMission}
                                                        style={styles.imgMission}
                                                    />
                                                </View>

                                                <View style={{ marginTop: 6 }}>
                                                    <GlobalText
                                                        variant="semibold"
                                                        style={{ fontSize: 16 }}
                                                    >
                                                        {mission.title}
                                                    </GlobalText>

                                                    <View style={styles.sameTextPlace}>
                                                        <View style={styles.samePlace}>
                                                            <Icon
                                                                name="Clock10"
                                                                size={16}
                                                                color={colors.gray100}
                                                            />
                                                            <GlobalText style={styles.text}>
                                                                {mission.deadline} Dias
                                                            </GlobalText>
                                                        </View>
                                                    </View>
                                                </View>
                                            </View>

                                            <Icon
                                                name={
                                                    !mission.is_completed
                                                        ? "CircleDashed"
                                                        : "CircleDotDashed"
                                                }
                                                size={20}
                                                color={
                                                    !mission.is_completed
                                                        ? colors.neutral80
                                                        : colors.blue100
                                                }
                                            />
                                        </TouchableOpacity>
                                    );
                                })}
                            </View>
                        </>
                    ) :
                        (
                            <View style={styles.listMission}>
                                <View style={styles.noneMission}>
                                    <Icon name="Package2" size={28} color={colors.neutral80} />
                                    <GlobalText style={{ color: colors.neutral80 }} variant="semibold">
                                        Nenhuma missão foi criada
                                    </GlobalText>
                                </View>
                            </View>
                        )
                    }

                    <DetailMissionModal visible={visible} setVisible={setVisible} />
                </View>
            </ScrollView>
        </View>


)}