import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface GlobalState {
    initState: boolean;
    isLogin: boolean;
    user: Record<string, any>;
    menu: Record<string, any>;
    count: number;
    getInitState: () => boolean;
    getIsLogin: () => boolean;
    getUser: () => Record<string, any>;
    getMenu: () => Record<string, any>;
    getCount: () => number;
    setInitState: (value: boolean) => void;
    setIsLogin: (value: boolean) => void;
    setUser: (value: Record<string, any>) => void;
    setMenu: (value: Record<string, any>) => void;
    setCount: (value: number) => void;
}

const useStore = (set: any, get: any) => ({
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
    setInitState: (value: boolean) => set({ initState: value }),
    setIsLogin: (value: boolean) => set({ isLogin: value }),
    setUser: (value: Record<string, any>) => set({ user: value }),
    setMenu: (value: Record<string, any>) => set({ menu: value }),
    setCount: (value: number) => set({ count: value }),
});

const useGlobalStore =
    import.meta.env.VITE_PROFILE !== 'prod' ? create<GlobalState>(devtools(useStore)) : create<GlobalState>(useStore);

export default useGlobalStore;
