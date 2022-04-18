import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';
import { SalesPerson } from '../sales-person';
import { SalesService } from '../sales.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  sp : Admin = new Admin();

  roles : string[];

  constructor(private salesService : AdminService, private route : Router ) { 
    this.roles = [
      'admin',
      'sales'
    ]
  }

  ngOnInit(): void {
    this.sp = new Admin();
  }

  login() {
    
    this.salesService.login(this.sp).subscribe((sp) => {
      this.sp=sp;
        console.log("Login successful");

        if(sp.role == 'sales') {
          this.route.navigate(['/sales']);
        } 

        if( sp.role == 'admin') {
          this.route.navigate(['/admin']);
        }

    }, err => {
      alert("Login failed");
      this.ngOnInit();
    })

  }

}
