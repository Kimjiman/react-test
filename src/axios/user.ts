import { axios } from '@/axios/axiosConfig';

const baseUrl = '/user';

const api = {
    login: async (loginId: string, password: string) => {
        return await axios.post(`${baseUrl}/login`, { loginId, password });
    },
};

export default api;
