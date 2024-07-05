import axios, { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import useGlobalStore from '@/store/index';

const baseUrl = import.meta.env.VITE_BASE_URL;
const instance: AxiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

const spin = {
    show() {
        if (useGlobalStore.getState().getRequestCount() === 0) {
            useGlobalStore.getState().setSpin(true);
        }
        useGlobalStore.getState().setRequestCount(useGlobalStore.getState().getRequestCount() + 1);
    },
    hide() {
        useGlobalStore.getState().setRequestCount(useGlobalStore.getState().getRequestCount() - 1);

        if (useGlobalStore.getState().getRequestCount() === 0) {
            useGlobalStore.getState().setSpin(false);
        }
    },
};

instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        spin.show();
        const token = localStorage.getItem('accessToken');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error: AxiosError) => {
        spin.hide();
        return Promise.reject(error);
    },
);

const MAX_RETRY = 2;
let retryCount = 0;

instance.interceptors.response.use(
    (response: AxiosResponse) => {
        spin.hide();

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
        spin.hide();

        const status = error.response?.status;
        const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };
        let data;

        if (status === 401) {
            if (!originalRequest._retry && retryCount < MAX_RETRY) {
                originalRequest._retry = true;
                retryCount++;

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
            } else {
                data = { status, message: '재시도 횟수 초과 또는 인증 오류' };
            }
        } else if (status === 500) {
            data = error.response?.data;
        }

        return Promise.reject(data ?? error);
    },
);
export { instance as axios };
