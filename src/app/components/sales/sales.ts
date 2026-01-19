import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastService } from '../../services/toast.service';

@Component({
    selector: 'app-sales',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './sales.html',
    styleUrl: './sales.scss',
})
export class Sales {
    searchTerm = '';
    paymentMethod = 'cash';
    cart: any[] = [];

    constructor(private toastService: ToastService) { }

    availableMedicines = [
        { id: 1, name: 'Paracetamol 500mg', price: 2.50, stock: 500, category: 'Tablet' },
        { id: 2, name: 'Amoxicillin 250mg', price: 5.75, stock: 80, category: 'Capsule' },
        { id: 3, name: 'Cough Syrup 100ml', price: 8.99, stock: 45, category: 'Syrup' },
        { id: 4, name: 'Insulin Injection', price: 25.00, stock: 200, category: 'Injection' },
    ];

    addToCart(medicine: any) {
        const existing = this.cart.find(item => item.id === medicine.id);
        if (existing) {
            existing.quantity++;
        } else {
            this.cart.push({ ...medicine, quantity: 1 });
        }
    }

    removeFromCart(index: number) {
        this.cart.splice(index, 1);
    }

    get subtotal() {
        return this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    }

    get total() {
        return this.subtotal; // Add discount logic if needed
    }

    generateBill() {
        this.toastService.success(`Generating bill for ${this.cart.length} items. Total: $${this.total.toFixed(2)}`);
        this.cart = []; // Clear cart after "generating bill"
    }
}
