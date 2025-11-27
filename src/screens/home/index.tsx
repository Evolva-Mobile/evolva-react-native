
export default function Home() {
    const navigation = useAppNavigation();
    const [user, setUser] = useState<UserProps>({
        email: "",
        password: ""
    });

    const handleSubmit = async () => {
        try {
            const response = await PostRequest(USER.LOGIN(), user)
            if (response) {
                navigation.navigate('Settings')
            }
        } catch (error) {
            console.log("Erro ao logar na conta: ", error);
        }
    }


    return (
        <View style={styles.container}>
            <View style={styles.footerText}>
                <GlobalText>Ainda não tem uma conta? </GlobalText>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <GlobalText style={styles.linkFooterText}>Criar conta</GlobalText>
                </TouchableOpacity>
            </View>
        </View>
    );
}

