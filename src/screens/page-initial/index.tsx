

import ImageInitial from "@/assets/images/principal/castle.png";
import { Button } from "@/src/components/ui/Button";
import { useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { styles } from '../page-initial/style';
import { GlobalText } from "@/src/components/ui/GlobalText";
import { useAppNavigation } from "@/src/utils/navigation";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function PageInitial() {
    const [step, setStep] = useState(1);
    const navigation = useAppNavigation();

    const handleEnter = async () => {
        await AsyncStorage.setItem("@onboarding_seen", "true");
        navigation.navigate('PageAccount')
    };

    const renderCurrentPage = () => {
        switch (step) {
            case 1:
                return (
                    <>
                        <View style={styles.topContainer}>
                            <TouchableOpacity onPress={() => navigation.navigate('PageAccount')}>
                                <GlobalText style={styles.textSkip}>
                                    Pular
                                </GlobalText>
                            </TouchableOpacity>
                            <View style={styles.itensContent}>
                                <View style={styles.imgContainer}>
                                    <Image source={ImageInitial} style={styles.imgInitial} />
                                </View>
                                <View style={styles.pagConatiner}>
                                    <View style={styles.bolActive}></View>
                                    <View style={styles.bolInactive}></View>
                                    <View style={styles.bolInactive}></View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.footerContainer}>
                            <View style={styles.textContent}>
                                <GlobalText variant="bold" style={styles.title}>Lorem Ipsum</GlobalText>
                                <GlobalText variant="medium" style={styles.subInfo}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </GlobalText>
                            </View>
                            <Button color="primary" onPress={() => setStep(2)} >
                                Próximo
                            </Button>
                        </View>
                    </>
                );
            case 2:
                return (
                    <>
                        <View style={styles.topContainer}>
                            <TouchableOpacity onPress={() => navigation.navigate('PageAccount')}>
                                <GlobalText style={styles.textSkip}>
                                    Pular
                                </GlobalText>
                            </TouchableOpacity>
                            <View style={styles.itensContent}>
                                <View style={styles.imgContainer}>
                                    <Image source={ImageInitial} style={styles.imgInitial} />
                                </View>
                                <View style={styles.pagConatiner}>
                                    <View style={styles.bolInactive}></View>
                                    <View style={styles.bolActive}></View>
                                    <View style={styles.bolInactive}></View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.footerContainer}>
                            <View style={styles.textContent}>
                                <GlobalText variant="bold" style={styles.title}>Lorem Ipsum</GlobalText>
                                <GlobalText variant="medium" style={styles.subInfo}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </GlobalText>
                            </View>

                            <Button color="secondary" onPress={() => setStep(3)} >
                                Próximo
                            </Button>
                        </View>
                    </>
                );
            case 3:
                return (
                    <>
                        <View style={styles.topContainer}>
                            <View style={{ height: 19 }}>
                            </View>
                            <View style={styles.itensContent}>
                                <View style={styles.imgContainer}>
                                    <Image source={ImageInitial} style={styles.imgInitial} />
                                </View>
                                <View style={styles.pagConatiner}>
                                    <View style={styles.bolInactive}></View>
                                    <View style={styles.bolInactive}></View>
                                    <View style={styles.bolActive}></View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.footerContainer}>
                            <View style={styles.textContent}>
                                <GlobalText variant="bold" style={styles.title}>Lorem Ipsum</GlobalText>
                                <GlobalText variant="medium" style={styles.subInfo}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </GlobalText>
                            </View>

                            <Button color="primary" onPress={handleEnter} >
                                Próximo
                            </Button>
                        </View>
                    </>
                );
            default:
                return null;
        }
    }


    return (
        <View style={{ flex: 1, padding: 16, justifyContent: 'space-between' }}>
            {renderCurrentPage()}
        </View>
    )
}