import { View, Text } from "react-native";
import{styles} from "./style";
import { Button } from "@/src/components/ui/Button";
import { GlobalText } from "@/src/components/ui/GlobalText";
import { useAppNavigation } from "@/src/utils/navigation";


export default function PageAccount() {
  const navigation = useAppNavigation();

  const handleGoToLogin = () => {
    navigation.navigate('Login');
  };



  return (
    <View style={styles.container}>
      <View>  
        <GlobalText variant={"bold"} style={styles.text_title}>Bem Vindo!</GlobalText>
        <GlobalText variant={"regular"} style={styles.text_regular}>Junte-se a milhares de outras pessoas que fazem parte desse incrivel ecossistema</GlobalText>
      </View>
      <View>
        <Button onPress={handleGoToLogin}>
          Entra e Jogar
        </Button>
      </View>

    </View>
  );
}
