import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '../ui/modal/modal.component';
import { ToastService } from '../../services/toast.service';

@Component({
    selector: 'app-suppliers',
    standalone: true,
    imports: [CommonModule, FormsModule, ModalComponent],
    templateUrl: './suppliers.html',
    styleUrl: './suppliers.scss',
})
export class Suppliers {
    searchTerm = '';
    showModal = false;
    showDeleteModal = false;
    isEdit = false;
    currentSupplier: any = this.getEmptySupplier();
    supplierToDelete: any = null;

    suppliers = [
        {
            name: 'PharmaCorp Ltd',
            rating: 4.8,
            phone: '+1 234 567 890',
            email: 'contact@pharmacorp.com',
            address: 'Industrial Area, Phase II',
            totalOrders: 154
        },
        {
            name: 'MediSupply Inc',
            rating: 4.5,
            phone: '+1 987 654 321',
            email: 'info@medisupply.com',
            address: '7th Avenue Business Park',
            totalOrders: 89
        },
        {
            name: 'HealthCare Solutions',
            rating: 4.2,
            phone: '+1 456 789 012',
            email: 'sales@hcsolutions.com',
            address: 'Medical Plaza Suite 101',
            totalOrders: 42
        }
    ];

    constructor(private toastService: ToastService) { }

    getEmptySupplier() {
        return {
            name: '',
            rating: 5.0,
            phone: '',
            email: '',
            address: '',
            totalOrders: 0
        };
    }

    addSupplier() {
        this.isEdit = false;
        this.currentSupplier = this.getEmptySupplier();
        this.showModal = true;
    }

    editSupplier(supplier: any) {
        this.isEdit = true;
        this.currentSupplier = { ...supplier };
        this.showModal = true;
    }

    saveSupplier() {
        if (this.isEdit) {
            const index = this.suppliers.findIndex(s => s.email === this.currentSupplier.email);
            if (index !== -1) {
                this.suppliers[index] = { ...this.currentSupplier };
            }
            this.toastService.success('Supplier updated successfully');
        } else {
            this.suppliers.unshift({ ...this.currentSupplier });
            this.toastService.success('Supplier added successfully');
        }
        this.showModal = false;
    }

    deleteSupplier(supplier: any) {
        this.supplierToDelete = supplier;
        this.showDeleteModal = true;
    }

    confirmDelete() {
        if (this.supplierToDelete) {
            this.suppliers = this.suppliers.filter(s => s !== this.supplierToDelete);
            this.toastService.danger('Supplier deleted successfully');
        }
        this.showDeleteModal = false;
        this.supplierToDelete = null;
    }

    cancelDelete() {
        this.showDeleteModal = false;
        this.supplierToDelete = null;
    }
}
