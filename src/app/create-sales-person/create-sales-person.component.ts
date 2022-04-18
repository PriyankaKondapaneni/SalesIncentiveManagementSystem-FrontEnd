import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SalesPerson } from '../sales-person';
import { SalesService } from '../sales.service';

@Component({
  selector: 'app-create-sales-person',
  templateUrl: './create-sales-person.component.html',
  styleUrls: ['./create-sales-person.component.css']
})
export class CreateSalesPersonComponent implements OnInit {

  user: SalesPerson = new SalesPerson();
  constructor(private userService: SalesService,
    private router: Router) { }


  ngOnInit(): void {
  }
  saveUser(){
    this.userService.createUser(this.user).subscribe( data =>{
      console.log(data);
      this.goToUserList();
    },
    error => console.log(error));
  }

  goToUserList(){
    this.router.navigate(['/admin/user-list']);
  }
  
  onSubmit(){
    console.log(this.user);
    this.saveUser();
  }

}
