import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  stats = [
    { label: 'Total Medicines', value: '8', icon: 'fa-pill', color: 'blue', bg: '#eff6ff', iconColor: '#3b82f6' },
    { label: "Today's Sales", value: '$5.00', icon: 'fa-dollar-sign', color: 'green', bg: '#ecfdf5', iconColor: '#10b981' },
    { label: 'Low Stock Alerts', value: '2', icon: 'fa-triangle-exclamation', color: 'orange', bg: '#fff7ed', iconColor: '#f59e0b' },
    { label: 'Expiring Soon', value: '1', icon: 'fa-calendar-days', color: 'red', bg: '#fef2f2', iconColor: '#ef4444' },
  ];

  lowStockMedicines = [
    { name: 'Amoxicillin 250mg', stock: '80 units' },
    { name: 'Antibiotic Ointment', stock: '30 units' },
  ];

  expiringMedicines = [
    { name: 'Cough Syrup 100ml', expiry: '2/15/2024' },
    { name: 'Vitamin D3 Syrup', expiry: '1/30/2024' },
  ];

  quickActions = [
    { label: 'Medicines', icon: 'fa-pill', bg: '#3b82f6', route: '/medicines' },
    { label: 'Bulk Upload', icon: 'fa-arrow-up-from-bracket', bg: '#8b5cf6', route: '/bulk-upload' },
    { label: 'Sales', icon: 'fa-cart-shopping', bg: '#10b981', route: '/sales' },
    { label: 'Reports', icon: 'fa-chart-simple', bg: '#6366f1', route: '/reports' },
  ];

  cashiers = [
    { name: 'John Doe', shift: 'Morning Shift', salesCount: 12, totalAmount: '$325.50', growth: '+15%' },
    { name: 'Jane Smith', shift: 'Evening Shift', salesCount: 8, totalAmount: '$198.75', growth: '+8%' },
  ];
}
