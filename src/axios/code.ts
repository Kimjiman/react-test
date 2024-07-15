import { CodeGroup } from './../types/code';
import { axios } from '@/axios/axiosConfig';
import { Code } from '@/types/code';

const baseUrl = '/code';

const api = {
    selectCodeGroupList: async () => {
        return await axios.get(`${baseUrl}/codeGroup`);
    },

    selectCodeList: async (codeGroup: string) => {
        return await axios.get(`${baseUrl}/code`, { params: { codeGroup } });
    },

    selectCodeGroupById: async (id: number) => {
        return await axios.get(`${baseUrl}/codeGroup/${id}`);
    },

    selectCodeById: async (id: number) => {
        return await axios.get(`${baseUrl}/code/${id}`);
    },

    createCodeGroup: async (codeGroup: CodeGroup) => {
        return await axios.post(`${baseUrl}/codeGroup`, { codeGroup });
    },

    createCode: async (code: Code) => {
        return await axios.post(`${baseUrl}/code`, { code });
    },

    updateCodeGroup: async (codeGroup: CodeGroup) => {
        return await axios.put(`${baseUrl}/codeGroup`, { codeGroup });
    },

    updateCode: async (code: Code) => {
        return await axios.put(`${baseUrl}/code`, { code });
    },

    deleteCodeGroup: async (id: number) => {
        return await axios.delete(`${baseUrl}/codeGroup/${id}`);
    },

    deleteCode: async (id: number) => {
        return await axios.delete(`${baseUrl}/code/${id}`);
    },
};

export default api;
