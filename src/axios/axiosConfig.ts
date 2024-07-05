import axios, { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

const baseUrl = import.meta.env.VITE_BASE_URL;
const instance: AxiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    },
);

instance.interceptors.response.use(
    (response: AxiosResponse) => {
        const resData = response.data;
        if (!resData) {
            return Promise.reject({ message: 'invalid data format' });
        }
        if (undefined === resData.status) {
            return Promise.reject({ message: 'status not exist in body' });
        }
        if (0 < resData.status) {
            return Promise.reject({ message: resData.message, status: resData.status });
        }
        return resData.response;
    },
    async (error: AxiosError) => {
        const status = error.response?.status;
        const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };
        console.log('originalRequest', originalRequest);
        let data;

        if (status === 401) {
            originalRequest._retry = true;
            try {
                const refreshToken = localStorage.getItem('refreshToken');
                const response = await axios.post(`${baseUrl}/auth/token`, {
                    refreshToken: refreshToken,
                });
                const newAccessToken = response.data.accessToken;
                localStorage.setItem('accessToken', newAccessToken);
                originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                return instance(originalRequest);
            } catch (ex) {
                console.error(ex);
                data = { status, message: '연결이 끊겼습니다. 다시 로그인해주세요.' };
            }
        } else if (status === 500) {
            data = error.response?.data;
        }

        return Promise.reject(data ?? error);
    },
);
export { instance as axios };
