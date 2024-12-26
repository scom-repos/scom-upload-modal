import { IPFS } from '@ijstech/components';
import { FILE_STATUS, ICidInfo, IUploadData } from './interface';

export class Model {
  private _data: IUploadData = {
    isBrowseButtonShown: false,
    mulitiple: true,
  }
  private currentPage = 1
  private _currentFilterStatus: FILE_STATUS = FILE_STATUS.LISTED
  files: File[] = []
  fileListData: {
    file: any
    status: FILE_STATUS
    percentage: number | string
    url?: string
  }[] = []

  constructor() { }

  get rootCid() {
    return this._data.rootCid
  }

  set rootCid(value: string) {
    this._data.rootCid = value
  }

  get mulitiple() {
    return this._data.mulitiple ?? true
  }

  set mulitiple(value: boolean) {
    this._data.mulitiple = value ?? true
  }

  get parentDir() {
    return this._data.parentDir
  }

  set parentDir(value: Partial<ICidInfo>) {
    this._data.parentDir = value
  }

  get isBrowseButtonShown() {
    return this._data.isBrowseButtonShown ?? false
  }

  set isBrowseButtonShown(value: boolean) {
    this._data.isBrowseButtonShown = value ?? false
  }

  get manager() {
    return this._data.manager
  }

  set manager(value: IPFS.FileManager) {
    this._data.manager = value
  }

  get buttonFilters() {
    return [
      {
        id: 'btnAll',
        caption: '$all',
        status: FILE_STATUS.LISTED,
      },
      {
        id: 'btnSuccess',
        caption: '$success',
        status: FILE_STATUS.SUCCESS,
      },
      {
        id: 'btnFail',
        caption: '$fail',
        status: FILE_STATUS.FAILED,
      },
      {
        id: 'btnUploading',
        caption: '$uploading',
        status: FILE_STATUS.UPLOADING,
      },
    ]
  }

  get currentFilterStatus() {
    return this._currentFilterStatus
  }

  set currentFilterStatus(value: FILE_STATUS) {
    this._currentFilterStatus = value
  }

  addFile(file: File) {
    this.fileListData.push({ file, status: 0, percentage: 0 })
    this.files.push(file)
  }

  removeFile(index: number) {
    this.fileListData.splice(index, 1)
    this.files.splice(index, 1)
  }

  resetFiles() {
    this.fileListData = [];
    this.files = [];
  }

  filterFiles() {
    switch (this.currentFilterStatus) {
      case FILE_STATUS.LISTED:
        this.fileListData = this.fileListData?.length
          ? this.fileListData.filter(
            (fileData) =>
              ![
                FILE_STATUS.LISTED,
                FILE_STATUS.SUCCESS,
                FILE_STATUS.FAILED,
              ].includes(fileData.status)
          )
          : this.fileListData
        break
      case FILE_STATUS.SUCCESS:
        this.fileListData = this.fileListData?.length
          ? this.fileListData.filter(
            (fileData) => ![FILE_STATUS.SUCCESS].includes(fileData.status)
          )
          : this.fileListData
        break
      case FILE_STATUS.FAILED:
        this.fileListData = this.fileListData?.length
          ? this.fileListData.filter(
            (fileData) => ![FILE_STATUS.FAILED].includes(fileData.status)
          )
          : this.fileListData
        break
    }
  }

  resetUploadingFiles() {
    if (
      this.fileListData &&
      this.fileListData.some((f) => f.status === FILE_STATUS.UPLOADING)
    ) {
      this.fileListData = this.fileListData.map((f) => {
        if (f.status === FILE_STATUS.UPLOADING) {
          return {
            ...f,
            status: FILE_STATUS.LISTED,
          }
        }
        return f
      })
    }
  }

  setFailedFiles() {
    if (this.fileListData?.length) {
      this.fileListData = this.fileListData.map(f => {
        if ([FILE_STATUS.LISTED, FILE_STATUS.UPLOADING].includes(f.status)) {
          return {
            ...f,
            status: FILE_STATUS.FAILED
          }
        }
        return f;
      })
    }
  }

  setSuccessFiles() {
    for (const file of this.fileListData) {
      file.status = FILE_STATUS.SUCCESS;
    }

  }

  filteredFileListData() {
    return this.currentFilterStatus === FILE_STATUS.LISTED
      ? this.fileListData
      : this.fileListData.filter((i) => i.status === this.currentFilterStatus)
  }

  private async getNewFileName(parentNode: any, fileName: string) {
    const arr = fileName.split('.')
    let newName = arr.slice(0, -1).join('.')
    let ext = arr[arr.length - 1]
    while (await parentNode.findItem(`${newName}.${ext}`)) {
      const regex = /\((\d+)\)$/
      const matches = newName.match(regex)
      if (matches) {
        const lastNumber = parseInt(matches[1])
        const updatedString = newName.replace(/\((\d+)\)$/, '')
        newName = `${updatedString}(${lastNumber + 1})`
      } else {
        newName = `${newName}(1)`
      }
    }
    return `${newName}.${ext}`
  }

  async isFileExists(manager: IPFS.FileManager, filePath: string) {
    let newFilePath: string
    const arr = filePath.split('/')
    const parentPath = arr.slice(0, -1).join('/')
    const fileName = arr.slice(-1)[0]
    let fileNode
    if (parentPath) {
      fileNode = await manager.getFileNode(parentPath)
    } else {
      fileNode = await manager.getRootNode()
    }
    const node = await fileNode.findItem(fileName)
    if (node) {
      let newName = await this.getNewFileName(fileNode, fileName)
      newFilePath = `${parentPath}/${newName}`
    }
    return { isExists: !!node, newFilePath }
  }
}
