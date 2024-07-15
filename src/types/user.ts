import { BaseModel } from '@/types/base';

export interface TokenInfo extends BaseModel {
    refreshToken: string;
    accessToken: string;
}

export interface User extends BaseModel {
    loginId?: string;
    password?: string;
    name?: string;
    tokenInfo?: TokenInfo;
}
