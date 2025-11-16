import { API_BASE } from '../api-routes/apiBase';
import apiClient from './apiClient';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const GetRequest = async (
    endpoint: string,
    extraHeaders: Record<string, string> = {}
) => {
    const finalUrl = API_BASE + endpoint;

    try {
        const token = await AsyncStorage.getItem("@token");

        const headers: Record<string, string> = {
            'Content-Type': 'application/json',
            ...extraHeaders,
        };

        if (token) {
            headers.Authorization = `Bearer ${token}`;
        }

        const response = await apiClient.get(finalUrl, { headers });
        return response.data;

    } catch (error) {
        console.error('Erro no GetRequest:', error);
        throw error;
    }
};
