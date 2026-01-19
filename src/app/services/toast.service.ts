import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface Toast {
    message: string;
    type: 'success' | 'danger' | 'info' | 'warning';
    duration?: number;
}

@Injectable({
    providedIn: 'root'
})
export class ToastService {
    private toastSubject = new Subject<Toast>();
    toasts$ = this.toastSubject.asObservable();

    show(message: string, type: 'success' | 'danger' | 'info' | 'warning' = 'success', duration: number = 3000) {
        this.toastSubject.next({ message, type, duration });
    }

    success(message: string) {
        this.show(message, 'success');
    }

    danger(message: string) {
        this.show(message, 'danger');
    }

    error(message: string) {
        this.danger(message);
    }

    info(message: string) {
        this.show(message, 'info');
    }

    warning(message: string) {
        this.show(message, 'warning');
    }
}
