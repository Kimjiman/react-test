const dateUtils = {
    datePattern: {
        DATE_TIME_FORMAT: 'yyyy-MM-dd HH:mm:ss',
        DATE_FORMAT: 'yyyy-MM-dd',
        TIME_FORMAT: 'HH:mm:ss',
    },
    /**
     * 주어진 날짜를 pattern 형식으로 변경한다.
     * @param date
     * @param pattern
     * @returns {*}
     */
    formatDate: (date: Date, pattern: string): string => {
        const year = String(date.getFullYear());
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');

        return pattern
            .replace('yyyy', year)
            .replace('MM', month)
            .replace('dd', day)
            .replace('HH', hours)
            .replace('mm', minutes)
            .replace('ss', seconds);
    },

    getDateTimeString: (date: Date) => {
        return dateUtils.formatDate(date, dateUtils.datePattern.DATE_TIME_FORMAT);
    },

    getDateString: (date: Date) => {
        return dateUtils.formatDate(date, dateUtils.datePattern.DATE_FORMAT);
    },

    getTimeString: (date: Date) => {
        return dateUtils.formatDate(date, dateUtils.datePattern.TIME_FORMAT);
    },

    getDayOfWeekNumber: (date: Date) => {
        const newDate = new Date(date);
        return newDate.getDay();
    },

    getDayOfWeekString: (date: Date) => {
        const dayOfWeek: Record<number, string> = {
            0: '월',
            1: '화',
            2: '수',
            3: '목',
            4: '금',
            5: '토',
            6: '일',
        };
        return dayOfWeek[dateUtils.getDayOfWeekNumber(date)];
    },

    plusYears: (date: Date, years: number) => {
        const newDate = new Date(date);
        newDate.setFullYear(date.getFullYear() + years);
        return newDate;
    },

    minusYears: (date: Date, years: number) => {
        const newDate = new Date(date);
        newDate.setFullYear(date.getFullYear() - years);
        return newDate;
    },

    plusMonths: (date: Date, months: number) => {
        const newDate = new Date(date);
        newDate.setMonth(date.getMonth() + months);
        return newDate;
    },

    minusMonths: (date: Date, months: number) => {
        const newDate = new Date(date);
        newDate.setMonth(date.getMonth() - months);
        return newDate;
    },

    plusDays: (date: Date, days: number) => {
        const newDate = new Date(date);
        newDate.setDate(date.getDate() + days);
        return newDate;
    },

    minusDays: (date: Date, days: number) => {
        const newDate = new Date(date);
        newDate.setDate(date.getDate() - days);
        return newDate;
    },

    plusHours: (date: Date, hours: number) => {
        const newDate = new Date(date);
        newDate.setHours(date.getHours() + hours);
        return newDate;
    },

    minusHours: (date: Date, hours: number) => {
        const newDate = new Date(date);
        newDate.setHours(date.getHours() - hours);
        return newDate;
    },

    plusMinutes: (date: Date, minutes: number) => {
        const newDate = new Date(date);
        newDate.setMinutes(date.getMinutes() + minutes);
        return newDate;
    },

    minusMinutes: (date: Date, minutes: number) => {
        const newDate = new Date(date);
        newDate.setMinutes(date.getMinutes() - minutes);
        return newDate;
    },

    plusSeconds: (date: Date, seconds: number) => {
        const newDate = new Date(date);
        newDate.setSeconds(date.getSeconds() + seconds);
        return newDate;
    },

    minusSeconds: (date: Date, seconds: number) => {
        const newDate = new Date(date);
        newDate.setSeconds(date.getSeconds() - seconds);
        return newDate;
    },
};

export default dateUtils;
