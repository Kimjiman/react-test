import { BaseModel } from '@/types/base';

export interface FileInfo extends BaseModel {
    refPath?: string;
    refId?: number;
    oriName?: string;
    newName?: string;
    savePath?: string;
    ext?: string;
    type?: string;
    size?: number;
}
