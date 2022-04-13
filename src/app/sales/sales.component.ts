import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
 
  
  constructor(private route : Router) { }

  ngOnInit(): void {
  }
  logout() {
    localStorage.removeItem("token");
    this.route.navigate(['/']);
  }

}
