import { DatePipe } from '@angular/common';
import { Component, OnInit,Inject } from '@angular/core';
import { Router } from '@angular/router';
import { SalesPerson } from '../sales-person';
import { SalesService } from '../sales.service';
import { DOCUMENT } from '@angular/common'; 

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  x:DatePipe;

  sp: SalesPerson ;
  percent:number=0;
  salesPersonId:string='';
  constructor(private route : Router,private salesService:SalesService,@Inject(DOCUMENT)private document:Document) {

    this.salesService=salesService;
   }

  ngOnInit(): void {
    this.salesService.getSpecificUsers(localStorage.getItem('salesPersonId')|| '{}').subscribe((data: SalesPerson)=>{
      this.sp = data;
  });
  }
 
  percentage(){
    console.log(this.sp.uptoDateCommission);
    this.percent=(this.sp.uptoDateCommission/this.sp.quota)*100;
  }
  logout() {
    localStorage.removeItem("token");
    this.route.navigate(['/']);
  }

}
