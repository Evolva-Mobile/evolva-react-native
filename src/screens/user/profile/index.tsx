
import { View, Image, TouchableOpacity } from "react-native";
import Img from "@/assets/images/principal/elf.png";
import ImgStatistics from "@/assets/images/principal/crystal.png";
import { styles } from "./style";
import { Icon } from "@/src/components/ui/Icon";
import { colors } from "@/src/styles/theme";
import { useAppNavigation } from "@/src/utils/navigation";
import { GlobalText } from "@/src/components/ui/GlobalText";
import { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProfileScreen() {
    const navigation = useAppNavigation();
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const loadUser = async () => {
            const data = await AsyncStorage.getItem("@user");
            if (data) {
                setUser(JSON.parse(data));
            }
        };

        loadUser();
    }, []);
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.headerContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                        <Icon name="Bolt" color={colors.neutral100} size={28} />
                    </TouchableOpacity>

                </View>

                <View style={styles.profileContainer}>
                    <View style={styles.avatarContainer}>
                        <Image source={Img} style={styles.avatarImg} />
                    </View>
                    <View style={styles.tagsContainer}>
                        <GlobalText style={styles.name} variant="bold"> {user?.name ?? "Carregando..."}</GlobalText>
                        <GlobalText style={styles.tag}>Edoc</GlobalText>
                    </View>

                    <View style={styles.infosContainer}>

                        {/* Estatisticas */}
                        <View style={styles.listContainer}>
                            <GlobalText variant="semibold" style={styles.title}>Estatisticas</GlobalText>
                            <View style={styles.statisticsList}>
                                <View style={styles.statisticsItem}>
                                    <Image source={ImgStatistics} style={styles.statisticsImg} />
                                    <View>
                                        <GlobalText variant="bold" style={styles.statisticsText}>239283</GlobalText>
                                        <GlobalText style={styles.statisticsSubText}>XP Acumulado</GlobalText>
                                    </View>
                                </View>
                                <View style={styles.statisticsItem}>
                                    <Icon name="Users" size={25} />
                                    <View>
                                        <GlobalText variant="bold" style={styles.statisticsText}>4</GlobalText>
                                        <GlobalText style={styles.statisticsSubText}>Amigos</GlobalText>
                                    </View>
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
                    </View>

                </View>
            </View>

        </View>
    );
}