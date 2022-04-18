import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommissionRules } from '../commission-rules';
import { SalesService } from '../sales.service';

@Component({
  selector: 'app-commission-rules',
  templateUrl: './commission-rules.component.html',
  styleUrls: ['./commission-rules.component.css']
})
export class CommissionRulesComponent implements OnInit {

  users: CommissionRules[];

  constructor(private userService: SalesService,
    private router: Router) { }

  ngOnInit(): void {
    this.getRules();
  }
  private getRules(){
    this.userService.getRulesList().subscribe(data => {
      this.users = data;
    });
  }


 /* changeRules(id: string){
    this.userService.changeRules(id).subscribe( data => {
      this.getRules();
      console.log(data);
      
    })*/
  

}
