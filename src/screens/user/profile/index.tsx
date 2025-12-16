
import { View, Image, ScrollView } from "react-native";
import Img from "@/assets/images/principal/elf.png";
import ImgExperience from "@/assets/images/principal/crystal.png";
import ImgCoin from "@/assets/images/principal/coin.png";
import ImgFriends from "@/assets/images/principal/high-five.png";
import ImgStorys from "@/assets/images/principal/castle.png";
import { styles } from "./style";
import { Icon } from "@/src/components/ui/Icon";
import { colors } from "@/src/styles/theme";
import { useAppNavigation } from "@/src/utils/navigation";
import { GlobalText } from "@/src/components/ui/GlobalText";
import { useContext } from "react";
import { HeaderBack } from "@/src/components/layout/headerBack";
import { AuthContext } from "@/src/contexts/AuthContext";

export default function ProfileScreen() {
    const navigation = useAppNavigation();
    const { user } = useContext(AuthContext);

    return (<View style={{ flex: 1, backgroundColor: "#FFF" }}>
        <HeaderBack title={"Perfil"} onPress={navigation.goBack} config/>
        <ScrollView
            contentContainerStyle={styles.containerScroll}
            showsVerticalScrollIndicator={false}
        >

            <View>
                <View style={styles.headerContainer}>
                    <View style={styles.avatarContainer}>
                        <Image source={user?.avatar_url ?? Img} style={styles.avatarImg} />
                        <View style={styles.tagsContainer}>
                            <View>
                                <GlobalText style={styles.name} variant="bold">{user?.name ?? "Carregando..."}</GlobalText>
                                <GlobalText style={styles.tag} variant="medium">Edoc</GlobalText>
                            </View>
                            <View style={styles.dateContainer}>
                                <Icon name="Clock" color={colors.gray100} size={16} />
                                <GlobalText style={styles.date} variant="medium">Desde novembro 2025</GlobalText>
                            </View>
                        </View>
                    </View>
                    
                </View>

                <View>
                    <View style={styles.infosContainer}>
                        {/* Estatisticas */}
                        <View style={styles.listContainer}>
                            <GlobalText variant="semibold" style={styles.title}>Estatisticas</GlobalText>
                            <View style={styles.statisticsList}>
                                <View style={styles.statisticsItem}>

                                    <View>
                                        <GlobalText variant="bold" style={styles.statisticsText}>239283</GlobalText>
                                        <GlobalText style={styles.statisticsSubText}>Total Moedas</GlobalText>
                                    </View>
                                    <Image source={ImgCoin} style={styles.statisticsImg} />
                                </View>
                                <View style={styles.statisticsItem}>

                                    <View>
                                        <GlobalText variant="bold" style={styles.statisticsText}>239283</GlobalText>
                                        <GlobalText style={styles.statisticsSubText}>XP Acumulado</GlobalText>
                                    </View>
                                    <Image source={ImgExperience} style={styles.statisticsImg} />
                                </View>
                                <View style={styles.statisticsItem}>

                                    <View>
                                        <GlobalText variant="bold" style={styles.statisticsText}>4</GlobalText>
                                        <GlobalText style={styles.statisticsSubText}>Amigos</GlobalText>
                                    </View>
                                    <Image source={ImgFriends} style={styles.statisticsImg} />
                                </View>
                                <View style={styles.statisticsItem}>

                                    <View>
                                        <GlobalText variant="bold" style={styles.statisticsText}>2</GlobalText>
                                        <GlobalText style={styles.statisticsSubText}>Jornadas</GlobalText>
                                    </View>
                                    <Image source={ImgStorys} style={styles.statisticsImg} />
                                </View>
                            </View>
                        </View>

                        {/* Conquistas */}
                        <View style={styles.listContainer}>
                            <GlobalText variant="semibold" style={styles.title}>Conquistas</GlobalText>
                            <View style={styles.achievementsList}>
                                { }
                            </View>
                        </View>

                        {/* Atividades */}
                        <View style={styles.listContainer}>
                            <GlobalText variant="semibold" style={styles.title}>Atividades</GlobalText>
                            <View style={styles.achievementsList}>
                                { }
                            </View>
                        </View>
                    </View>

                </View>
            </View>
        </ScrollView>
    </View>
    );
}