export const JOURNEY = {
  CREATE: () => `/journeys`,
  GETBYUSER: () => `/journeys`,
  DETAIL: (id: string | number) => `/journeys/${id}`,
  JOIN: () => `/journeys/join`,
  PUBLIC_LIST: () => `/journeys/public`,
};
