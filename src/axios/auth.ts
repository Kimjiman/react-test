import { axios } from '@/axios/axiosConfig';

const baseUrl = '/auth';

const api = {
    login: async (loginId: string, password: string): Promise<any> => {
        return await axios.post(`${baseUrl}/login`, { loginId, password });
    },
    logout: async () => {
        return await axios.post(`${baseUrl}/logout`);
    },
    test: async () => {
        return await axios.post(`${baseUrl}/test`);
    },
};

export default api;
