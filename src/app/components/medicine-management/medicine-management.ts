import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '../ui/modal/modal.component';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-medicine-management',
  standalone: true,
  imports: [CommonModule, FormsModule, ModalComponent],
  templateUrl: './medicine-management.html',
  styleUrl: './medicine-management.scss',
})
export class MedicineManagement {
  searchTerm = '';
  showModal = false;
  showDeleteModal = false;
  isEdit = false;
  medicineToDelete: any = null;

  currentMedicine: any = this.getEmptyMedicine();

  medicines = [
    { name: 'Paracetamol 500mg', price: 2.50, category: 'Tablet', batch: 'BAT-2024-001', expiry: '2025-12-31', quantity: 500, min: 100, supplier: 'PharmaCorp Ltd', status: 'In Stock' },
    { name: 'Amoxicillin 250mg', price: 5.75, category: 'Capsule', batch: 'BAT-2024-002', expiry: '2025-06-30', quantity: 80, min: 100, supplier: 'MediSupply Inc', status: 'Low Stock' },
    { name: 'Cough Syrup 100ml', price: 8.99, category: 'Syrup', batch: 'BAT-2024-003', expiry: '2024-02-15', quantity: 45, min: 50, supplier: 'HealthCare Solutions', status: 'Expired' },
  ];

  constructor(private toastService: ToastService) { }

  getEmptyMedicine() {
    return { name: '', price: 0, category: 'Tablet', batch: '', expiry: '', quantity: 0, min: 10, supplier: '', status: 'In Stock' };
  }

  addMedicine() {
    this.isEdit = false;
    this.currentMedicine = this.getEmptyMedicine();
    this.showModal = true;
  }

  editMedicine(medicine: any) {
    this.isEdit = true;
    this.currentMedicine = { ...medicine };
    this.showModal = true;
  }

  saveMedicine() {
    if (this.isEdit) {
      const index = this.medicines.findIndex(m => m.batch === this.currentMedicine.batch);
      if (index !== -1) {
        this.medicines[index] = { ...this.currentMedicine };
      }
      this.toastService.success('Medicine updated successfully');
    } else {
      this.medicines.unshift({ ...this.currentMedicine });
      this.toastService.success('Medicine added successfully');
    }
    this.showModal = false;
  }

  deleteMedicine(medicine: any) {
    this.medicineToDelete = medicine;
    this.showDeleteModal = true;
  }

  confirmDelete() {
    if (this.medicineToDelete) {
      this.medicines = this.medicines.filter(m => m !== this.medicineToDelete);
      this.toastService.danger('Medicine deleted successfully');
    }
    this.showDeleteModal = false;
    this.medicineToDelete = null;
  }

  cancelDelete() {
    this.showDeleteModal = false;
    this.medicineToDelete = null;
  }
}
