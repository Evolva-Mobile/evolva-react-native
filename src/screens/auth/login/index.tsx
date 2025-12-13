import ImageLogin from "@/assets/images/principal/coin.png";
import { Button } from '@/src/components/ui/Button';
import { GlobalText } from '@/src/components/ui/GlobalText';
import { InputText } from '@/src/components/ui/InputText';
import { PostRequest } from '@/src/config/api-request/PostRequest';
import { USER } from '@/src/config/api-routes/user';
import { AuthContext } from "@/src/contexts/AuthContext";
import { useAppNavigation } from '@/src/utils/navigation';
import { showToast } from '@/src/utils/toastShow';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useContext, useState } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { styles } from './style';

export type UserProps = {
    email: string;
    password: string;
};

export default function LoginScreen() {
    const { login } = useContext(AuthContext);

    const navigation = useAppNavigation();
    const [user, setUser] = useState<UserProps>({
        email: "",
        password: ""
    });

    const handleSubmit = async () => {
        try {
            const response = await PostRequest(USER.LOGIN(), user)
            if (response?.token && response?.user) {
                await AsyncStorage.setItem("@token", response.token);
                await AsyncStorage.setItem("@user", JSON.stringify(response.user));

                showToast.success(response.message);
                await login(response.user);

                return
            }
            showToast.error(response.message);
        } catch (error) {
            showToast.error("Algo deu errado");
        }
    }


    return (
        <View style={styles.container}>
            <View>
                <View style={styles.headerContainer}>
                    <Image source={ImageLogin} style={styles.img} />
                    <GlobalText variant='bold' style={styles.title}>
                        Entrar
                    </GlobalText>
                </View>

                <View style={styles.formUser}>
                    <InputText
                        label="E-mail"
                        value={user.email}
                        onChangeText={(text) => setUser({ ...user, email: text })}
                        icon={'User'}
                    />

                    <View>
                        <InputText
                            label="Senha"
                            type="password"
                            value={user.password}
                            onChangeText={(text) => setUser({ ...user, password: text })}
                            icon={'KeySquare'}
                        />

                        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                            <GlobalText variant={'semibold'} style={styles.forgotPassword}>Esqueci minha senha</GlobalText>
                        </TouchableOpacity>
                        <GlobalText />
                    </View>


                </View>
            </View>

            <View style={styles.footerContainer}>
                <Button onPress={handleSubmit} icon='Swords'>
                    Entrar
                </Button>

                <TouchableOpacity onPress={() => navigation.navigate('Register')}  >
                    <GlobalText style={styles.linkFooterText} variant='bold'>Criar conta</GlobalText>
                </TouchableOpacity>

            </View>
        </View>
    );
}

