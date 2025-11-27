
import { Image, TouchableOpacity, View } from 'react-native';
import Img from "@/assets/images/principal/viking-helmet.png";

import { InputText } from '@/src/components/ui/InputText';
import { useAppNavigation } from '@/src/utils/navigation';
import { styles } from './style';
import { Button } from '@/src/components/ui/Button';
import { GlobalText } from '@/src/components/ui/GlobalText';

export type UserProps = {
    email: string;
    password: string;
};

export default function ForgotPassword() {
    const navigation = useAppNavigation();

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.headerContainer}>
                    <Image source={Img} style={styles.img} />
                    <GlobalText variant='bold' style={styles.title}>
                        Esqueci minha senha
                    </GlobalText>
                </View>

                <View style={styles.formUser}>
                    <InputText
                        label="E-mail"
                        // value={""}
                        // onChangeText={(text) => setUser({ ...user, email: text })}
                        icon={'User'}
                    />
                </View>
            </View>

            <View style={styles.footerContainer}>
                <Button onPress={() => {}} icon='Swords'>
                    Recuperar
                </Button>

                <TouchableOpacity onPress={() => navigation.goBack()}  >
                    <GlobalText style={styles.linkFooterText} variant='bold'>Voltar</GlobalText>
                </TouchableOpacity>

            </View>
        </View>
    );
}

