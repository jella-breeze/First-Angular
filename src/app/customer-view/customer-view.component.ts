import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {StoreService} from '../store.service';


@Component({
  selector: 'app-customer-view',
  template: `
    <h3>Admin Dashboard</h3>
    <a class="login" *ngIf="user">You are logged in as {{user['user'].username}}</a >
    <a class="login1" routerLink="/login">Logout</a>
    <li class="" (click)="onSelect(department)" *ngFor="let department of departments; let i=index">
        <span class="apple"> {{department.id}}</span>.<span class="apple2">{{department.name}}</span>
        <br><br>
        </li>
  `,
  styles: [`
    .apple{
      background-color: #cdd3ce;
      border: 1px solid #00000069;
      padding: 4px 10px;
    }
    .apple2{
      background-color: #cdd3ce;
      border: 1px solid #00000069;
      padding: 4px 40px;
    }
    .login{
      position: absolute;
      top: 194px;
      right: 0;
      color: blue;
    }
    .login1{
      position: absolute;
      right: 193px;
      top: 193px;
    }
  `]
})
export class CustomerViewComponent implements OnInit {
  user: any;
  departments = [
    { id: 1, name: 'Products' },
  ]
  constructor(private router: Router, private storeService: StoreService) {
    this.user = this.storeService.user;
  }

  ngOnInit() {
    console.log(localStorage.getItem('localData'));

  }
  onSelect(department) {
    if (department.id === 1) {
      this.router.navigate(['/purchase']);
    }
  }
}
