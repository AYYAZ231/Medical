import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  username = '';
  password = '';
  selectedRole = 'admin';
  errorMessage = '';

  constructor(private router: Router, private authService: AuthService) { }

  selectRole(role: string) {
    this.selectedRole = role;
    this.errorMessage = '';
  }

  onLogin() {
    if (this.username === 'admin' && this.password === '123') {
      console.log('Logging in as:', this.selectedRole);
      this.authService.login();
      this.errorMessage = '';
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }
}
