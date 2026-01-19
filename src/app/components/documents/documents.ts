import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-documents',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './documents.html',
    styleUrl: './documents.scss',
})
export class Documents {
    selectedType = 'All';
    selectedCashier = 'All';
    selectedDate = '';

    documents = [
        { type: 'Sales Bill', date: '2024-03-15 14:30', user: 'Admin User', amount: 45.50 },
        { type: 'Daily Sales Report', date: '2024-03-14 20:00', user: 'System', amount: 1250.00 },
        { type: 'Stock In Report', date: '2024-03-14 09:15', user: 'Admin User', amount: 0.00 },
        { type: 'Bulk Upload Report', date: '2024-03-13 11:45', user: 'System', amount: 0.00 },
    ];

    downloadDoc(doc: any) {
        alert(`Downloading ${doc.type}... (Mock download started)`);
        console.log('Downloading document:', doc);
    }

    printDoc(doc: any) {
        alert(`Preparing to print ${doc.type}...`);
        console.log('Printing document:', doc);
    }
}
