import { IPFS } from "@ijstech/components";

enum FILE_STATUS {
    LISTED, // ALL
    SUCCESS,
    FAILED,
    UPLOADING,
}

interface ICidInfo {
  cid: string;
  links?: ICidInfo[];
  name?: string;
  size: number;
  type?: 'dir' | 'file';
};

interface IIPFSItem {
    cid: string;
    name: string;
    size: number;
    type: 'dir' | 'file';
    links?: IIPFSItem[];
}

interface IUploadResult {
    success: boolean;
    error?: string;
    data?: IIPFSItem;
}

interface IUploadData {
    rootCid?: string;
    mulitiple?: boolean;
    parentDir?: Partial<ICidInfo>;
    isBrowseButtonShown?: boolean;
    manager?: IPFS.FileManager;
}

export {
    FILE_STATUS,
    ICidInfo,
    IIPFSItem,
    IUploadResult,
    IUploadData
}