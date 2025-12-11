
import { HeaderBack } from "@/src/components/layout/headerBack";
import { Button } from "@/src/components/ui/Button";
import { InputText } from "@/src/components/ui/InputText";
import { InputToggle } from "@/src/components/ui/InputToggle";
import { useAppNavigation } from "@/src/utils/navigation";
import { useState } from "react";
import { Image, View } from "react-native";
import { styles } from "./style";

type userProps = {
    name: string,
    email: string
    password: string
    password_confirmation: string
}

type ModalChoiceImgProps = {
    visible: boolean,
    onConfirm: (img: SelectedImgProp) => void,
    setVisible: (value: boolean) => void
}

type SelectedImgProp = {
    width: number,
    uri?: string,
    height: number
}

export default function CreateJourney() {
    const navigation = useAppNavigation();
    const [visible, setVisible] = useState(false);
    const [selectedAvatar, setSelectedAvatar] = useState<SelectedImgProp>({
        width: 0,
        uri: '',
        height: 0
    });
    const [user, setUser] = useState<userProps>({
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
    })
    const [isPrivate, setIsPrivate] = useState(false);

    function handleSubmit(): void {
        throw new Error("Function not implemented.");
    }

    return (
        <View style={styles.container}>
            <View>
                <HeaderBack title={"Criar a jornada"} onPress={navigation.goBack} />

                <View style={styles.formUser}>
                    <View style={styles.avatarContainer}>
                        <Image source={selectedAvatar?.uri ?? ""} style={styles.avatarImg} />
                        <View style={styles.actionChoice}>
                            <Button color="neutral" icon="ArchiveRestore" onPress={() => setVisible(true)}>Escolher</Button>
                            {/* <ModalChoiceImg visible={visible} setVisible={setVisible} onConfirm={(img) => setSelectedAvatar(img)} /> */}
                        </View>
                    </View>
                    <View style={styles.firtsFilds}>
                        <InputText
                            label="Titulo"
                            value={user.name}
                            onChangeText={(text) => setUser({ ...user, name: text })}
                            icon={"Castle"} />
                        <InputText
                            label="Descrição"
                            value={user.email}
                            onChangeText={(text) => setUser({ ...user, email: text })}
                            icon={"Newspaper"} />

                        <InputToggle
                            label="Jornada" labelBold="Privada"
                            icon="Lock"
                            value={isPrivate}
                            setValue={setIsPrivate}
                        />

                    </View>
                </View>
            </View>

            <View style={styles.footerContainer}>
                <Button color={"primary"} onPress={handleSubmit}>
                    Criar Jornada
                </Button>
            </View>
        </View>
    );
}


