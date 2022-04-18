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


  sp : SalesPerson = new SalesPerson();

  roles : string[];

  constructor(private salesService : SalesService, private route : Router ) { 
    this.roles = [
      'admin',
      'sales'
    ]
  }

  ngOnInit(): void {
    this.sp = new SalesPerson();
  }

  login() {
    
    this.salesService.login(this.sp).subscribe((sp) => {
      this.sp=sp;
      let result = ' ';
      const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
      for ( let i = 0; i < 20; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      this.salesService.setToken( result,this.sp.role,this.sp.salesPersonId);
      /*this.salesService.setToken( this.salesPersonId);*/
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
   /* this.sp=this.sp;
      this.salesService.setToken( this.sp.salesPersonId);
    this.sp.salesPersonId = this.salesPersonId;
    this.sp.password = this.password;
    this.sp.role = this.role;

    this.salesService.login(this.sp).subscribe(res => {

      if(res == null) {
        alert("Uername or password is wrong");
        this.ngOnInit();
      }else {
        console.log("Login successful");

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

  }*/

}
