import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Layout } from './components/layout/layout';
import { Dashboard } from './components/dashboard/dashboard';
import { MedicineManagement } from './components/medicine-management/medicine-management';
import { BulkUpload } from './components/bulk-upload/bulk-upload';
import { Sales } from './components/sales/sales';
import { Documents } from './components/documents/documents';
import { Reports } from './components/reports/reports';
import { Suppliers } from './components/suppliers/suppliers';
import { ActivityLogs } from './components/activity-logs/activity-logs';

import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'login', component: Login },
  {
    path: '',
    component: Layout,
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: Dashboard },
      { path: 'medicines', component: MedicineManagement },
      { path: 'bulk-upload', component: BulkUpload },
      { path: 'sales', component: Sales },
      { path: 'documents', component: Documents },
      { path: 'reports', component: Reports },
      { path: 'suppliers', component: Suppliers },
      { path: 'logs', component: ActivityLogs },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
