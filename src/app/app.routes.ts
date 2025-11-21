import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Products } from './products/products';
import { Settings } from './settings/settings';
import { Pages } from './pages/pages';
import { AddNewEmployee } from './component/add-new-employee/add-new-employee';
import { ExportReports } from './component/export-reports/export-reports';
import { NewLeavesRequest } from './component/new-leaves-request/new-leaves-request';
import { SystemSettings } from './component/system-settings/system-settings';

export const routes: Routes = [
 {path: '', redirectTo:'dashboard', pathMatch: 'full'},
 {path: 'dashboard', component: Dashboard},
 {path: 'products', component: Products},
 {path: 'settings', component: Settings},
 {path: 'pages', component: Pages},
 {path: 'AddNewEmployee', component: AddNewEmployee },
 {path: 'exportReport', component: ExportReports},
 {path: 'newLeaves', component: NewLeavesRequest},
 {path: 'systemSettings', component: SystemSettings}
];
