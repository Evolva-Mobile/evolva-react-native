import { ScrollView, View, Image, StyleSheet, TouchableOpacity } from "react-native"
import { styles } from "./style"
import { GlobalText } from "@/src/components/ui/GlobalText";
import ImageAvatar from '@/assets/images/components/journey/avatars/standard.png'
import ImageMission from '@/assets/images/components/journey/goal.png'
import HomeRank from "@/src/components/layout/journeyRank";
import { colors } from "@/src/styles/theme";
import { Icon } from "@/src/components/ui/Icon";
import { useState } from "react";
import DetailMissionModal from "@/src/components/layout/journeyDetailMissionModal";
import { JourneyResponse } from "../main-journey/type";


export default function HomeJourney({ journey }: { journey?: JourneyResponse }) {
    const [visible, setVisible] = useState(false);
    const [selectedMissionId, setSelectedMissionId] = useState<number | null>(null);

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
                    <Image source={ImageAvatar} style={styles.imgAvatarJourney} />

                    <GlobalText variant="medium" style={styles.descJourney}>
                        {journey?.data.description ?? "Sem descrição"}
                    </GlobalText>
                </View>

                <HomeRank />

                {/* Lista de Missões */}
                <View>
                    {journey?.data.tasks.length !== 0 ? (
                        <>
                            <GlobalText variant="bold" style={styles.title}>
                                Missões
                            </GlobalText>

                            <View style={styles.listMission}>
                                {journey?.data.tasks.map((mission, index) => {
                                    const isLast = index === journey.data.tasks.length - 1;

                                    return (
                                        <TouchableOpacity
                                            activeOpacity={0.8}
                                            onPress={() => handlePressMission(mission.id)}
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
                                                                {Math.floor(mission.days_remaining)} Dia(s) restante(s)
                                                            </GlobalText>
                                                        </View>
                                                    </View>
                                                </View>
                                            </View>

                                            <Icon
                                                name={
                                                    !mission.have_assigned_person
                                                        ? "CircleDashed"
                                                        : "CircleDotDashed"
                                                }
                                                size={20}
                                                color={
                                                    !mission.have_assigned_person
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

                        <DetailMissionModal visible={visible} setVisible={setVisible} mssionId={selectedMissionId}/>
                </View>
            </ScrollView>
        </View>


    )
}