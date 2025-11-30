import { View } from "react-native"
import { styles } from "./style"
import { GlobalText } from "@/src/components/ui/GlobalText";


export default function HomeJourney() {

    return (
        <View style={styles.container}>
            <GlobalText>Home Screen</GlobalText>
        </View>
    );
}

