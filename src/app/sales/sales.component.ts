import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SalesPerson } from '../sales-person';
import { SalesService } from '../sales.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
 
  sp: SalesPerson ;
  salesPersonId:string='';
  constructor(private route : Router,private salesService:SalesService) {
    this.salesService=salesService;
   }

  ngOnInit(): void {
    this.salesService.getSpecificUsers(localStorage.getItem('salesPersonId')|| '{}').subscribe((data: SalesPerson)=>{
      this.sp = data;
  });
  }
  logout() {
    localStorage.removeItem("token");
    this.route.navigate(['/']);
  }

}
