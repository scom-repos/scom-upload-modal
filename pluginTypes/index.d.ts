/// <amd-module name="@scom/scom-upload-modal/assets.ts" />
declare module "@scom/scom-upload-modal/assets.ts" {
    function fullPath(path: string): string;
    const _default: {
        fullPath: typeof fullPath;
    };
    export default _default;
}
/// <amd-module name="@scom/scom-upload-modal/index.css.ts" />
declare module "@scom/scom-upload-modal/index.css.ts" {
    export const uploadModalStyle: string;
}
/// <amd-module name="@scom/scom-upload-modal/interface.ts" />
declare module "@scom/scom-upload-modal/interface.ts" {
    import { IPFS } from "@ijstech/components";
    enum FILE_STATUS {
        LISTED = 0,
        SUCCESS = 1,
        FAILED = 2,
        UPLOADING = 3
    }
    interface ICidInfo {
        cid: string;
        links?: ICidInfo[];
        name?: string;
        size: number;
        type?: 'dir' | 'file';
    }
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
    export { FILE_STATUS, ICidInfo, IIPFSItem, IUploadResult, IUploadData };
}
/// <amd-module name="@scom/scom-upload-modal/model.ts" />
declare module "@scom/scom-upload-modal/model.ts" {
    import { IPFS } from '@ijstech/components';
    import { FILE_STATUS, ICidInfo } from "@scom/scom-upload-modal/interface.ts";
    export class Model {
        private _data;
        private currentPage;
        private _currentFilterStatus;
        files: File[];
        fileListData: {
            file: any;
            status: FILE_STATUS;
            percentage: number | string;
            url?: string;
        }[];
        constructor();
        get rootCid(): string;
        set rootCid(value: string);
        get mulitiple(): boolean;
        set mulitiple(value: boolean);
        get parentDir(): Partial<ICidInfo>;
        set parentDir(value: Partial<ICidInfo>);
        get isBrowseButtonShown(): boolean;
        set isBrowseButtonShown(value: boolean);
        get manager(): IPFS.FileManager;
        set manager(value: IPFS.FileManager);
        get buttonFilters(): {
            id: string;
            caption: string;
            status: FILE_STATUS;
        }[];
        get currentFilterStatus(): FILE_STATUS;
        set currentFilterStatus(value: FILE_STATUS);
        addFile(file: File): void;
        removeFile(index: number): void;
        resetFiles(): void;
        filterFiles(): void;
        resetUploadingFiles(): void;
        setFailedFiles(): void;
        setSuccessFiles(): void;
        filteredFileListData(): {
            file: any;
            status: FILE_STATUS;
            percentage: string | number;
            url?: string;
        }[];
        private getNewFileName;
        isFileExists(manager: IPFS.FileManager, filePath: string): Promise<{
            isExists: boolean;
            newFilePath: string;
        }>;
    }
}
/// <amd-module name="@scom/scom-upload-modal/translations.json.ts" />
declare module "@scom/scom-upload-modal/translations.json.ts" {
    const _default_1: {
        en: {
            all_data_uploaded_to_ipfs_explorer_is_available_to_anyone_who_requests_it_using_the_correct_cid_do_not_store_any_private_or_sensitive_information_in_an_unencrypted_form_using_ipfs_explorer: string;
            all_files: string;
            all_folders: string;
            all: string;
            back_to_upload: string;
            browse_file: string;
            cancel: string;
            choose_file_to_upload_to_ipfs_network: string;
            clear: string;
            completed: string;
            confirm: string;
            delete: string;
            deleting_files_from_the_ipfs_explorer_sites_files_page_will_remove_them_from_the_file_listing_for_your_account_but_that_doesnt_prevent_nodes_on_the_decentralized_storage_network_from_retaining_copies_of_the_data_indefinitely_do_not_use_ipfs_explorer_for_data_that_may_need_to_be_permanently_deleted_in_the_future: string;
            do_you_want_to_discard_changes: string;
            drag_and_drop_your_files_here: string;
            edit: string;
            fail: string;
            failed: string;
            file_preview: string;
            name: string;
            new_folder: string;
            or: string;
            permanent_data: string;
            processing_your_files: string;
            public_data: string;
            rename: string;
            save: string;
            select_files: string;
            select: string;
            size: string;
            success: string;
            type: string;
            upload_file_to_ipfs: string;
            upload_files_to: string;
            upload_more_files: string;
            upload: string;
            uploading_file_to_ipfs: string;
            uploading: string;
        };
        "zh-hant": {
            all_data_uploaded_to_ipfs_explorer_is_available_to_anyone_who_requests_it_using_the_correct_cid_do_not_store_any_private_or_sensitive_information_in_an_unencrypted_form_using_ipfs_explorer: string;
            all_files: string;
            all_folders: string;
            all: string;
            back_to_upload: string;
            browse_file: string;
            cancel: string;
            choose_file_to_upload_to_ipfs_network: string;
            clear: string;
            completed: string;
            confirm: string;
            delete: string;
            deleting_files_from_the_ipfs_explorer_sites_files_page_will_remove_them_from_the_file_listing_for_your_account_but_that_doesnt_prevent_nodes_on_the_decentralized_storage_network_from_retaining_copies_of_the_data_indefinitely_do_not_use_ipfs_explorer_for_data_that_may_need_to_be_permanently_deleted_in_the_future: string;
            do_you_want_to_discard_changes: string;
            drag_and_drop_your_files_here: string;
            edit: string;
            fail: string;
            failed: string;
            file_preview: string;
            name: string;
            new_folder: string;
            or: string;
            permanent_data: string;
            processing_your_files: string;
            public_data: string;
            rename: string;
            save: string;
            select_files: string;
            select: string;
            size: string;
            success: string;
            type: string;
            upload_file_to_ipfs: string;
            upload_files_to: string;
            upload_more_files: string;
            upload: string;
            uploading_file_to_ipfs: string;
            uploading: string;
        };
        vi: {
            all_data_uploaded_to_ipfs_explorer_is_available_to_anyone_who_requests_it_using_the_correct_cid_do_not_store_any_private_or_sensitive_information_in_an_unencrypted_form_using_ipfs_explorer: string;
            all_files: string;
            all_folders: string;
            all: string;
            back_to_upload: string;
            browse_file: string;
            cancel: string;
            choose_file_to_upload_to_ipfs_network: string;
            clear: string;
            completed: string;
            confirm: string;
            delete: string;
            deleting_files_from_the_ipfs_explorer_sites_files_page_will_remove_them_from_the_file_listing_for_your_account_but_that_doesnt_prevent_nodes_on_the_decentralized_storage_network_from_retaining_copies_of_the_data_indefinitely_do_not_use_ipfs_explorer_for_data_that_may_need_to_be_permanently_deleted_in_the_future: string;
            do_you_want_to_discard_changes: string;
            drag_and_drop_your_files_here: string;
            edit: string;
            fail: string;
            failed: string;
            file_preview: string;
            name: string;
            new_folder: string;
            or: string;
            permanent_data: string;
            processing_your_files: string;
            public_data: string;
            rename: string;
            save: string;
            select_files: string;
            select: string;
            size: string;
            success: string;
            type: string;
            upload_file_to_ipfs: string;
            upload_files_to: string;
            upload_more_files: string;
            upload: string;
            uploading_file_to_ipfs: string;
            uploading: string;
        };
    };
    export default _default_1;
}
/// <amd-module name="@scom/scom-upload-modal" />
declare module "@scom/scom-upload-modal" {
    import { ControlElement, Module, Container } from '@ijstech/components';
    import { ICidInfo } from "@scom/scom-upload-modal/interface.ts";
    type UploadedCallback = (target: ScomUploadModal, rootCid: string, filePaths: string[]) => void;
    interface ScomUploadModalElement extends ControlElement {
        rootCid?: string;
        mulitiple?: boolean;
        parentDir?: Partial<ICidInfo>;
        isBrowseButtonShown?: boolean;
        onUploaded?: UploadedCallback;
        onBrowseFile?: () => void;
    }
    global {
        namespace JSX {
            interface IntrinsicElements {
                ['i-scom-upload-modal']: ScomUploadModalElement;
            }
        }
    }
    export class ScomUploadModal extends Module {
        private lblTitle;
        private fileUploader;
        private btnBrowseFile;
        private imgFile;
        private lblDrag;
        private pnlBrowse;
        private pnlStatusFilter;
        private pnlFilterActions;
        private pnlFileList;
        private btnUpload;
        private pnlNote;
        private pnlPagination;
        private pnlFilterBar;
        onUploaded: UploadedCallback;
        onBrowseFile: () => void;
        private isForcedCancelled;
        private currentRequest;
        private currentPage;
        private folderPath;
        private model;
        constructor(parent?: Container, options?: any);
        get rootCid(): string;
        set rootCid(value: string);
        get parentDir(): Partial<ICidInfo>;
        set parentDir(value: Partial<ICidInfo>);
        get manager(): any;
        set manager(value: any);
        get isBrowseButtonShown(): boolean;
        set isBrowseButtonShown(value: boolean);
        get mulitiple(): boolean;
        set mulitiple(value: boolean);
        private updateUI;
        show(path?: string, files?: File[]): void;
        updateWidget(): void;
        refresh(): void;
        private onBeforeDrop;
        private onBeforeUpload;
        private numPages;
        private setCurrentPage;
        private get isSmallWidth();
        private updateFilterBar;
        private renderFilterBar;
        private renderFileList;
        private formatBytes;
        private renderStatus;
        private getPagination;
        private renderPagination;
        private onChangeCurrentFilterStatus;
        private onClear;
        private onCancel;
        private onChangeFile;
        private updateBtnCaption;
        private onRemove;
        private onRemoveFile;
        private onUpload;
        private browseFile;
        reset(): void;
        private resetButtons;
        private toggle;
        private renderFilters;
        init(): Promise<void>;
        render(): any;
    }
}
