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
import { useMemo, useState } from 'react';
import { Image, ScrollView, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './style';

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


const DEFAULT_LIST: JourneyItem[] = [
  { id: '1', title: 'Jornada 1', description: 'Lorem ipsisdas blablal laflasd lasld...', icon: JourneyOneIcon },
  { id: '2', title: 'Jornada 2', description: 'Lorem ipsisdas blablal laflasd lasld...', icon: JourneyTwoIcon },
  { id: '3', title: 'Jornada 3', description: 'Lorem ipsisdas blablal laflasd lasld...', icon: JourneyTwoIcon },
  { id: '4', title: 'Jornada 4', description: 'Lorem ipsisdas blablal laflasd lasld...', icon: JourneyTwoIcon },
  { id: '5', title: 'Jornada 5', description: 'Lorem ipsisdas blablal laflasd lasld...', icon: JourneyTwoIcon },
  { id: '6', title: 'Jornada 6', description: 'Lorem ipsisdas blablal laflasd lasld...', icon: JourneyTwoIcon },
];

export default function JourneysScreen() {
  const [query, setQuery] = useState('');
  const [showCodeModal, setShowCodeModal] = useState(false);
  const navigation = useAppNavigation();

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return DEFAULT_LIST;
    return DEFAULT_LIST.filter(j => j.title.toLowerCase().includes(term));
  }, [query]);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
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
      </ScrollView>

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

        <View style={styles.codeInputBox}>
          <Icon name="CircleDashed" color={colors.gray100} />
          <TextInput
            placeholder="Código"
            placeholderTextColor={colors.gray100}
            style={styles.codeInput}
          />
        </View>

        <GlobalText style={styles.orText}>Ou</GlobalText>

        <TouchableOpacity style={styles.scanButton}>
          <Icon name="Scan" color={colors.neutral100} />
          <GlobalText variant="semibold">Escanear</GlobalText>
        </TouchableOpacity>

        <Button color="primary" onPress={onClose}>
          Confirmar
        </Button>
      </View>
    </GlobalModal>
  );
}


