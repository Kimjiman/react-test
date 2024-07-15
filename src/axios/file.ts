import { axios } from '@/axios/axiosConfig';

const baseUrl = '/file';

const api = {
    get: async (ids: Array<number>) => {
        return await axios.get(`${baseUrl}/download`, { params: { ids: ids } });
    },

    upload: async (refPath: string, refId: number, files: Array<File>) => {
        const formData = new FormData();
        files.forEach((file) => formData.append('file', file));
        return await axios.post(`${baseUrl}/${refPath}/${refId}`, formData);
    },

    donwload: async (id: number) => {
        return await axios.get(`${baseUrl}/download/${id}`);
    },

    readFile: async (id: number) => {
        return await axios.get(`${baseUrl}/${id}`);
    },

    delete: async (id: number) => {
        return await axios.delete(`${baseUrl}/${id}`);
    },

    deleteByRef: async (refPath: string, refId: number) => {
        return await axios.delete(`${baseUrl}/ref/${refPath}/${refId}`);
    },
};

export default api;
