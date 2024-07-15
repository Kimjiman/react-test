import { BaseModel } from '@/types/base';

export interface CodeGroup extends BaseModel {
    codeGroup: string;
    name: string;
    codeList: Array<Code>;
}

export interface Code extends BaseModel {
    codeGroupId: number;
    codeGroup: string;
    code: string;
    codeGroupName: string;
    name: string;
    order: number;
    info: string;
}
