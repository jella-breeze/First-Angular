import { Component, OnInit } from '@angular/core';
import { StoreService} from '../store.service';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  template:  `
    <h3>Product List</h3>
    <a class="login" *ngIf="user">You are logged in as {{user['user'].username}}</a >
    <a class="login1" routerLink="/login">Logout</a>
    <li class="" *ngFor="let product of products; let i=index">
      <span class="apple"> {{product.id}}</span><span class="apple2"> {{product.product}}</span>
      <span class="apple2">{{product.price}}$</span>
      <span><button (click)="deleteProducts(product.id)">Delete</button> </span>
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
export class ProductListComponent implements OnInit {
  user: any;
  products: any;
  constructor(private storeService: StoreService, private http: HttpClient) {
    this.user = this.storeService.user;
  }
  id: number;
  private headers = new Headers({'Content-Type': 'application/json'});

  ngOnInit() {
    this.getProducts();
  }
  deleteProducts(id: number) {
    this.storeService.deleteProducts(id).subscribe(response => {
      alert('deletation successfull');
      this.getProducts();
    });
  }
  getProducts() {
    this.storeService.getProducts().subscribe( response => {
      this.products = response;
    });
  }
}


