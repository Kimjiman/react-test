import axios from 'axios';

const instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
});

instance.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        return Promise.reject(error);
    },
);
// 응답 인터셉터
instance.interceptors.response.use(
    function (response: Record<string, any>) {
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
    function (error: Record<string, any>) {
        const status = error.response?.status;
        let data;
        if (401 === status) {
            data = { status, message: '연결이 끊겼습니다. 다시 로그인해주세요.' };
        } else if (500 === status) {
            data = error.response.data;
        }
        return Promise.reject(data ? data : error);
    },
);

export { instance as axios };
