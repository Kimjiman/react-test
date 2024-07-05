const stringUtils = {
    /**
     * val가 empty 일때
     * @param val
     * @returns {boolean}
     */
    isEmpty: (val: any): boolean => {
        if (val === null || val === undefined || val === '') {
            return true;
        }

        if (Array.isArray(val) || typeof val === 'object') {
            return Object.keys(val).length === 0;
        }

        return false;
    },

    /**
     * val가 empty 아닐때
     * @param val
     * @returns {boolean}
     */
    isNotEmpty: (val: any): boolean => {
        return !stringUtils.isEmpty(val);
    },

    /**
     * val가 empty일때 replaceVal로 대체
     * @param val
     * @param replaceVal
     * @returns {any}
     */
    ifEmpty: (val: string, replaceVal: string): any => {
        return stringUtils.isEmpty(val) ? replaceVal : val;
    },

    /**
     * json을 queryString으로 변환
     * @param json
     * @returns {URLSearchParams}
     */
    jsonToQueryString: (json: Record<string, any>): URLSearchParams => {
        return new URLSearchParams(json);
    },

    /**
     * queryString을 json으로 변환
     * @param queryString
     * @returns {{}}
     */
    queryStringToJson: (queryString: string): Record<string, any> => {
        const json: Record<string, any> = {};
        queryString.split('&').forEach(pair => {
            const [key, value] = pair.split('=');
            json[decodeURIComponent(key)] = decodeURIComponent(value || '');
        });
        return json;
    },

    /**
     * 정규식
     * @param val
     * @param regex
     * @returns {boolean}
     */
    isRegex: (val: string, regex: RegExp): boolean => {
        if (stringUtils.isEmpty(val) || stringUtils.isEmpty(regex)) return false;
        return regex.test(val);
    },

    /**
     * 영어소문자, 숫자, -_로 아이디 만들기
     * @param val
     * @returns {boolean}
     */
    isLoginId: (val: string): boolean => {
        const regex = /^[a-z\-_.0-9]{6,20}$/;
        return stringUtils.isRegex(val, regex);
    },

    /**
     * 대소문자, 특수문자, 숫자로 비밀번호
     * @param val
     * @returns {boolean}
     */
    isPassword: (val: string): boolean => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
        return stringUtils.isRegex(val, regex);
    },

    /**
     * 영문대소문자,한글완성형,특수문자허용 3~8자
     * @param val
     * @returns {boolean}
     */
    isName: (val: string): boolean => {
        const regex = /^[a-zA-Z가-힣?=.*[~!@#$%^&()\-_+\]]{3,8}$/;
        return stringUtils.isRegex(val, regex);
    },

    /**
     * 이메일
     * @param val
     * @returns {boolean}
     */
    isEmail: (val: string): boolean => {
        const regex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,}$/i;
        return stringUtils.isRegex(val, regex);
    },

    /**
     * 휴대폰 번호 숫자만 10~11자
     * @param val
     * @returns {boolean}
     */
    isMobile: (val: string): boolean => {
        const regex = /^[0-9]{10,11}$/;
        return stringUtils.isRegex(val, regex);
    },

    /**
     * 숫자체크
     * @param val
     * @returns {boolean}
     */
    isNumber: (val: string): boolean => {
        const regex = /^[0-9]+$/;
        return stringUtils.isRegex(val, regex);
    },
};

export default stringUtils;
