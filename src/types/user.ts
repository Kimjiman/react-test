import { BaseModel } from './module';

export interface TokenInfo extends BaseModel {
    refreshToken: string;
    accessToken: string;
}

export interface User extends BaseModel {
    loginId: string;
    password?: string;
    name: string;
    tokenInfo: TokenInfo;
}
