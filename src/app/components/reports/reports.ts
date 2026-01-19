import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from '../../services/toast.service';

declare var Chart: any;

@Component({
    selector: 'app-reports',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './reports.html',
    styleUrl: './reports.scss',
})
export class Reports implements AfterViewInit {
    stats = [
        { label: 'Total Sales', value: '$12,450.00', trend: '+12.5%', isPositive: true },
        { label: 'Transactions', value: '450', trend: '+8.2%', isPositive: true },
        { label: 'Avg. Transaction', value: '$27.60', trend: '-2.1%', isPositive: false },
        { label: 'Top Day', value: 'Monday', trend: 'Recent', isPositive: true },
    ];

    constructor(private toastService: ToastService) { }

    ngAfterViewInit() {
        setTimeout(() => {
            this.initLineChart();
            this.initPieChart();
        }, 100);
    }

    initLineChart() {
        const ctx = document.getElementById('salesTrendChart') as HTMLCanvasElement;
        if (ctx) {
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    datasets: [{
                        label: 'Sales ($)',
                        data: [1200, 1900, 1500, 2500, 2200, 3000, 2800],
                        borderColor: '#3b82f6',
                        backgroundColor: 'rgba(59, 130, 246, 0.1)',
                        fill: true,
                        tension: 0.4,
                        pointRadius: 4,
                        pointBackgroundColor: '#3b82f6'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false },
                        tooltip: {
                            backgroundColor: '#1e293b',
                            padding: 12,
                            titleFont: { size: 14, weight: 'bold' },
                            bodyFont: { size: 13 }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: { color: '#f1f5f9' }
                        },
                        x: {
                            grid: { display: false }
                        }
                    }
                }
            });
        }
    }

    initPieChart() {
        const ctx = document.getElementById('categoryPieChart') as HTMLCanvasElement;
        if (ctx) {
            new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ['Tablets', 'Capsules', 'Syrups', 'Other'],
                    datasets: [{
                        data: [45, 30, 15, 10],
                        backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6'],
                        borderWidth: 0,
                        hoverOffset: 15
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    cutout: '70%',
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                usePointStyle: true,
                                padding: 20,
                                font: { size: 12, weight: '500' }
                            }
                        }
                    }
                }
            });
        }
    }

    exportReport() {
        this.toastService.success('Exporting full analytics report...');
    }
}
