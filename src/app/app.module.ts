import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SalesComponent } from './sales/sales.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { HeaderComponent } from './header/header.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { CreateSalesPersonComponent } from './create-sales-person/create-sales-person.component';
import { SalesListComponent } from './sales-list/sales-list.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { DpDatePickerModule } from 'ng2-date-picker';
import { CommissionRulesComponent } from './commission-rules/commission-rules.component';
import { MySalesComponent } from './my-sales/my-sales.component';
import { AdminSalesComponent } from './admin-sales/admin-sales.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SalesComponent,
    AdminComponent,
    AdminloginComponent,
    HeaderComponent,
    CreateSalesPersonComponent,
    SalesListComponent,
    CommissionRulesComponent,
    MySalesComponent,
    AdminSalesComponent,
  ],
  imports: [
    DpDatePickerModule,
    MatNativeDateModule,
    MatDatepickerModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
