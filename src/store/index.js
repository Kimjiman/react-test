import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const useStore = (set, get) => ({
    initState: false,
    isLogin: false,
    user: {},
    menu: {},
    count: 0,

    getInitState: () => get().initState,
    getIsLogin: () => get().isLogin,
    getUser: () => get().user,
    getMenu: () => get().menu,
    getCount: () => get().count,

    setInitState: value => set({ initState: value }),
    setIsLogin: value => set({ isLogin: value }),
    setUser: value => set({ user: value }),
    setMenu: value => set({ menu: value }),
    setCount: value => set({ count: value }),
});

const useGlobalStore = create(devtools(useStore));

export default useGlobalStore;
