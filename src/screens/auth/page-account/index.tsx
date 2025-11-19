import { Button } from "@/src/components/ui/Button";
import { ButtonGoogle } from "@/src/components/ui/ButtonGoogle";
import { GlobalText } from "@/src/components/ui/GlobalText";
import { useAppNavigation } from "@/src/utils/navigation";
import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground, View } from "react-native";
import { styles } from "./style";
import BackgroundImage from '@/assets/images/principal/bg-account.png';
export default function PageAccount() {
  const navigation = useAppNavigation();

  const handleGoToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <ImageBackground style={styles.container} source={BackgroundImage}
      resizeMode="cover">
      <LinearGradient
        colors={[ '#0000001a', '#00000070', '#000']}
        style={styles.gradient}
      />
      <View style={styles.contentWrapper}>
        <View>
          <GlobalText variant={"bold"} style={styles.text_title}>Bem Vindo!</GlobalText>
          <GlobalText variant={"regular"} style={styles.text_regular}>Junte-se a milhares de outras pessoas que fazem parte desse incrivel ecossistema</GlobalText>
        </View>
        <View>
          <Button onPress={handleGoToLogin} color="secondary">
            ENTRA E JOGAR
          </Button>
          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <GlobalText variant={"regular"} style={styles.dividerText}>Ou acesse com</GlobalText>
            <View style={styles.dividerLine} />
          </View>
          <ButtonGoogle />

        </View>

      </View>
    </ImageBackground>
  );
}
