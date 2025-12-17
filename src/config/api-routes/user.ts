export const USER = {
    REGISTER: () => `/register`,
    GET_USER: () => `/user`,
    LOGIN: () => `/login`,
    LOGOUT: () => `/logout`,
    UPDATE: (userId: string | number) => `/users/${userId}`
};
