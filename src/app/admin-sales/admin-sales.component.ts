import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SalesLine } from '../sales-line';
import { SalesLineService } from '../sales-line.service';
import { SalesPerson } from '../sales-person';
import { SalesService } from '../sales.service';

@Component({
  selector: 'app-admin-sales',
  templateUrl: './admin-sales.component.html',
  styleUrls: ['./admin-sales.component.css']
})
export class AdminSalesComponent implements OnInit {

  users:SalesLine[];

  constructor(private userService: SalesLineService,
    private router: Router) {}

  ngOnInit(): void {
  }
  private getSales(another:string){
    this.userService.getSales(another).subscribe(data => {
      this.users = data;
    });
  }
  saleLinesDisplay() {
    const month1 = document.getElementById('month') as HTMLInputElement;
    const month = month1.value;
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var another = months[+month.split('-')[1] - 1]
console.log(another);
this.getSales(another);
  }

}
