export interface BaseModel {
    id?: number;
    createTime?: string;
    createId?: string;
    updateTime?: string;
    updateId?: string;
}

/**
 * For store
 */
export interface GlobalState extends BaseModel {
    initState: boolean;
    isLogin: boolean;
    user: Record<string, any>;
    menu: Record<string, any>;
    count: number;
    spin: boolean;

    getInitState: () => boolean;
    getIsLogin: () => boolean;
    getUser: () => Record<string, any>;
    getMenu: () => Record<string, any>;
    getCount: () => number;
    getSpin: () => boolean;

    setInitState: (value: boolean) => void;
    setIsLogin: (value: boolean) => void;
    setUser: (value: Record<string, any>) => void;
    setMenu: (value: Record<string, any>) => void;
    setCount: (value: number) => void;
    setSpin: (value: boolean) => void;
}

/** For route */
export interface RouteComponent extends BaseModel {
    path: string;
    name: string;
    element?: JSX.Element;
}
