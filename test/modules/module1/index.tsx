import { application, Module, customModule, Container } from '@ijstech/components';
import {ScomUploadModal} from '@scom/scom-upload-modal';

@customModule
export default class Module1 extends Module {
    private uploadModal: ScomUploadModal;

    constructor(parent?: Container, options?: any) {
        super(parent, options);
    }

    private showUploadModal() {
        if (!this.uploadModal) {
            this.uploadModal = new ScomUploadModal(undefined, {

            });
        }
        this.uploadModal.openModal({
            width: '90%',
            maxWidth: '90rem',
            minHeight: 400,
            padding: { top: 0, bottom: 0, left: 0, right: 0 },
            closeOnBackdropClick: true,
            closeIcon: null
        });
        this.uploadModal.show();
    }

    async init() {
        super.init();
    }

    render() {
        return (
            <i-panel
                width="100%"
                padding={{ bottom: '1rem' }}
            >
                <i-button
                    caption='Upload'
                    padding={{top: 8, bottom: 8, left: 12, right: 12}}
                    onClick={this.showUploadModal}
                ></i-button>
            </i-panel>
        )
    }
}