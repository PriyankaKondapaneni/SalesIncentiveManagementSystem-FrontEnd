import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SalesPerson } from '../sales-person';
import { SalesService } from '../sales.service';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.css']
})
export class SalesListComponent implements OnInit {

  users: SalesPerson[];

  constructor(private userService: SalesService,
    private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }
  private getUsers(){
    this.userService.getUserList().subscribe(data => {
      this.users = data;
    });
  }


  deleteuser(id: string){
    this.userService.deleteUser(id).subscribe( data => {
      this.getUsers();
      console.log(data);
      
    })
  }
  addUser(){
    this.router.navigate(['/addSalesPerson']);
    this.getUsers();
  }

}
