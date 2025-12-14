import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Image, ImageSourcePropType, ScrollView, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { GlobalText } from "@/src/components/ui/GlobalText";
import { Icon } from "@/src/components/ui/Icon";
import { colors } from "@/src/styles/theme";
import { useAppNavigation } from "@/src/utils/navigation";

import HandshakeIcon from "@/assets/images/home_page/handshake.png";
import CastleImg from "@/assets/images/home_page/inicial_castle.png";
import SearchImg from "@/assets/images/home_page/lupa.png";
import FeatherImg from "@/assets/images/home_page/pena.png";
import LevelIcon from "@/assets/images/perfil/crown.png";
import JourneyOneIcon from "@/assets/images/principal/castle.png";
import CoinsIcon from "@/assets/images/principal/coin.png";
import JourneyTwoIcon from "@/assets/images/principal/viking-helmet.png";

import { styles } from "./style";
import { ModalEnter } from "../journeys";

type StoredUser = {
    level?: number;
    accountLevel?: number;
    coins?: number;
    balance?: number;
    walletCoins?: number;
    name?: string;
};

type JourneyCard = {
    id: string;
    title: string;
    membersLabel: string;
    icon: ImageSourcePropType;
    hasNotification?: boolean;
};

type BottomAction = {
    id: string;
    icon: Parameters<typeof Icon>[0]["name"];
    onPress?: () => void;
};

const DEFAULT_JOURNEYS: JourneyCard[] = [
    {
        id: "journey-1",
        title: "Jornada 1",
        membersLabel: "70 members",
        icon: JourneyOneIcon,
    },
    {
        id: "journey-2",
        title: "Jornada 2",
        membersLabel: "10 members",
        icon: JourneyTwoIcon,
        hasNotification: true,
    },
];

export default function Home() {
    const navigation = useAppNavigation();
    const [userStats, setUserStats] = useState<{ level?: number; coins?: number }>({
        level: 22,
        coins: 22317,
    });

    const [journeys, setJourneys] = useState<JourneyCard[]>(DEFAULT_JOURNEYS);
    const [showCodeModal, setShowCodeModal] = useState(false);
    const [activeBottomAction, setActiveBottomAction] = useState<string>("home");

    const statsCards = useMemo(
        () => [
            {
                id: "level",
                label: "Nível da Conta",
                value: userStats.level,
                icon: LevelIcon,
            },
            {
                id: "coins",
                label: "Moedas",
                value: userStats.coins,
                icon: CoinsIcon,
            },
        ],
        [userStats.coins, userStats.level]
    );

    const bottomActions: BottomAction[] = useMemo(
        () => [
            {
                id: "home",
                icon: "Home",
                onPress: () => setActiveBottomAction("home"),
            },
            {
                id: "search",
                icon: "Search",
                onPress: () => {
                    setActiveBottomAction("search");
                    navigation.navigate("Journeys");
                },
            },
            {
                id: "quests",
                icon: "Feather",
                onPress: () => { setActiveBottomAction("quests"); navigation.navigate("CreateJourney"); }
            },
            {
                id: "profile",
                icon: "User",
                onPress: () => {
                    setActiveBottomAction("profile");
                    navigation.navigate("Profile");
                },
            },
        ],
        [navigation]
    );

    const loadUserFromStorage = useCallback(async () => {
        try {
            const stored = await AsyncStorage.getItem("@user");
            if (!stored) {
                return;
            }

            const parsed: StoredUser = JSON.parse(stored);
            setUserStats((prev) => ({
                level: parsed.level ?? parsed.accountLevel ?? prev.level,
                coins: parsed.coins ?? parsed.balance ?? parsed.walletCoins ?? prev.coins,
            }));
        } catch (error) {
            console.warn("Não foi possível carregar os dados do usuário", error);
        }
    }, []);

    const loadJourneysFromStorage = useCallback(async () => {
        try {
            const storedJourneys = await AsyncStorage.getItem("@journeys");
            if (storedJourneys) {
                const parsed: JourneyCard[] = JSON.parse(storedJourneys);
                // Validate basic shape
                if (Array.isArray(parsed)) {
                    setJourneys(parsed.map(j => ({
                        ...j,
                        // Fallback icon if missing
                        icon: j.icon || JourneyOneIcon,
                    })));
                }
            }
        } catch (error) {
            console.warn("Não foi possível carregar as jornadas", error);
        }
    }, []);

    useEffect(() => {
        loadUserFromStorage();
        loadJourneysFromStorage();
    }, [loadUserFromStorage, loadJourneysFromStorage]);

    // Quando a Home ganha foco (volta da tela de busca), resetar o botão ativo para 'home'
    useFocusEffect(
        useCallback(() => {
            setActiveBottomAction("home");
        }, [])
    );

    const formatStatValue = (value?: number) => {
        if (value === null || value === undefined) {
            return "--";
        }

        return value.toLocaleString("pt-BR");
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <ScrollView
                    contentContainerStyle={styles.scrollContent}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.header}>
                        <GlobalText variant="bold" style={styles.headerTitle}>
                            Evolva
                        </GlobalText>

                        <View style={styles.statsRow}>
                            {statsCards.map((card) => (
                                <View key={card.id} style={styles.statCard}>
                                    <Image source={card.icon} style={styles.statIcon} />
                                    <View style={styles.statTexts}>
                                        <GlobalText variant="bold" style={styles.statValue}>
                                            {formatStatValue(card.value)}
                                        </GlobalText>
                                        <GlobalText style={styles.statLabel}>{card.label}</GlobalText>
                                    </View>
                                </View>
                            ))}
                        </View>
                    </View>

                    <View style={styles.section}>
                        <GlobalText variant="semibold" style={styles.sectionTitle}>
                            Jornadas
                        </GlobalText>

                        <View style={styles.journeyCarousel}>
                            <ScrollView
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={styles.journeyList}
                            >
                                {journeys.map((journey) => (
                                    <TouchableOpacity
                                        key={journey.id}
                                        onPress={() => navigation.navigate("Journey", {journeyId: "13",})}
                                        activeOpacity={0.85}
                                        style={styles.journeyCard}
                                    >
                                        <Image source={journey.icon} style={styles.journeyIcon} />
                                        <View style={styles.journeyTexts}>
                                            <GlobalText variant="semibold" style={styles.journeyTitle}>
                                                {journey.title}
                                            </GlobalText>
                                            <GlobalText style={styles.journeySubtitle}>
                                                {journey.membersLabel}
                                            </GlobalText>
                                        </View>

                                        {journey.hasNotification && <View style={styles.journeyBadge} />}
                                    </TouchableOpacity>
                                ))}

                                <TouchableOpacity
                                    activeOpacity={0.9}
                                    style={styles.createJourneyCard}
                                    onPress={() => navigation.navigate('CreateJourney')}
                                >
                                    <View style={styles.createJourneyIconContainer}>
                                        <Icon name="Plus" color={colors.neutral100} size={28} />
                                    </View>
                                    <GlobalText variant="bold" style={styles.createJourneyText}>
                                        Criar Jornada
                                    </GlobalText>
                                </TouchableOpacity>
                            </ScrollView>

                        </View>
                    </View>

                    <TouchableOpacity
                        activeOpacity={0.9}
                        style={styles.ctaCard}
                         onPress={() => setShowCodeModal(true)}
                    >
                        <View style={styles.ctaTexts}>
                            <GlobalText variant="bold" style={styles.ctaTitle}>
                                Juntar-se agora para uma jornada
                            </GlobalText>
                            <GlobalText style={styles.ctaSubtitle}>Clique no card</GlobalText>
                        </View>
                        <Image source={HandshakeIcon} style={styles.ctaImage} />
                    </TouchableOpacity>

                    <ModalEnter
                        visible={showCodeModal}
                        onClose={() => setShowCodeModal(false)}
                        onRequestClose={() => setShowCodeModal(false)}
                    />
                </ScrollView>

                <View style={styles.bottomBarWrapper}>
                    <View style={styles.bottomBar}>
                        {bottomActions.map((action) => {
                            const isActive = activeBottomAction === action.id;
                            return (
                                <TouchableOpacity
                                    key={action.id}
                                    activeOpacity={0.9}
                                    style={[
                                        styles.bottomAction,
                                        isActive && styles.bottomActionActive,
                                    ]}
                                    onPress={action.onPress}
                                >
                                    {action.id === 'home' ? (
                                        <Image source={CastleImg} style={{ width: 24, height: 24 }} />
                                    ) : action.id === 'search' ? (
                                        <Image source={SearchImg} style={{ width: 24, height: 24 }} />
                                    ) : action.id === 'quests' ? (
                                        <Image source={FeatherImg} style={{ width: 24, height: 24 }} />
                                    ) : (
                                        <Icon
                                            name={action.icon}
                                            size={24}
                                            color={isActive ? colors.withe100 : colors.gray100}
                                        />
                                    )}
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

