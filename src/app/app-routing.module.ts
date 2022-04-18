import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminSalesComponent } from './admin-sales/admin-sales.component';
import { AdminComponent } from './admin/admin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { CommissionRulesComponent } from './commission-rules/commission-rules.component';
import { CreateSalesPersonComponent } from './create-sales-person/create-sales-person.component';
import { LoginComponent } from './login/login.component';
import { MySalesComponent } from './my-sales/my-sales.component';
import { SalesListComponent } from './sales-list/sales-list.component';
import { SalesComponent } from './sales/sales.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'adminlogin', component: AdminloginComponent},
  {path: 'sales', component: SalesComponent},
  {path: 'admin', component:AdminComponent},
  {path: 'admin/user-list', component:SalesListComponent},
  {path: 'addSalesPerson', component:CreateSalesPersonComponent},
  {path: 'admin/Commission-rules', component:CommissionRulesComponent},
  {path: 'admin/Sales', component:AdminSalesComponent},
  {path: 'sales/my-sales', component:MySalesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
