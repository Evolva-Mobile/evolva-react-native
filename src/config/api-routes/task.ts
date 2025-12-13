export const TASK = {
    CREATE: () => `/tasks`,
    LIST: () => `/user`,
    LOGIN: () => `/login`,
    LOGOUT: () => `/logout`,
    UPDATE: (userId: string) => `/users/${userId}`
};
