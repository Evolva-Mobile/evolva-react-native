import { API_BASE } from '../api-routes/apiBase';
import apiClient from './apiClient';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const PatchRequest = async (
  endpoint: string,
  body?: any,
  extraHeaders: Record<string, string> = {}
) => {
  const finalUrl = API_BASE + endpoint;

  try {
    const token = await AsyncStorage.getItem("@token");
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      ...extraHeaders,
    };

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    const response = await apiClient.patch(finalUrl, body, { headers });
    return response.data;

  } catch (error: any) {
    console.error("Erro no PatchRequest:", error);

    if (error.response && error.response.data) {
      return error.response.data;
    }

    if (error.response && error.response.status === 500) {
      return { success: false, message: "Ocorreu um erro interno." };
    }

    throw error;
  }
};
