import { useEffect, useState } from "react";
import { View, StyleSheet, Image, Pressable } from "react-native";
import { GlobalText } from "../../ui/GlobalText";
import ImageMission from '@/assets/images/components/tabs/magic-wand.png'
import imgList from '@/assets/images/components/tabs/parchment.png'
import { colors } from "@/src/styles/theme";
import { useAppNavigation } from "@/src/utils/navigation";
import { GlobalModal } from "../../ui/Modal";
import GoalImage from "@/assets/images/components/journey/goal2.png"
import ImageMission2 from '@/assets/images/components/journey/goal.png'
import { NavigateManegement } from "../navigateManegement";
import { JourneyResponse } from "@/src/screens/journey/main-journey/type";

export default function FloatingMenu({ journey }: { journey?: JourneyResponse }) {

    const navigation = useAppNavigation();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        console.log(journey);

    }, [])
    return (
        <View style={styles.container}>
            <Pressable onPress={() => navigation.navigate("PendentMission", { journey: journey })} style={{ backgroundColor: colors.withe100, padding: 12, borderRadius: 16, borderWidth: 3, borderColor: colors.yellow90 }}>
                <Image
                    source={imgList}
                    style={styles.imgList}
                />
            </Pressable>
            <Pressable style={{ backgroundColor: colors.blue900, padding: 16, borderRadius: 22, borderWidth: 3, borderColor: colors.yellow90 }} onPress={() => setVisible(true)}>
                <Image
                    source={ImageMission}
                    style={styles.img}
                />
            </Pressable>

            <GlobalModal
                visible={visible}
                onClose={() => setVisible(false)}
            >
                <Image source={GoalImage} style={styles.goalImage} />
                <View style={styles.headerTextContainer}>
                    <GlobalText variant="bold" style={styles.title}>
                        Gerencia
                    </GlobalText>

                    <GlobalText variant="medium" style={styles.description}>
                        Escolha oque voce vai gerenciar agora
                    </GlobalText>
                </View>

                <View style={styles.rewardsRow}>
                    <NavigateManegement icon={ImageMission2} label="Missão" value={"Criar"} navigateTo={() => { navigation.navigate("CreateMission", { journey: journey }); setVisible(false) }} />
                    {/* <NavigateManegement icon={XpImage} label="XP" value={100} navigateTo={() => navigation.navigate("CreateItemShop")}/> */}
                </View>
            </GlobalModal>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 90,
        gap: 12,
        right: 20,
        alignItems: "center",
    },
    img: {
        width: 30,
        height: 30,
    },
    imgList: {
        width: 20,
        height: 20,
    },
    goalImage: {
        width: 64,
        height: 64,
        marginBottom: 14
    },

    headerTextContainer: {
        flexDirection: "column",
        justifyContent: "center",
        gap: 18,
    },

    title: {
        fontSize: 20,
        textAlign: "center",
    },

    description: {
        fontSize: 16,
        paddingHorizontal: 18,
        textAlign: "center",
        color: colors.neutral80,
    },

    deadline: {
        fontSize: 16,
        textAlign: "center",
        color: colors.neutral90,
    },

    rewardsRow: {
        flexDirection: "row",
        gap: 16,
        paddingVertical: 16,
        width: "100%",
    },

    rewardCard: {
        alignItems: "center",
        borderRadius: 16,
        borderWidth: 3,
        borderColor: colors.gray90,
        flex: 1,
        padding: 12,
        height: 78,
        flexDirection: "row",
        justifyContent: "space-between",
    },

    rewardValue: {
        fontSize: 18,
    },

    rewardLabel: {
        fontSize: 14,
        color: colors.gray100,
    },

    rewardIcon: {
        width: 26,
        height: 26,
    },
});

