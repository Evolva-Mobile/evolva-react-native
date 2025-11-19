

import ImageInitial from "@/assets/images/Scenes/2x/Victory-2x.png";
import { Button } from "@/src/components/ui/Button";
import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from '../page-initial/style';


export default function PageInitial() {
    const [step, setStep] = useState(1);
    const renderCurrentPage = () => {
        switch (step) {
            case 1:
                return (
                    <> 
                        <View style={styles.imgContainer}>
                        <Image source={ImageInitial} style={styles.imgInitial} />
                        </View>
                        <View style={styles.pagConatiner}>
                            <View style={styles.bolActive}></View>
                            <View style={styles.bolInactive}></View>
                            <View style={styles.bolInactive}></View>
                        </View>
                        <Text style={{padding: 18, fontSize: 32, textAlign: "center", fontWeight: 500}}>Lorem Ipsum</Text>
                        <Button background={"#dc0d0dff"}onPress={ () => setStep(2) } >
                            Next
                        </Button>
                        <TouchableOpacity 
                            onPress={ () => setStep(3) } 
                            style={{ alignSelf: 'flex-end', padding: 10 }} 
                        >
                            <Text style={{ fontSize: 16, color: '#555' }}>
                            Skip
                            </Text>
                        </TouchableOpacity>
                    </>
                );
            case 2:
                return (
                    <>
                        <View style={styles.imgContainer}>
                        <Image source={ImageInitial} style={styles.imgInitial} />
                        </View>
                        <View style={styles.pagConatiner}>
                            <View style={styles.bolInactive}></View>
                            <View style={styles.bolActive}></View>
                            <View style={styles.bolInactive}></View>
                        </View>
                        <Text style={{padding: 18, fontSize: 32, textAlign: "center", fontWeight: 500}}>Lorem Ipsum</Text>
                        
                        <Button background={"#139c53ff"}onPress={ () => setStep(3) } >
                        Next
                        </Button>
                        <TouchableOpacity 
                            onPress={ () => setStep(3) } 
                            style={{ alignSelf: 'flex-end', padding: 10 }} 
                        >
                            <Text style={{ fontSize: 16, color: '#555' }}>
                            Skip
                            </Text>
                        </TouchableOpacity>
                    </>
                );
            case 3:
                return (
                    <>
                        <View style={styles.imgContainer}>
                        <Image source={ImageInitial} style={styles.imgInitial} />
                        </View>
                        <View style={styles.pagConatiner}>
                            <View style={styles.bolInactive}></View>
                            <View style={styles.bolInactive}></View>
                            <View style={styles.bolActive}></View>
                        </View>
                        <Text>3</Text>
                        <Button background={"#dc0d0dff"} >
                            Next
                        </Button>
                    </>     
            );
            default:
                return null;
        }
    }


return (
    <View style={{ flex: 1, padding: 16 }}>
        {renderCurrentPage()}
    </View>
)
}