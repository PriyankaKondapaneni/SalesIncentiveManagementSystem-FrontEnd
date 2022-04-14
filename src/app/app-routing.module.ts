import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { LoginComponent } from './login/login.component';
import { SalesComponent } from './sales/sales.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'adminlogin', component: AdminloginComponent},
  {path: 'sales', component: SalesComponent},
  {path: 'admin', component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
