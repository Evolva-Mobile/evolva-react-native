import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Image, StyleSheet, View } from 'react-native';

import JourneyScreen from '@/src/screens/journey/home-journey';
import ChatScreen from '@/src/screens/journey/chat';
import RankingScreen from '@/src/screens/journey/ranking';
import MoreScreen from '@/src/screens/journey/details';

import ImageHome from '@/assets/images/components/tabs/target.png'
import ImageChat from '@/assets/images/components/tabs/message.png'
import ImageRank from '@/assets/images/components/tabs/podium.png'
import ImageMission from '@/assets/images/components/tabs/magic-wand.png'
import ImageMore from '@/assets/images/components/tabs/more.png'

import { colors } from '@/src/styles/theme';
import RegisterMissionScreen from '@/src/screens/journey/create-mission';
import { useContext } from 'react';

import { AuthContext } from '@/src/contexts/AuthContext';
import { JourneyResponse } from '@/src/screens/journey/main-journey/type';


const Tab = createBottomTabNavigator();

type TabsJourneyProps = {
    journey?: JourneyResponse
}
export default function TabsJorney({ journey }: TabsJourneyProps) {
    const { user } = useContext(AuthContext);
    const loggedUser = journey?.data.members?.find(
        (u) => u.id === user?.id
    );

    const isMaster = loggedUser?.is_master
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: 75,
                    paddingTop: 18,
                    paddingBottom: 18,
                    borderTopWidth: 0,
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.15,
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
                name="Home"
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
            >
                {() => <JourneyScreen journey={journey} />}
            </Tab.Screen>

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

            {isMaster && (
                <Tab.Screen
                    name="Missions"
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View
                                style={[styles.iconBackground, { backgroundColor: focused ? "#FFFFDD20" : "transparent", borderColor: focused ? colors.primary : "transparent" }]}
                            >
                                <Image
                                    source={ImageMission}
                                    style={styles.img}
                                />
                            </View>
                        )
                    }}
                >
                    {() => <RegisterMissionScreen journey={journey} />}
                </Tab.Screen>
            )}

            <Tab.Screen
                name="More"
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
            >

                {() => <MoreScreen journey={journey} />}
            </Tab.Screen>
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