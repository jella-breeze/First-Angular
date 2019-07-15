import { Component, OnInit } from '@angular/core';
import {StoreService} from '../store.service';


@Component({
  selector: 'app-user-show',
  template: `
    <h3>User List</h3>
    <a class="login" *ngIf="user">You are logged in as {{user['user'].username}}</a >
    <a class="login1" routerLink="/login">Logout</a>
    <li class="" *ngFor="let list of list; let i=index">
      <span class="apple"> {{list.id}}</span><span class="apple2">{{list.username}}</span>
      <span class="apple2">{{list.email}}</span>
      <span><button (click)="deleteUsers(list.id)">Delete</button> </span>
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
export class UserShowComponent implements OnInit {
  user: any;
  public list: any;
  constructor(private storeService: StoreService) {
    this.user = this.storeService.user;
  }

  ngOnInit() {
    this.getUsers();
  }
  deleteUsers(id: number) {
    this.storeService.deleteUsers(id).subscribe(response => {
      alert('deletation successfull');
      this.getUsers();
    });
  }
  getUsers() {
    this.storeService.getUser().subscribe( response => {
      this.list = response;
    });
  }

}
