import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SalesLine } from '../sales-line';
import { SalesLineService } from '../sales-line.service';
import { SalesPerson } from '../sales-person';
import { SalesService } from '../sales.service';

@Component({
  selector: 'app-my-sales',
  templateUrl: './my-sales.component.html',
  styleUrls: ['./my-sales.component.css']
})
export class MySalesComponent implements OnInit {
  users:SalesLine[];
  sp:SalesPerson;

  constructor(private userService: SalesLineService,private salesService: SalesService,
    private router: Router) { this.salesService=salesService;}

  ngOnInit(): void {
    this.salesService.getSpecificUsers(localStorage.getItem('salesPersonId')|| '{}').subscribe((data: SalesPerson)=>{
      this.sp = data;
  });
  }
  private getSales(another:string,salesLineId:string){
    this.userService.getSalesList(another,salesLineId).subscribe(data => {
      this.users = data;
    });
  }
  saleLinesDisplay() {
    const month1 = document.getElementById('month') as HTMLInputElement;
    const month = month1.value;
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var another = months[+month.split('-')[1] - 1]
console.log(another);
this.getSales(another,this.sp.salesPersonId);
  }
}
