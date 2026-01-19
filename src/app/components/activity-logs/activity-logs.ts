import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-activity-logs',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './activity-logs.html',
    styleUrl: './activity-logs.scss',
})
export class ActivityLogs {
    summaryCards = [
        { label: 'Logins', count: 24, icon: 'fa-user-check', color: 'primary' },
        { label: 'Medicines', count: 12, icon: 'fa-pill', color: 'success' },
        { label: 'Sales', count: 145, icon: 'fa-cart-shopping', color: 'warning' },
        { label: 'Uploads', count: 3, icon: 'fa-cloud-arrow-up', color: 'info' },
        { label: 'Reports', count: 8, icon: 'fa-file-lines', color: 'danger' },
    ];

    logs = [
        {
            action: 'Added new medicine',
            details: 'Paracetamol 500mg (500 units)',
            user: 'Admin User',
            time: '10 mins ago',
            fullDate: 'Jan 17, 2026 - 01:15 AM',
            icon: 'fa-plus'
        },
        {
            action: 'Created sale',
            details: 'Transaction #TXN-904 (Amount: $45.50)',
            user: 'Admin User',
            time: '25 mins ago',
            fullDate: 'Jan 17, 2026 - 12:55 AM',
            icon: 'fa-cart-plus'
        },
        {
            action: 'Download report',
            details: 'Monthly Sales Report for December',
            user: 'Admin User',
            time: '2 hours ago',
            fullDate: 'Jan 16, 2026 - 11:20 PM',
            icon: 'fa-download'
        },
        {
            action: 'Bulk Upload',
            details: 'Medicines_List_Jan.xlsx (154 entries)',
            user: 'System',
            time: '5 hours ago',
            fullDate: 'Jan 16, 2026 - 08:30 PM',
            icon: 'fa-cloud-arrow-up'
        },
    ];
}
