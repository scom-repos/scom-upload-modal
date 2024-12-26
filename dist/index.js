var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define("@scom/scom-upload-modal/assets.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const moduleDir = components_1.application.currentModuleDir;
    function fullPath(path) {
        return `${moduleDir}/${path}`;
    }
    ;
    exports.default = {
        fullPath
    };
});
define("@scom/scom-upload-modal/index.css.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.uploadModalStyle = void 0;
    const Theme = components_2.Styles.Theme.ThemeVars;
    exports.uploadModalStyle = components_2.Styles.style({
        $nest: {
            '.heading': {
                display: 'block',
                fontSize: 'clamp(1rem, 0.875rem + 0.625vw, 1.625rem)',
                color: Theme.colors.primary.dark,
                marginBottom: '0.5rem',
                fontWeight: 700,
                lineHeight: 1.2,
                textAlign: 'center',
            },
            '.label': {
                display: 'block',
                marginBottom: '0.5rem',
                color: Theme.text.primary,
                textAlign: 'center',
            },
            '.file-uploader-dropzone': {
                display: 'flex',
                flexDirection: 'column',
                gridRowGap: '2rem',
                rowGap: '1.5rem',
                marginBottom: '2.5rem',
                marginTop: '2rem',
                $nest: {
                    '.droparea': {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        gridRowGap: '1rem',
                        rowGap: '1rem',
                        padding: '1.875rem 0',
                        background: 'rgba(255,255,255,.1)',
                        border: `1px dashed ${Theme.colors.primary.light}`,
                        borderRadius: '0.625rem',
                        cursor: 'pointer',
                    },
                    'i-upload': {
                        position: 'absolute',
                        top: 0,
                        opacity: 0,
                        minHeight: 'auto',
                        minWidth: 'auto',
                        margin: 0,
                        zIndex: 1,
                        $nest: {
                            '.i-upload_preview-img': {
                                display: 'none!important',
                            },
                        },
                    },
                    '.filelist': {
                        marginBottom: '0.5rem',
                        $nest: {
                            '@media screen and (max-width: 767px)': {
                                flex: '1',
                                overflowY: 'auto'
                            },
                            '.file': {
                                border: `1px solid ${Theme.divider}`,
                                borderRadius: '0.5rem',
                                $nest: {
                                    '&:hover': {
                                        border: `1px solid ${Theme.colors.primary.main}`,
                                    }
                                }
                            },
                        },
                    },
                    '.pagination': {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '5px',
                        $nest: {
                            '@media screen and (max-width: 767px)': {
                                display: 'none'
                            },
                            'i-button': {
                                width: '24px',
                                height: '24px',
                                borderRadius: '50%',
                                fontSize: '11px',
                                fontWeight: 700,
                                color: Theme.colors.primary.dark,
                                backgroundColor: 'transparent',
                                border: `1px solid ${Theme.colors.primary.dark}`,
                                boxShadow: 'none',
                                gap: 'unset',
                                userSelect: 'none',
                                $nest: {
                                    '&.active': {
                                        color: Theme.colors.primary.contrastText,
                                        backgroundColor: Theme.colors.primary.dark,
                                    },
                                    '&.dots': {
                                        borderColor: 'transparent',
                                    },
                                    'i-icon': {
                                        height: '10px!important',
                                        width: '12px!important',
                                        fill: `${Theme.colors.primary.dark}!important`,
                                    },
                                },
                            },
                        },
                    },
                },
            },
            '.status-filter': {
                display: 'flex',
                justifyContent: 'space-between',
                $nest: {
                    '.filter-bar': {
                        display: 'flex',
                        gap: '10px',
                        $nest: {
                            '@media screen and (max-width: 767px)': {
                                display: 'none'
                            },
                            '.filter-btn': {
                                fontSize: '14px',
                                background: 'transparent',
                                color: Theme.text.secondary,
                                boxShadow: 'none',
                            },
                            '.filter-btn.filter-btn-active': {
                                fontWeight: 'bold',
                                color: Theme.colors.primary.dark,
                            },
                        },
                    },
                    '.filter-actions': {
                        $nest: {
                            'i-button': {
                                background: Theme.colors.primary.light,
                                color: Theme.colors.primary.contrastText,
                                padding: '5px 10px',
                                fontSize: '14px',
                                boxShadow: 'none',
                            },
                        },
                    },
                },
            },
            '.note': {
                display: 'flex',
                flexDirection: 'column',
                lineHeight: '1.4375rem',
                paddingLeft: '1.25rem',
                paddingRight: '0.25rem',
                $nest: {
                    '&:not(:last-child)': {
                        marginBottom: '1.5rem',
                    },
                    '.head': {
                        fontSize: '14px',
                        fontWeight: 700,
                        color: Theme.text.primary,
                    },
                    '.desc': {
                        fontSize: '12px',
                        fontWeight: 400,
                        letterSpacing: 0,
                        color: Theme.text.secondary,
                    },
                },
            },
        },
    });
});
define("@scom/scom-upload-modal/interface.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FILE_STATUS = void 0;
    var FILE_STATUS;
    (function (FILE_STATUS) {
        FILE_STATUS[FILE_STATUS["LISTED"] = 0] = "LISTED";
        FILE_STATUS[FILE_STATUS["SUCCESS"] = 1] = "SUCCESS";
        FILE_STATUS[FILE_STATUS["FAILED"] = 2] = "FAILED";
        FILE_STATUS[FILE_STATUS["UPLOADING"] = 3] = "UPLOADING";
    })(FILE_STATUS || (FILE_STATUS = {}));
    exports.FILE_STATUS = FILE_STATUS;
    ;
});
define("@scom/scom-upload-modal/model.ts", ["require", "exports", "@scom/scom-upload-modal/interface.ts"], function (require, exports, interface_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Model = void 0;
    class Model {
        constructor() {
            this._data = {
                isBrowseButtonShown: false,
                mulitiple: true,
            };
            this.currentPage = 1;
            this._currentFilterStatus = interface_1.FILE_STATUS.LISTED;
            this.files = [];
            this.fileListData = [];
        }
        get rootCid() {
            return this._data.rootCid;
        }
        set rootCid(value) {
            this._data.rootCid = value;
        }
        get mulitiple() {
            return this._data.mulitiple ?? true;
        }
        set mulitiple(value) {
            this._data.mulitiple = value ?? true;
        }
        get parentDir() {
            return this._data.parentDir;
        }
        set parentDir(value) {
            this._data.parentDir = value;
        }
        get isBrowseButtonShown() {
            return this._data.isBrowseButtonShown ?? false;
        }
        set isBrowseButtonShown(value) {
            this._data.isBrowseButtonShown = value ?? false;
        }
        get manager() {
            return this._data.manager;
        }
        set manager(value) {
            this._data.manager = value;
        }
        get buttonFilters() {
            return [
                {
                    id: 'btnAll',
                    caption: '$all',
                    status: interface_1.FILE_STATUS.LISTED,
                },
                {
                    id: 'btnSuccess',
                    caption: '$success',
                    status: interface_1.FILE_STATUS.SUCCESS,
                },
                {
                    id: 'btnFail',
                    caption: '$fail',
                    status: interface_1.FILE_STATUS.FAILED,
                },
                {
                    id: 'btnUploading',
                    caption: '$uploading',
                    status: interface_1.FILE_STATUS.UPLOADING,
                },
            ];
        }
        get currentFilterStatus() {
            return this._currentFilterStatus;
        }
        set currentFilterStatus(value) {
            this._currentFilterStatus = value;
        }
        addFile(file) {
            this.fileListData.push({ file, status: 0, percentage: 0 });
            this.files.push(file);
        }
        removeFile(index) {
            this.fileListData.splice(index, 1);
            this.files.splice(index, 1);
        }
        resetFiles() {
            this.fileListData = [];
            this.files = [];
        }
        filterFiles() {
            switch (this.currentFilterStatus) {
                case interface_1.FILE_STATUS.LISTED:
                    this.fileListData = this.fileListData?.length
                        ? this.fileListData.filter((fileData) => ![
                            interface_1.FILE_STATUS.LISTED,
                            interface_1.FILE_STATUS.SUCCESS,
                            interface_1.FILE_STATUS.FAILED,
                        ].includes(fileData.status))
                        : this.fileListData;
                    break;
                case interface_1.FILE_STATUS.SUCCESS:
                    this.fileListData = this.fileListData?.length
                        ? this.fileListData.filter((fileData) => ![interface_1.FILE_STATUS.SUCCESS].includes(fileData.status))
                        : this.fileListData;
                    break;
                case interface_1.FILE_STATUS.FAILED:
                    this.fileListData = this.fileListData?.length
                        ? this.fileListData.filter((fileData) => ![interface_1.FILE_STATUS.FAILED].includes(fileData.status))
                        : this.fileListData;
                    break;
            }
        }
        resetUploadingFiles() {
            if (this.fileListData &&
                this.fileListData.some((f) => f.status === interface_1.FILE_STATUS.UPLOADING)) {
                this.fileListData = this.fileListData.map((f) => {
                    if (f.status === interface_1.FILE_STATUS.UPLOADING) {
                        return {
                            ...f,
                            status: interface_1.FILE_STATUS.LISTED,
                        };
                    }
                    return f;
                });
            }
        }
        setFailedFiles() {
            if (this.fileListData?.length) {
                this.fileListData = this.fileListData.map(f => {
                    if ([interface_1.FILE_STATUS.LISTED, interface_1.FILE_STATUS.UPLOADING].includes(f.status)) {
                        return {
                            ...f,
                            status: interface_1.FILE_STATUS.FAILED
                        };
                    }
                    return f;
                });
            }
        }
        setSuccessFiles() {
            for (const file of this.fileListData) {
                file.status = interface_1.FILE_STATUS.SUCCESS;
            }
        }
        filteredFileListData() {
            return this.currentFilterStatus === interface_1.FILE_STATUS.LISTED
                ? this.fileListData
                : this.fileListData.filter((i) => i.status === this.currentFilterStatus);
        }
        async getNewFileName(parentNode, fileName) {
            const arr = fileName.split('.');
            let newName = arr.slice(0, -1).join('.');
            let ext = arr[arr.length - 1];
            while (await parentNode.findItem(`${newName}.${ext}`)) {
                const regex = /\((\d+)\)$/;
                const matches = newName.match(regex);
                if (matches) {
                    const lastNumber = parseInt(matches[1]);
                    const updatedString = newName.replace(/\((\d+)\)$/, '');
                    newName = `${updatedString}(${lastNumber + 1})`;
                }
                else {
                    newName = `${newName}(1)`;
                }
            }
            return `${newName}.${ext}`;
        }
        async isFileExists(manager, filePath) {
            let newFilePath;
            const arr = filePath.split('/');
            const parentPath = arr.slice(0, -1).join('/');
            const fileName = arr.slice(-1)[0];
            let fileNode;
            if (parentPath) {
                fileNode = await manager.getFileNode(parentPath);
            }
            else {
                fileNode = await manager.getRootNode();
            }
            const node = await fileNode.findItem(fileName);
            if (node) {
                let newName = await this.getNewFileName(fileNode, fileName);
                newFilePath = `${parentPath}/${newName}`;
            }
            return { isExists: !!node, newFilePath };
        }
    }
    exports.Model = Model;
});
define("@scom/scom-upload-modal/translations.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/scom-upload-modal/translations.json.ts'/> 
    exports.default = {
        "en": {
            "all_data_uploaded_to_ipfs_explorer_is_available_to_anyone_who_requests_it_using_the_correct_cid_do_not_store_any_private_or_sensitive_information_in_an_unencrypted_form_using_ipfs_explorer": "All data uploaded to IPFS Explorer is available to anyone who requests it using the correct CID. Do not store any private or sensitive information in an unencrypted form using IPFS Explorer.",
            "all_files": "All Files",
            "all_folders": "All Folders",
            "all": "All",
            "back_to_upload": "Back to Upload",
            "browse_file": "Browse File",
            "cancel": "Cancel",
            "choose_file_to_upload_to_ipfs_network": "Choose file to upload to IPFS network",
            "clear": "Clear",
            "completed": "Completed",
            "confirm": "Confirm",
            "delete": "Delete",
            "deleting_files_from_the_ipfs_explorer_sites_files_page_will_remove_them_from_the_file_listing_for_your_account_but_that_doesnt_prevent_nodes_on_the_decentralized_storage_network_from_retaining_copies_of_the_data_indefinitely_do_not_use_ipfs_explorer_for_data_that_may_need_to_be_permanently_deleted_in_the_future": "Deleting files from the IPFS Explorer site’s Files page will remove them from the file listing for your account, but that doesn’t prevent nodes on the decentralized storage network from retaining copies of the data indefinitely. Do not use IPFS Explorer for data that may need to be permanently deleted in the future.",
            "do_you_want_to_discard_changes": "Do you want to discard changes?",
            "drag_and_drop_your_files_here": "Drag and drop your files here",
            "edit": "Edit",
            "fail": "Fail",
            "failed": "Failed",
            "file_preview": "File Preview",
            "name": "Name",
            "new_folder": "New folder",
            "or": "Or",
            "permanent_data": "Permanent Data",
            "processing_your_files": "Processing your files...",
            "public_data": "Public Data",
            "rename": "Rename",
            "save": "Save",
            "select_files": "Select Files",
            "select": "Select",
            "size": "Size",
            "success": "Success",
            "type": "Type",
            "upload_file_to_ipfs": "Upload file to IPFS",
            "upload_files_to": "Upload files to",
            "upload_more_files": "Upload more files",
            "upload": "Upload",
            "uploading_file_to_ipfs": "Uploading file(s) to IPFS...",
            "uploading": "Uploading",
        },
        "zh-hant": {
            "all_data_uploaded_to_ipfs_explorer_is_available_to_anyone_who_requests_it_using_the_correct_cid_do_not_store_any_private_or_sensitive_information_in_an_unencrypted_form_using_ipfs_explorer": "所有上傳到 IPFS Explorer 的數據都可以通過使用正確的 CID 請求的任何人使用。請勿使用 IPFS Explorer 以未加密形式存儲任何私人或敏感信息。",
            "all_files": "所有文件",
            "all_folders": "所有文件夾",
            "all": "所有",
            "back_to_upload": "返回上傳",
            "browse_file": "瀏覽文件",
            "cancel": "取消",
            "choose_file_to_upload_to_ipfs_network": "選擇要上傳到 IPFS 網絡的文件",
            "clear": "清除",
            "completed": "已完成",
            "confirm": "確認",
            "delete": "刪除",
            "deleting_files_from_the_ipfs_explorer_sites_files_page_will_remove_them_from_the_file_listing_for_your_account_but_that_doesnt_prevent_nodes_on_the_decentralized_storage_network_from_retaining_copies_of_the_data_indefinitely_do_not_use_ipfs_explorer_for_data_that_may_need_to_be_permanently_deleted_in_the_future": "從 IPFS Explorer 站點的文件頁面刪除文件將從您的帳戶的文件列表中刪除它們，但這不會阻止分散式存儲網絡上的節點無限期保留數據的副本。請勿使用 IPFS Explorer 用於可能需要在將來永久刪除的數據。",
            "do_you_want_to_discard_changes": "您要放棄更改嗎？",
            "drag_and_drop_your_files_here": "將文件拖放到此處",
            "edit": "編輯",
            "fail": "失敗",
            "failed": "失敗",
            "file_preview": "文件預覽",
            "name": "名稱",
            "new_folder": "新文件夾",
            "or": "或",
            "permanent_data": "永久數據",
            "processing_your_files": "正在處理您的文件...",
            "public_data": "公共數據",
            "rename": "重命名",
            "save": "保存",
            "select_files": "選擇文件",
            "select": "選擇",
            "size": "大小",
            "success": "成功",
            "type": "類型",
            "upload_file_to_ipfs": "上傳文件到 IPFS",
            "upload_files_to": "上傳文件到",
            "upload_more_files": "上傳更多文件",
            "upload": "上傳",
            "uploading_file_to_ipfs": "正在上傳文件到 IPFS...",
            "uploading": "正在上傳"
        },
        "vi": {
            "all_data_uploaded_to_ipfs_explorer_is_available_to_anyone_who_requests_it_using_the_correct_cid_do_not_store_any_private_or_sensitive_information_in_an_unencrypted_form_using_ipfs_explorer": "Tất cả dữ liệu được tải lên IPFS Explorer đều có sẵn cho bất kỳ ai yêu cầu bằng cách sử dụng CID chính xác. Không lưu trữ bất kỳ thông tin cá nhân hoặc nhạy cảm nào dưới dạng không mã hóa khi sử dụng IPFS Explorer.",
            "all_files": "Tất cả tệp",
            "all_folders": "Tất cả thư mục",
            "all": "Tất cả",
            "back_to_upload": "Quay lại Tải lên",
            "browse_file": "Duyệt tệp",
            "cancel": "Hủy",
            "choose_file_to_upload_to_ipfs_network": "Chọn tệp để tải vào mạng IPFS",
            "clear": "Xóa",
            "completed": "Hoàn thành",
            "confirm": "Xác nhận",
            "delete": "Xóa",
            "deleting_files_from_the_ipfs_explorer_sites_files_page_will_remove_them_from_the_file_listing_for_your_account_but_that_doesnt_prevent_nodes_on_the_decentralized_storage_network_from_retaining_copies_of_the_data_indefinitely_do_not_use_ipfs_explorer_for_data_that_may_need_to_be_permanently_deleted_in_the_future": "Xóa tệp từ trang Tệp của trang web IPFS Explorer sẽ xóa chúng khỏi danh sách tệp trong tài khoản của bạn, nhưng điều đó không ngăn các nút trên mạng lưu trữ phi tập trung giữ lại các bản sao dữ liệu vô thời hạn. Không sử dụng IPFS Explorer cho dữ liệu có thể cần bị xóa vĩnh viễn trong tương lai",
            "do_you_want_to_discard_changes": "Bạn có muốn hủy thay đổi không?",
            "drag_and_drop_your_files_here": "Kéo và thả tệp của bạn vào đây",
            "edit": "Chỉnh sửa",
            "fail": "Thất bại",
            "failed": "Thất bại",
            "file_preview": "Xem trước tệp",
            "name": "Tên",
            "new_folder": "Thư mục mới",
            "or": "Hoặc",
            "permanent_data": "Dữ liệu cố định",
            "processing_your_files": "Đang xử lý tệp của bạn...",
            "public_data": "Dữ liệu công khai",
            "rename": "Đổi tên",
            "save": "Lưu",
            "select_files": "Chọn tệp",
            "select": "Chọn",
            "size": "Kích thước",
            "success": "Thành công",
            "type": "Loại",
            "upload_file_to_ipfs": "Tải tệp vào IPFS",
            "upload_files_to": "Tải tệp vào",
            "upload_more_files": "Tải nhiều tệp",
            "upload": "Tải lên",
            "uploading_file_to_ipfs": "Đang tải tệp vào IPFS...",
            "uploading": "Đang tải lên",
        }
    };
});
define("@scom/scom-upload-modal", ["require", "exports", "@ijstech/components", "@scom/scom-upload-modal/assets.ts", "@scom/scom-upload-modal/index.css.ts", "@scom/scom-upload-modal/model.ts", "@scom/scom-upload-modal/translations.json.ts", "@scom/scom-upload-modal/interface.ts"], function (require, exports, components_3, assets_1, index_css_1, model_1, translations_json_1, interface_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ScomUploadModal = void 0;
    const Theme = components_3.Styles.Theme.ThemeVars;
    const ITEMS_PER_PAGE = 5;
    let ScomUploadModal = class ScomUploadModal extends components_3.Module {
        constructor(parent, options) {
            super(parent, options);
            this.isForcedCancelled = false;
            this.currentPage = 1;
        }
        get rootCid() {
            return this.model.rootCid;
        }
        set rootCid(value) {
            console.log('set rootCid: ', value);
            this.model.rootCid = value;
        }
        get parentDir() {
            return this.model.parentDir;
        }
        set parentDir(value) {
            console.log('set parentDir: ', value);
            this.model.parentDir = value;
        }
        get manager() {
            return this.model.manager;
        }
        set manager(value) {
            this.model.manager = value;
        }
        get isBrowseButtonShown() {
            return this.model.isBrowseButtonShown;
        }
        set isBrowseButtonShown(value) {
            this.model.isBrowseButtonShown = value;
            if (this.pnlBrowse)
                this.pnlBrowse.visible = value;
        }
        get mulitiple() {
            return this.model.mulitiple;
        }
        set mulitiple(value) {
            this.model.mulitiple = value;
            this.updateUI();
        }
        updateUI() {
            this.lblTitle.caption = this.mulitiple ? "$upload_more_files" : "$upload_file_to_ipfs";
            this.fileUploader.multiple = this.mulitiple;
            this.btnUpload.caption = this.mulitiple ? "$upload_file_to_ipfs" : "$confirm";
            this.pnlPagination.visible = this.mulitiple;
        }
        show(path, files) {
            this.folderPath = path;
            this.updateBtnCaption();
            if (files?.length) {
                for (let i = 0; i < files.length; i++) {
                    this.model.addFile(files[i]);
                }
                this.updateWidget();
                this.toggle(true);
            }
        }
        updateWidget() {
            this.renderFileList();
            this.renderFilterBar();
            this.renderPagination();
        }
        refresh() { }
        onBeforeDrop(target) {
            console.log('onBeforeDrop: ', target);
            this.fileUploader.enabled = false;
            this.imgFile.url = assets_1.default.fullPath("img/loading-icon.svg");
            this.lblDrag.caption = '$processing_your_files';
        }
        onBeforeUpload(target, file) {
            return new Promise((resolve, reject) => {
                resolve(true);
            });
        }
        numPages() {
            return Math.ceil(this.model.filteredFileListData().length / ITEMS_PER_PAGE);
        }
        setCurrentPage(page) {
            if (page >= 1 && page <= this.numPages())
                this.currentPage = page;
            this.renderFileList();
            this.renderPagination();
        }
        get isSmallWidth() {
            return !!window.matchMedia('(max-width: 767px)').matches;
        }
        updateFilterBar() {
            this.model.buttonFilters.forEach(v => {
                const btn = this[v.id];
                if (this.model.currentFilterStatus === v.status) {
                    btn.classList.add('filter-btn-active');
                }
                else {
                    btn.classList.remove('filter-btn-active');
                }
                if (v.status === interface_2.FILE_STATUS.LISTED) {
                    btn.caption = `${this.i18n.get('$all')} (${this.model.fileListData.length})`;
                }
                else {
                    btn.caption = `${this.i18n.get(v.caption)} (${this.model.fileListData.filter((i) => i.status === v.status).length})`;
                }
            });
        }
        async renderFilterBar() {
            this.updateFilterBar();
            this.pnlFilterActions.clearInnerHTML();
            if (this.model.currentFilterStatus === interface_2.FILE_STATUS.UPLOADING) {
                this.pnlFilterActions.appendChild(this.$render("i-button", { caption: "$cancel", onClick: this.onCancel.bind(this) }));
            }
            else {
                this.pnlFilterActions.appendChild(this.$render("i-button", { caption: "$clear", onClick: this.onClear.bind(this) }));
            }
        }
        async renderFileList() {
            this.pnlFileList.clearInnerHTML();
            const filteredFileListData = this.model.filteredFileListData();
            const paginatedFilteredFileListData = this.isSmallWidth ? this.model.fileListData : [...filteredFileListData].slice((this.currentPage - 1) * ITEMS_PER_PAGE, ITEMS_PER_PAGE * this.currentPage);
            const startIdx = this.isSmallWidth ? 0 : (this.currentPage - 1) * ITEMS_PER_PAGE;
            for (let i = 0; i < paginatedFilteredFileListData.length; i++) {
                const fileData = paginatedFilteredFileListData[i];
                const pnlRow2 = (this.$render("i-hstack", { verticalAlignment: 'center', gap: "0.5rem" },
                    this.$render("i-label", { maxWidth: "100%", caption: this.formatBytes(fileData.file.size || 0), font: { size: '0.75rem' }, textOverflow: "ellipsis", opacity: 0.75 })));
                this.renderStatus(fileData.status, pnlRow2, startIdx + i);
                this.pnlFileList.appendChild(this.$render("i-hstack", { class: `file file-${i} status-${fileData.status}`, padding: { top: '0.5rem', bottom: '0.5rem', left: '0.75rem', right: '0.75rem' }, stack: { shrink: '0', grow: '1' }, overflow: "hidden", gap: "1rem" },
                    this.$render("i-icon", { width: "1.75rem", height: "1.75rem", name: "file", fill: Theme.colors.primary.main, border: { radius: '0.5rem', width: '1px', color: Theme.divider, style: 'solid' }, padding: { top: '0.35rem', bottom: '0.35rem', left: '0.35rem', right: '0.35rem' }, stack: { shrink: '0' } }),
                    this.$render("i-vstack", { maxWidth: "100%", stack: { shrink: '1', grow: '1' }, gap: "0.25rem", overflow: "hidden" },
                        this.$render("i-hstack", { horizontalAlignment: 'space-between', verticalAlignment: 'center', gap: "1rem" },
                            this.$render("i-label", { maxWidth: "100%", caption: fileData.file.path || fileData.file.name, font: { weight: 600, size: '0.875rem' }, textOverflow: "ellipsis" }),
                            this.$render("i-icon", { width: "0.875rem", height: "0.875rem", name: "times", fill: Theme.text.primary, cursor: "pointer", onClick: () => this.onRemoveFile(i) })),
                        pnlRow2,
                        this.$render("i-hstack", { id: `progress-${startIdx + i}`, verticalAlignment: 'center', gap: "0.75rem", visible: fileData.status === interface_2.FILE_STATUS.UPLOADING },
                            this.$render("i-progress", { height: "auto", percent: +fileData.percentage, strokeWidth: 10, stack: { grow: '1', shrink: '1', basis: '60%' }, border: { radius: '0.5rem' } }),
                            this.$render("i-label", { caption: `${fileData.percentage}%`, font: { size: '0.75rem' }, stack: { grow: '1', shrink: '0' } })))));
            }
        }
        formatBytes(bytes, decimals = 2) {
            if (bytes === 0)
                return '0 Bytes';
            const k = 1024;
            const dm = decimals < 0 ? 0 : decimals;
            const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
            const i = Math.floor(Math.log(bytes) / Math.log(k));
            return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
        }
        renderStatus(status, parent, idx) {
            let uploadStatus = "";
            let iconOptions = { name: 'times', background: { color: Theme.text.primary }, visible: false };
            switch (status) {
                case interface_2.FILE_STATUS.SUCCESS:
                    iconOptions.name = 'check';
                    iconOptions.background.color = Theme.colors.success.main;
                    iconOptions.visible = true;
                    uploadStatus = '$completed';
                    break;
                case interface_2.FILE_STATUS.FAILED:
                    iconOptions.name = 'times';
                    iconOptions.background.color = Theme.colors.error.main;
                    iconOptions.visible = true;
                    uploadStatus = '$failed';
                case interface_2.FILE_STATUS.UPLOADING:
                    uploadStatus = '$uploading';
            }
            parent.appendChild(this.$render("i-hstack", { id: `status-${idx}`, verticalAlignment: "center", gap: "0.5rem" },
                this.$render("i-label", { caption: uploadStatus }),
                this.$render("i-icon", { width: "0.875rem", height: "0.875rem", padding: { top: '0.125rem', bottom: '0.125rem', left: '0.125rem', right: '0.125rem' }, border: { radius: '50%' }, fill: Theme.colors.primary.contrastText, ...iconOptions })));
        }
        getPagination(currentIndex, totalPages) {
            let current = currentIndex, last = totalPages, delta = 2, left = current - delta, right = current + delta + 1, range = [], rangeWithDots = [], l;
            for (let i = 1; i <= last; i++) {
                if (i == 1 || i == last || (i >= left && i < right)) {
                    range.push(i);
                }
            }
            for (let i of range) {
                if (l) {
                    if (i - l === 2) {
                        rangeWithDots.push(l + 1);
                    }
                    else if (i - l !== 1) {
                        rangeWithDots.push('...');
                    }
                }
                rangeWithDots.push(i);
                l = i;
            }
            return rangeWithDots;
        }
        async renderPagination() {
            const numPages = this.numPages();
            const rangeWithDots = this.getPagination(this.currentPage, numPages);
            if (numPages >= 1) {
                if (this.currentPage > numPages) {
                    this.setCurrentPage(numPages);
                }
                else {
                    this.pnlPagination.clearInnerHTML();
                    const prevBtn = new components_3.Button(this.pnlPagination, {
                        icon: { name: 'chevron-left' },
                    });
                    prevBtn.onClick = () => {
                        this.setCurrentPage(this.currentPage - 1);
                    };
                    for (let i = 0; i < rangeWithDots.length; i++) {
                        const pageBtn = new components_3.Button(this.pnlPagination, {
                            class: this.currentPage === rangeWithDots[i] ? 'active' : '',
                            caption: rangeWithDots[i].toString(),
                        });
                        if (rangeWithDots[i] === '...') {
                            pageBtn.classList.add('dots');
                        }
                        else {
                            pageBtn.onClick = () => {
                                this.setCurrentPage(rangeWithDots[i]);
                            };
                        }
                    }
                    const nexBtn = new components_3.Button(this.pnlPagination, {
                        icon: { name: 'chevron-right' },
                    });
                    nexBtn.onClick = () => {
                        this.setCurrentPage(this.currentPage + 1);
                    };
                }
            }
            else {
                this.pnlPagination.clearInnerHTML();
            }
        }
        onChangeCurrentFilterStatus(status) {
            this.model.currentFilterStatus = status;
            this.updateWidget();
        }
        onClear() {
            this.model.filterFiles();
            this.updateWidget();
            if (!this.model.fileListData.length) {
                this.toggle(false);
            }
            this.refresh();
        }
        onCancel() {
            this.currentRequest.abort();
            this.isForcedCancelled = true;
            this.model.resetUploadingFiles();
        }
        async onChangeFile(source, files) {
            console.log('onChangeFile: ', files);
            return new Promise(async (resolve, reject) => {
                if (!files.length)
                    reject();
                this.fileUploader.enabled = true;
                this.imgFile.url = assets_1.default.fullPath("img/file-icon.png");
                this.updateBtnCaption();
                for (let i = 0; i < files.length; i++) {
                    this.model.addFile(files[i]);
                }
                this.updateWidget();
                this.toggle(true);
                this.fileUploader.clear();
                this.refresh();
            });
        }
        updateBtnCaption() {
            this.lblDrag.caption = this.isSmallWidth ? '$select_files' : '$drag_and_drop_your_files_here';
        }
        onRemove(source, file) { }
        onRemoveFile(index) {
            this.model.removeFile(index);
            this.updateWidget();
            if (!this.model.fileListData.length) {
                this.toggle(false);
            }
            this.refresh();
        }
        async onUpload() {
            return new Promise(async (resolve, reject) => {
                if (!this.model.fileListData.length || !this.manager)
                    reject();
                this.btnUpload.caption = '$uploading_file_to_ipfs';
                this.btnUpload.enabled = false;
                this.isForcedCancelled = false;
                this.btnBrowseFile.enabled = false;
                this.fileUploader.enabled = false;
                try {
                    let filePaths = [];
                    for (let i = 0; i < this.model.fileListData.length; i++) {
                        const file = this.model.fileListData[i];
                        let filePath = this.folderPath ? `${this.folderPath}${file.file.path}` : file.file.path;
                        const { isExists, newFilePath } = await this.model.isFileExists(this.manager, filePath);
                        if (isExists) {
                            filePath = newFilePath;
                        }
                        filePaths.push(filePath);
                        file.status = interface_2.FILE_STATUS.UPLOADING;
                        this.updateFilterBar();
                        this.renderFileList();
                        this.renderPagination();
                        const statusWrapper = this.pnlFileList.querySelector(`#status-${i}`);
                        if (statusWrapper) {
                            statusWrapper.visible = false;
                        }
                        const progressWrapper = this.pnlFileList.querySelector(`#progress-${i}`);
                        if (progressWrapper) {
                            progressWrapper.visible = true;
                        }
                        await this.manager.addFile(filePath, file.file);
                        file.percentage = 100;
                        if (progressWrapper) {
                            const progress = progressWrapper.firstElementChild;
                            const label = progressWrapper.lastElementChild;
                            if (progress)
                                progress.percent = 100;
                            if (label)
                                label.caption = '100%';
                        }
                    }
                    await this.manager.applyUpdates();
                    this.model.setSuccessFiles();
                    let rootNode = await this.manager.getRootNode();
                    if (this.onUploaded)
                        this.onUploaded(this, rootNode.cid, filePaths);
                }
                catch (err) {
                    console.log('onUpload ', err);
                    this.model.setFailedFiles();
                }
                this.updateWidget();
                this.resetButtons();
                this.refresh();
            });
        }
        browseFile() {
            if (this.onBrowseFile)
                this.onBrowseFile();
        }
        reset() {
            this.pnlFileList.clearInnerHTML();
            this.pnlPagination.clearInnerHTML();
            this.resetButtons();
            this.model.resetFiles();
            this.toggle(false);
        }
        resetButtons() {
            this.btnUpload.caption = this.mulitiple ? '$upload_file_to_ipfs' : "$confirm";
            this.btnUpload.enabled = true;
            this.btnBrowseFile.enabled = true;
            this.fileUploader.enabled = true;
        }
        toggle(showFileList) {
            if (showFileList) {
                this.pnlStatusFilter.visible = true;
                this.btnUpload.visible = true;
                this.pnlNote.visible = false;
            }
            else {
                this.pnlStatusFilter.visible = false;
                this.btnUpload.visible = false;
                this.pnlNote.visible = true;
            }
        }
        renderFilters() {
            this.pnlFilterBar.clearInnerHTML();
            if (!this.model.buttonFilters)
                return;
            for (const v of this.model.buttonFilters) {
                this.pnlFilterBar.appendChild(this.$render("i-button", { id: v.id, class: `filter-btn ${v.status === interface_2.FILE_STATUS.LISTED ? 'filter-btn-active' : ''}`, caption: `${v.caption} (0)`, onClick: () => this.onChangeCurrentFilterStatus(v.status) }));
            }
        }
        async init() {
            this.i18n.init({ ...translations_json_1.default });
            super.init();
            this.model = new model_1.Model();
            this.classList.add(index_css_1.uploadModalStyle);
            this.renderFilters();
            this.rootCid = this.getAttribute('rootCid', true);
            this.parentDir = this.getAttribute('parentDir', true);
            const isBrowseButtonShown = this.getAttribute('isBrowseButtonShown', true);
            if (isBrowseButtonShown != null)
                this.isBrowseButtonShown = isBrowseButtonShown;
            const mulitiple = this.getAttribute('mulitiple', true);
            if (mulitiple != null)
                this.mulitiple = mulitiple;
        }
        render() {
            return (this.$render("i-panel", { height: "100%", overflow: { y: 'auto' }, padding: { top: '3.125rem', bottom: '3.125rem', left: '8.125rem', right: '8.125rem' }, border: { radius: '0.375rem' }, mediaQueries: [
                    {
                        maxWidth: '767px',
                        properties: {
                            padding: { top: '1.5rem', bottom: '1.5rem', left: '1.5rem', right: '1.5rem' }
                        }
                    }
                ] },
                this.$render("i-label", { id: "lblTitle", class: "heading", caption: "$upload_more_files" }),
                this.$render("i-label", { class: "label", caption: "$choose_file_to_upload_to_ipfs_network" }),
                this.$render("i-panel", { class: "file-uploader-dropzone", maxHeight: "calc(100% - 4.5rem)" },
                    this.$render("i-panel", { class: "droparea" },
                        this.$render("i-upload", { id: "fileUploader", multiple: true, draggable: true, onBeforeDrop: this.onBeforeDrop, onUploading: this.onBeforeUpload, onChanged: this.onChangeFile, onRemoved: this.onRemove }),
                        this.$render("i-image", { id: "imgFile", width: 60, height: 60, class: "icon", url: assets_1.default.fullPath('img/file-icon.png') }),
                        this.$render("i-label", { id: "lblDrag", caption: "$drag_and_drop_your_files_here" })),
                    this.$render("i-stack", { id: "pnlBrowse", direction: "vertical", alignItems: "center", justifyContent: "center", margin: { top: '-1rem' }, visible: false },
                        this.$render("i-label", { class: "label", caption: "$or" }),
                        this.$render("i-button", { id: "btnBrowseFile", caption: "$browse_file", boxShadow: "none", background: { color: Theme.colors.primary.main }, font: { color: Theme.colors.primary.contrastText }, padding: { top: '0.5rem', bottom: '0.5rem', left: '0.5rem', right: '0.5rem' }, onClick: this.browseFile })),
                    this.$render("i-panel", { id: "pnlStatusFilter", class: "status-filter", visible: false },
                        this.$render("i-panel", { id: "pnlFilterBar", class: "filter-bar" }),
                        this.$render("i-panel", { id: "pnlFilterActions", class: "filter-actions", margin: { left: 'auto' } })),
                    this.$render("i-vstack", { id: "pnlFileList", class: "filelist", gap: "0.5rem" }),
                    this.$render("i-panel", { id: "pnlPagination", class: "pagination" }),
                    this.$render("i-button", { id: "btnUpload", class: "upload-btn", caption: "$upload_files_to_ipfs", boxShadow: "none", background: { color: Theme.colors.primary.main }, font: { color: Theme.colors.primary.contrastText }, padding: { top: '0.5rem', bottom: '0.5rem', left: '0.5rem', right: '0.5rem' }, visible: false, onClick: this.onUpload })),
                this.$render("i-panel", { id: "pnlNote" },
                    this.$render("i-panel", { class: "note" },
                        this.$render("i-label", { class: "head", caption: "$public_data" }),
                        this.$render("i-label", { class: "desc", caption: "$all_data_uploaded_to_ipfs_explorer_is_available_to_anyone_who_requests_it_using_the_correct_cid_do_not_store_any_private_or_sensitive_information_in_an_unencrypted_form_using_ipfs_explorer" })),
                    this.$render("i-panel", { class: "note" },
                        this.$render("i-label", { class: "head", caption: "$permanent_data" }),
                        this.$render("i-label", { class: "desc", caption: "$deleting_files_from_the_ipfs_explorer_sites_files_page_will_remove_them_from_the_file_listing_for_your_account_but_that_doesnt_prevent_nodes_on_the_decentralized_storage_network_from_retaining_copies_of_the_data_indefinitely_do_not_use_ipfs_explorer_for_data_that_may_need_to_be_permanently_deleted_in_the_future" })))));
        }
    };
    ScomUploadModal = __decorate([
        (0, components_3.customElements)('i-scom-upload-modal')
    ], ScomUploadModal);
    exports.ScomUploadModal = ScomUploadModal;
});
