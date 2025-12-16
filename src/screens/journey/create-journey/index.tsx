
import { HeaderBack } from "@/src/components/layout/headerBack";
import { Button } from "@/src/components/ui/Button";
import { GlobalText } from "@/src/components/ui/GlobalText";
import { InputText } from "@/src/components/ui/InputText";
import { InputToggle } from "@/src/components/ui/InputToggle";
import { GlobalModal } from "@/src/components/ui/Modal";
import { colors } from "@/src/styles/theme";
import { useAppNavigation } from "@/src/utils/navigation";
import { useEffect, useState } from "react";
import { Image, ImageSourcePropType, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { brasaoList } from "./brasaoList";
import { styles } from "./style";
import { PostRequest } from "@/src/config/api-request/PostRequest";
import { JOURNEY } from "@/src/config/api-routes/journey";
import { showToast } from "@/src/utils/toastShow";
import Img from "@/assets/images/components/journey/avatars/banner.png"
type JourneyProps = {
    title: string;
    description: string;
    is_private: boolean;
    image_url: string;
};

type SelectedImgProp = {
    uri: string;
    width: number;
    height: number;
};

type ModalChoiceImgProps = {
    visible: boolean;
    onConfirm: (img: SelectedImgProp) => void;
    setVisible: (value: boolean) => void;
};

export default function CreateJourney() {
    const navigation = useAppNavigation();
    const [visible, setVisible] = useState(false);
    const [selectedAvatar, setSelectedAvatar] = useState<SelectedImgProp | null>(
        {
            width: 128,
            uri: '/assets/?unstable_path=.%2Fassets%2Fimages%2Fcomponents%2Fjourney%2Favatars/standard.png',
            height: 128
        }
    );

    const [journey, setJourney] = useState<JourneyProps>({
        title: "",
        description: "",
        is_private: false,
        image_url: ""
    })

    const clearFilds = () => {
        setJourney({
            title: "",
            description: "",
            is_private: false,
            image_url: ""
        })
    }

    const handleSubmit = async () => {

        if (!journey.title) {
            showToast.warning("Digite um titulo para sua joranda")
            return
        }
        else if (!journey.description) {
            showToast.warning("Digite uma descrição para sua joranda")
            return
        }
        try {
            const response = await PostRequest(JOURNEY.CREATE(), journey)
            if (!response) {
                showToast.success("Jornada criada com sucesso!");
                clearFilds();
                navigation.navigate('Home')
            }
            showToast.error(response.message || "Erro ao criar a jornada.");

        } catch (error) {
            console.log("Erro ao editar conta: ", error);
            showToast.error("Ocorreu um erro inesperado.");
        }
    }

    let avatarSource: ImageSourcePropType | undefined;

    if (selectedAvatar) {
        if (typeof selectedAvatar === 'number') {
            avatarSource = selectedAvatar;
        } else if ('uri' in selectedAvatar && (selectedAvatar as any).uri) {
            avatarSource = { uri: (selectedAvatar as any).uri };
        }
    }

    return (
        <View style={{ flex: 1, backgroundColor: "#FFF" }}>
            <HeaderBack title={"Criar a jornada"} onPress={navigation.goBack} />
            <ScrollView
                contentContainerStyle={styles.containerScroll}
                showsVerticalScrollIndicator={false}
            >
                <View>
                    <View style={styles.formUser}>
                        <View style={styles.avatarContainer}>
                            <Image
                                source={
                                    selectedAvatar?.uri
                                        ? { uri: selectedAvatar.uri }
                                        : journey.image_url
                                            ? { uri: journey.image_url }
                                            : Img
                                }
                                style={styles.avatarImg}
                            />

                            <View style={styles.actionChoice}>
                                <Button color="neutral" onPress={() => setVisible(true)}>
                                    Escolher
                                </Button>

                                <ModalChoiceImg
                                    visible={visible}
                                    setVisible={setVisible}
                                    onConfirm={(img) => {
                                        setSelectedAvatar(img);
                                        setJourney((prev) => ({
                                            ...prev,
                                            image_url: img.uri,
                                        }));
                                    }}
                                />

                            </View>
                        </View>
                        <View style={styles.firtsFilds}>
                            <InputText
                                label="Titulo"
                                value={journey.title}
                                onChangeText={(text) => setJourney({ ...journey, title: text })}
                                icon={"Castle"} />
                            <InputText
                                label="Descrição"
                                value={journey.description}
                                onChangeText={(text) => setJourney({ ...journey, description: text })}
                                icon={"Newspaper"} />

                            <InputToggle
                                label="Jornada" labelBold="Privada"
                                icon="GlobeLock"
                                value={journey.is_private}
                                setValue={(e) => setJourney({ ...journey, is_private: e })}
                            />

                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.footerContainer}>
                <Button color={"primary"} onPress={handleSubmit}>
                    Criar Jornada
                </Button>
            </View>
        </View>
    );
}

function ModalChoiceImg({ visible, setVisible, onConfirm }: ModalChoiceImgProps) {
    const [selected, setSelected] = useState<SelectedImgProp | any>({
        width: 0,
        uri: '',
        height: 0
    });

    const onConfirmAvatar = () => {
        onConfirm(selected);
        setVisible(false);
    }

    return (
        <GlobalModal
            visible={visible}
            onClose={() => setVisible(false)}
        >
            <View style={{
                gap: 12,
                alignItems: 'center'
            }}>
                <GlobalText variant="bold" style={{ fontSize: 20 }}>Escolha um brasão</GlobalText>
                <GlobalText variant="medium" style={{ fontSize: 16, textAlign: 'center', color: colors.neutral80 }}>
                    Escolha uma foto para sua jornada
                </GlobalText>
            </View>
            <ScrollView style={{
                height: 455,
                marginVertical: 30,
            }}>

                <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    gap: 4,
                    justifyContent: "center"
                }}>
                    {brasaoList.map((img, index) => (
                        <TouchableOpacity key={index} onPress={() => setSelected(img)}>
                            <Image
                                source={img}
                                style={{
                                    width: 90,
                                    height: 90,
                                    borderRadius: 50,
                                    borderWidth: 3,
                                    borderColor: selected === img ? colors.grenn100 : "transparent",
                                    marginVertical: 10
                                }}
                            />
                        </TouchableOpacity>
                    ))}

                </View>
            </ScrollView>
            <Button color="neutral" onPress={onConfirmAvatar}>Confirmar</Button>
        </GlobalModal>
    )
}


