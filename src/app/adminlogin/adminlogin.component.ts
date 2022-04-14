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

  id : string = '';
  password : string = '';
  role : string = '';

  sp : Admin = new Admin();

  roles : string[];

  constructor(private adminService : AdminService, private route : Router ) { 
    this.roles = [
      'admin',
      'sales'
    ]
  }

  ngOnInit(): void {
    this.id = '';
    this.password = '';
  }

  login() {
    this.sp.adminId = this.id;
    this.sp.password = this.password;
    this.sp.role = this.role;

    this.adminService.login(this.sp).subscribe(res => {

      if(res == null) {
        alert("Uername or password is wrong");
        this.ngOnInit();
      }else {
        console.log("Login successful");
        localStorage.setItem("token",res.token);

        if(this.role == 'sales') {
          this.route.navigate(['/sales']);
        } 

        if( this.role == 'admin') {
          this.route.navigate(['/admin']);
        }

      }

    }, err => {
      alert("Login failed");
      this.ngOnInit();
    })

  }

}
