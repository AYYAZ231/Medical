import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../auth.service';
import { UiService } from '../../ui.service';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-bar.html',
  styleUrl: './top-bar.scss',
})
export class TopBar {
  currentDate = new Date();

  constructor(private authService: AuthService, private uiService: UiService) { }

  onLogout() {
    this.authService.logout();
  }

  toggleMobileMenu() {
    this.uiService.toggleMobileSidebar();
  }
}
