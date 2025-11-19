import { Button } from "@/src/components/ui/Button";
import { ButtonGoogle } from "@/src/components/ui/ButtonGoogle";
import { GlobalText } from "@/src/components/ui/GlobalText";
import { useAppNavigation } from "@/src/utils/navigation";
import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground, View } from "react-native";
import { styles } from "./style";

export default function PageAccount() {
  const navigation = useAppNavigation();

  const handleGoToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <ImageBackground style={styles.container} source={require('@/assets/images/principal/imagem_teste.jpeg')}>
      <LinearGradient
        colors={['transparent','transparent','rgba(0,0,0,0.1)', '#211c1cff', '#000']}
        style={styles.gradient} 
      />
      <View style={styles.contentWrapper}>
        <View>
          <GlobalText variant={"bold"} style={styles.text_title}>Bem Vindo!</GlobalText>
          <GlobalText variant={"regular"} style={styles.text_regular}>Junte-se a milhares de outras pessoas que fazem parte desse incrivel ecossistema</GlobalText>
        </View>
        <View>
          <Button onPress={handleGoToLogin}>
            ENTRA E JOGAR
          </Button>
          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <GlobalText variant={"regular"} style={styles.dividerText}>Ou acesse com</GlobalText>
            <View style={styles.dividerLine} />
          </View>
          <ButtonGoogle onPress={handleGoToLogin}>
          </ButtonGoogle>

        </View>

      </View>
    </ImageBackground>
  );
}
