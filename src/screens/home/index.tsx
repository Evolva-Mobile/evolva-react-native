import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { Image, ImageSourcePropType, ScrollView, TouchableOpacity, View, Switch, ActivityIndicator } from "react-native";
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
import Avatar from "@/assets/images/perfil/elf.png";

import { styles } from "./style";
import { ModalEnter } from "../journeys";
import { GetRequest } from "@/src/config/api-request/GetRequest";
import { JOURNEY } from "@/src/config/api-routes/journey";
import { AuthContext } from "@/src/contexts/AuthContext";
import { BottomAction, JourneyCard, JourneyData } from "./interface";


export default function Home() {
    const navigation = useAppNavigation();
    const { user } = useContext(AuthContext);
    const [journeys, setJourneys] = useState<JourneyData[]>([]);
    const [showCodeModal, setShowCodeModal] = useState(false);
    const [activeBottomAction, setActiveBottomAction] = useState<string>("home");

    const statsCards = useMemo(
        () => [
            {
                id: "level",
                label: "Nível da Conta",
                value: user?.level,
                icon: user?.avatar_url || Avatar,
            },
            {
                id: "coins",
                label: "Moedas",
                value: user?.coins,
                icon: CoinsIcon,
            },
        ],
        [user?.coins, user?.level]
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

    const getJourney = async () => {
        try {
            const response = await GetRequest(JOURNEY.GETBYUSER())
            if (response) {
                setJourneys(response.data)
                console.log(response)
            }
        } catch (error) {
            console.log("erro ao trazer dados: ", error);
        }
    }

    useEffect(() => {
        getJourney()
    }, [])


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
                                {journeys?.length > 0 && (
                                    journeys.map((journey) => (
                                        <TouchableOpacity
                                            key={journey.id}
                                            onPress={() => navigation.navigate("Journey", { journeyId: String(journey.id) })}
                                            activeOpacity={0.85}
                                            style={styles.journeyCard}
                                        >
                                            {journey.image_url ? (
                                                <Image source={{ uri: journey.image_url }} style={styles.journeyIcon} />
                                            ) : (
                                                <Image source={JourneyOneIcon} style={styles.journeyIcon} />
                                            )}
                                            <View style={styles.journeyTexts}>
                                                <GlobalText variant="semibold" style={styles.journeyTitle}>
                                                    {journey.title}
                                                </GlobalText>
                                                <GlobalText style={styles.journeySubtitle}>
                                                    {journey.members.length} Membros
                                                </GlobalText>
                                            </View>

                                            {/* {journey.hasNotification && <View style={styles.journeyBadge} />} */}
                                        </TouchableOpacity>
                                    ))

                                )}


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
                        onGetJouneys={() => getJourney()}
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
                                        <Image source={user?.avatar_url ?? Avatar} style={{ width: 24, height: 24 }} />
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

