import { launchImageLibrary } from 'react-native-image-picker';

export async function pickImageBase64() {
  try {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      includeBase64: true,
      selectionLimit: 1,
      quality: 0.8,
    });

    if (result.didCancel) {
      return null; // usuário cancelou
    }

    const asset = result.assets?.[0];
    if (!asset) return null;

    return {
      base64: asset.base64 || null,
      uri: asset.uri || null,
      fileName: asset.fileName || 'image.jpg',
      type: asset.type || 'image/jpeg',
    };
  } catch (err) {
    console.error('Erro ao selecionar imagem: ', err);
    return null;
  }
}
