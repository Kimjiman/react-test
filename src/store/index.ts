import { GlobalState } from '@/types/module';
import { create, StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';

const useStore: StateCreator<GlobalState> = (set: any, get: any) => ({
    initState: false,
    isLogin: false,
    user: {},
    menu: {},
    count: 0,
    spin: false,

    getInitState: () => get().initState,
    getIsLogin: () => get().isLogin,
    getUser: () => get().user,
    getMenu: () => get().menu,
    getCount: () => get().count,
    getSpin: () => get().spin,

    setInitState: (value: boolean) => set({ initState: value }),
    setIsLogin: (value: boolean) => set({ isLogin: value }),
    setUser: (value: Record<string, any>) => set({ user: value }),
    setMenu: (value: Record<string, any>) => set({ menu: value }),
    setCount: (value: number) => set({ count: value }),
    setSpin: (value: boolean) => set({ spin: value }),
});

const useGlobalStore =
    import.meta.env.VITE_PROFILE !== 'prod'
        ? create<GlobalState>(devtools(useStore) as StateCreator<GlobalState>)
        : create<GlobalState>(useStore);

export default useGlobalStore;
