import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Image, StyleSheet, View } from 'react-native';

import JourneyScreen from '@/src/screens/journey/home-journey';
import ChatScreen from '@/src/screens/journey/chat';
import RankingScreen from '@/src/screens/journey/ranking';
import MoreScreen from '@/src/screens/journey/details';

import ImageHome from '@/assets/images/components/tab-journey/target.png'
import ImageChat from '@/assets/images/components/tab-journey/message.png'
import ImageRank from '@/assets/images/components/tab-journey/podium.png'
import ImageMore from '@/assets/images/components/tab-journey/more.png'
import { colors } from '@/src/styles/theme';
const Tab = createBottomTabNavigator();

export default function TabsJorney() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: 75,
                    paddingTop: 18,
                    paddingBottom: 18,
                    paddingHorizontal: 16,
                    borderTopWidth: 0,
                    // 🔹 Sombra customizada (Android + iOS)
                    shadowColor: "#0000026",
                    shadowOffset: { width: 0, height: 0 },
                    shadowRadius: 20,
                    elevation: 8,

                    backgroundColor: "#FFF",
                },
                tabBarItemStyle: {
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }
            }}
        >

            <Tab.Screen
                name="Hone"
                component={JourneyScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={[styles.iconBackground, { backgroundColor: focused ? "#FFFFDD20" : "transparent", borderColor: focused ? colors.primary : "transparent" }]}
                        >
                            <Image
                                source={ImageHome}
                                style={styles.img}
                            />
                        </View>
                    )
                }}

            />

            <Tab.Screen
                name="Chat"
                component={ChatScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={[styles.iconBackground, { backgroundColor: focused ? "#FFFFDD20" : "transparent", borderColor: focused ? colors.primary : "transparent" }]}
                        >
                            <Image
                                source={ImageChat}
                                style={styles.img}
                            />
                        </View>
                    )
                }}
            />

            <Tab.Screen
                name="Ranking"
                component={RankingScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={[styles.iconBackground, { backgroundColor: focused ? "#FFFFDD20" : "transparent", borderColor: focused ? colors.primary : "transparent" }]}
                        >
                            <Image
                                source={ImageRank}
                                style={styles.img}
                            />
                        </View>
                    )
                }}
            />

            <Tab.Screen
                name="More"
                component={MoreScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={[styles.iconBackground, { backgroundColor: focused ? "#FFFFDD20" : "transparent", borderColor: focused ? colors.primary : "transparent" }]}
                        >
                            <Image
                                source={ImageMore}
                                style={styles.img}
                            />
                        </View>
                    )
                }}
            />
        </Tab.Navigator>
    );
}
const styles = StyleSheet.create({
    img: {
        width: 30,
        height: 30,
    },
    iconBackground: {
        padding: 12,
        borderRadius: 16,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
    }
});