import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SalesPerson } from '../sales-person';
import { SalesService } from '../sales.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName : string = '';
  password : string = '';
  role : string = '';

  sp : SalesPerson = new SalesPerson();

  roles : string[];

  constructor(private salesService : SalesService, private route : Router ) { 
    this.roles = [
      'admin',
      'sales'
    ]
  }

  ngOnInit(): void {
    this.userName = '';
    this.password = '';
  }

  login() {
    this.sp.userName = this.userName;
    this.sp.password = this.password;
    this.sp.role = this.role;

    this.salesService.login(this.sp).subscribe(res => {

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
