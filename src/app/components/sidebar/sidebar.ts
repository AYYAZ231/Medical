import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, NavigationEnd, Router } from '@angular/router';
import { UiService } from '../../ui.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar implements OnInit {
  isCollapsed = false;
  isMobileOpen = false;

  menuItems = [
    { label: 'Dashboard', icon: 'fa-solid fa-table-cells-large', route: '/dashboard' },
    { label: 'Medicines', icon: 'fa-solid fa-link', route: '/medicines' },
    { label: 'Bulk Upload', icon: 'fa-solid fa-arrow-up-right-from-square', route: '/bulk-upload' },
    { label: 'Sales', icon: 'fa-solid fa-cart-shopping', route: '/sales' },
    { label: 'Documents', icon: 'fa-solid fa-file-invoice', route: '/documents' },
    { label: 'Reports', icon: 'fa-solid fa-chart-simple', route: '/reports' },
    { label: 'Suppliers', icon: 'fa-solid fa-truck', route: '/suppliers' },
    { label: 'Activity Logs', icon: 'fa-solid fa-circle-notch', route: '/logs' },
  ];

  constructor(private uiService: UiService, private router: Router) { }

  ngOnInit() {
    this.uiService.sidebarMobileOpen$.subscribe(open => {
      this.isMobileOpen = open;
    });

    // Close sidebar on mobile when navigating
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.uiService.closeMobileSidebar();
    });
  }

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  closeMobile() {
    this.uiService.closeMobileSidebar();
  }
}
