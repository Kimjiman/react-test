import { BaseModel } from '@/types/base';

/**
 * For store
 */
export interface GlobalState {
    initState: boolean;
    isLogin: boolean;
    user: Record<string, any>;
    menu: Record<string, any>;
    count: number;
    spin: boolean;
    requestCount: number;

    getInitState: () => boolean;
    getIsLogin: () => boolean;
    getUser: () => Record<string, any>;
    getMenu: () => Record<string, any>;
    getCount: () => number;
    getSpin: () => boolean;
    getRequestCount: () => number;

    setInitState: (value: boolean) => void;
    setIsLogin: (value: boolean) => void;
    setUser: (value: Record<string, any>) => void;
    setMenu: (value: Record<string, any>) => void;
    setCount: (value: number) => void;
    setSpin: (value: boolean) => void;
    setRequestCount: (value: number) => void;
}

/** For route */
export interface RouteComponent extends BaseModel {
    path: string;
    name: string;
    element?: JSX.Element;
}
