import KeyImg from '@/assets/images/home_page/key.png';
import OpenBookImg from '@/assets/images/home_page/opne_book.png';
import JourneyOneIcon from '@/assets/images/principal/castle.png';
import JourneyTwoIcon from '@/assets/images/principal/viking-helmet.png';
import { Button } from '@/src/components/ui/Button';
import { GlobalText } from '@/src/components/ui/GlobalText';
import { Icon } from '@/src/components/ui/Icon';
import { GlobalModal } from '@/src/components/ui/Modal';
import { colors } from '@/src/styles/theme';
import { useAppNavigation } from '@/src/utils/navigation';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Image, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import { showToast } from '@/src/utils/toastShow';
import { PostRequest } from '@/src/config/api-request/PostRequest';
import { JOURNEY } from '@/src/config/api-routes/journey';
import { InputText } from '@/src/components/ui/InputText';
import { GetRequest } from '@/src/config/api-request/GetRequest';
import { RefreshableScrollView } from '@/src/components/ui/RefreshableScrollView';

type JourneyItem = {
  id: string;
  title: string;
  description: string;
  icon: any;
};

type ModalEntryProps = {
  visible: boolean
  onClose: () => void
  onRequestClose: () => void
}


const DEFAULT_LIST: JourneyItem[] = [];

export default function JourneysScreen() {
  const [query, setQuery] = useState('');
  const [showCodeModal, setShowCodeModal] = useState(false);
  const [list, setList] = useState<JourneyItem[]>(DEFAULT_LIST);
  const navigation = useAppNavigation();

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return list;
    return list.filter(j => j.title.toLowerCase().includes(term));
  }, [query]);

  const fetchPublicJourneys = useCallback(async () => {
    const data = await GetRequest(JOURNEY.PUBLIC_LIST());
    if (Array.isArray(data)) {
      const mapped: JourneyItem[] = data.map((j: any) => ({
        id: String(j.id),
        title: j.title,
        description: j.description ?? '',
        icon: j.image_url ? { uri: j.image_url } : JourneyOneIcon,
      }));
      setList(mapped);
    }
  }, []);

  useEffect(() => {
    fetchPublicJourneys();
  }, [fetchPublicJourneys]);

  
  return (
    <View style={styles.container}>
      <RefreshableScrollView refreshKey="journeys" onRefreshRequest={fetchPublicJourneys} contentContainerStyle={styles.scrollContent}>
        <View style={styles.headerRow}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Icon name="ChevronLeft" />
          </TouchableOpacity>
          <GlobalText variant="bold" style={styles.headerTitle}>Pesquisar</GlobalText>
        </View>

        <View style={styles.searchBox}>
          <Icon name="Search" color={colors.gray100} />
          <TextInput
            placeholder="Buscar"
            placeholderTextColor={colors.gray100}
            style={styles.searchInput}
            value={query}
            onChangeText={setQuery}
          />
        </View>

        <GlobalText variant="semibold" style={styles.sectionTitle}>Jornadas</GlobalText>

        <View style={styles.listContainer}>
          {filtered.map(item => (
            <TouchableOpacity key={item.id} style={styles.listItem}>
              <Image source={item.icon} style={styles.itemIcon} />
              <View style={styles.itemTexts}>
                <GlobalText variant="semibold" style={styles.itemTitle}>{item.title}</GlobalText>
                <GlobalText style={styles.itemDesc}>{item.description}</GlobalText>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </RefreshableScrollView>

      <View style={styles.bottomCtaWrapper}>
        <TouchableOpacity style={styles.bottomCta} activeOpacity={0.92} onPress={() => setShowCodeModal(true)}>
          <GlobalText variant="bold" style={styles.bottomCtaText}>Insira o código</GlobalText>
          <Image source={KeyImg} style={{ width: 22, height: 22 }} />
        </TouchableOpacity>
      </View>

      <ModalEnter
        visible={showCodeModal}
        onClose={() => setShowCodeModal(false)}
        onRequestClose={() => setShowCodeModal(false)}
      />


    </View>
  );
}

export function ModalEnter({ visible, onClose, onRequestClose }: ModalEntryProps) {
  const [code, setCode] = useState<string>("")
  const navigation = useAppNavigation();
  const handleSubmit = async () => {

    if (!code) {
      showToast.warning("Digite um codigo para entrar em uma jornada")
      return
    }
    const payload = {
      join_code: code
    }
    try {
      const response = await PostRequest(JOURNEY.JOIN(), payload)
      if (!response) {
        showToast.error(response.message || "Erro ao entrar em uma jornada.");
      }

      showToast.success("Você entrou em uma jornada!");
      onClose()
      navigation.navigate('Home')

    } catch (error) {
      console.log("Erro ao entrar em uma jornada: ", error);
      showToast.error("Ocorreu um erro inesperado.");
    }
  }
  return (
    <GlobalModal
      visible={visible}
      onRequestClose={onRequestClose}
      onClose={onClose}
      contentStyle={{ width: '100%' }}
    >
      <View style={styles.codeModalContent}>
        <Image source={OpenBookImg} style={{ width: 40, height: 40 }} />

        <GlobalText variant="bold" style={styles.codeTitle}>
          Código da Jornada
        </GlobalText>

        <GlobalText style={styles.codeSubtitle}>
          Você precisa digitar ou escanear o código válido de uma jornada
        </GlobalText>


        <InputText
          label="Codigo"
          value={code}
          onChangeText={(text) => setCode(text)}
          icon={"Code"} />


        <GlobalText style={styles.orText}>Ou</GlobalText>

        <TouchableOpacity style={styles.scanButton}>
          <Icon name="Scan" color={colors.neutral100} />
          <GlobalText variant="semibold">Escanear</GlobalText>
        </TouchableOpacity>

        <Button color="primary" onPress={handleSubmit}>
          Confirmar
        </Button>
      </View>
    </GlobalModal>
  );
}


