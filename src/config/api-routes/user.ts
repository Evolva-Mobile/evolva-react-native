export const USER = {
    REGISTER: () => `/register`,
    GET_USER: () => `/user`,
    LOGIN: () => `/login`,
    LOGOUT: () => `/logout`,
    UPDATE: (userId: string) => `/users/${userId}`
};
