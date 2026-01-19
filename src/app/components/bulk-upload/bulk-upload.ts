import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from '../../services/toast.service';

@Component({
    selector: 'app-bulk-upload',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './bulk-upload.html',
    styleUrl: './bulk-upload.scss',
})
export class BulkUpload {
    constructor(private toastService: ToastService) { }

    downloadTemplate() {
        this.toastService.info('Downloading CSV template... (Mock download started)');
    }

    onFileSelected(event: any) {
        const file = event.target.files[0];
        if (file) {
            this.toastService.success(`File "${file.name}" selected for upload.`);
        }
    }

    onFileDropped(event: any) {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        if (file) {
            this.toastService.success(`File "${file.name}" dropped for upload.`);
        }
    }

    onDragOver(event: any) {
        event.preventDefault();
    }
}
