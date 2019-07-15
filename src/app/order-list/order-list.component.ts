import { Component, OnInit } from '@angular/core';
import { StoreService} from '../store.service';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-order-list',
  template:  `
    <h3>Orders List</h3>
    <a class="login" *ngIf="user">You are logged in as {{user['user'].username}}</a >
    <a class="login1" routerLink="/login">Logout</a>
    <li class="" *ngFor="let order of orders; let i=index">
      <span class="apple"> {{order.id}}</span><span class="apple2">{{order.name}}</span>
      <span class="apple2">{{order.quantity}}kg</span><span class="apple2">{{order.number}}</span>
      <span><button (click)="deleteOrder(order.id)">Delete</button> </span>
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
export class OrderListComponent implements OnInit {
  user: any;
  orders: any;
  constructor(private storeService: StoreService, private http: HttpClient) {
    this.user = this.storeService.user;
  }
  id: number;

  ngOnInit() {
    this.getDetails();
  }
  deleteOrder(id: number) {
    this.storeService.deleteOrder(id).subscribe(response => {
      alert('deletation successfull');
      this.getDetails();
    });
  }
  getDetails() {
    this.storeService.getDetail().subscribe( response => {
      this.orders = response;
    });
  }
}


