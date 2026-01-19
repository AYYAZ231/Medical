import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UiService {
    private sidebarMobileOpen = new BehaviorSubject<boolean>(false);
    sidebarMobileOpen$ = this.sidebarMobileOpen.asObservable();

    toggleMobileSidebar() {
        this.sidebarMobileOpen.next(!this.sidebarMobileOpen.value);
    }

    closeMobileSidebar() {
        this.sidebarMobileOpen.next(false);
    }
}
