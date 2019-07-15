import { Component, OnInit } from '@angular/core';
import { StoreService} from '../store.service';
import { HttpClient} from '@angular/common/http';
import { IAlert } from '../Models/IAlert';
import { Product } from '../Models/Product.Model';
import { Router} from '@angular/router';

@Component({
  selector: 'app-customer-purchase',
  template:  `
    <h3>Market House</h3>
    <a class="login" *ngIf="user">You are logged in as {{user['user'].username}}</a >
    <a class="login1" routerLink="/login">Logout</a>
    <li class="" *ngFor="let product of products; let i=index">
      <table border="1"><tr><th>Product Id</th><th>Product Name</th><th>Price</th></tr>
      <tr><td><span class="apple"> {{product.id}}</span></td><td><span class="apple"> {{product.product}}</span></td>
      <td> <span class="apple2">{{product.price}} $</span></td>
        <td><span><button type="button" (click)="OnAddCart(product)"><b>Add to cart</b></button>
                    </span>
        </td></tr></table>
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
export class CustomerPurchaseComponent implements OnInit {
  user: any;
  products: any;
  productAddedTocart: Product[];
  cartItemCount = 0;
  public globalResponse: any;
  allProducts: Product;

  public alerts: Array<IAlert> = [];
  constructor(private storeService: StoreService, private http: HttpClient,private route: Router) {
    this.user = this.storeService.user;
  }
  id: number;
  private headers = new Headers({'Content-Type': 'application/json'});

  ngOnInit() {
    this.getProducts();

    this.storeService.getAllProducts()
        .subscribe((result) => {
              this.globalResponse = result;
            },
            error => {
              console.log(error.message);
            },
            () => {
              this.allProducts = this.globalResponse;
            });
  }

  getProducts() {
    this.storeService.getProducts().subscribe( response => {
      this.products = response;
    });
  }

  OnAddCart(product: Product) {
    this.productAddedTocart = this.storeService.getProductFromCart();
    if (this.productAddedTocart)  {
      this.productAddedTocart.push(product);
      this.storeService.addProductToCart(this.productAddedTocart);
      this.alerts.push({
        id: 1,
        type: 'success',
        message: 'Product added to cart.'
      });
      this.route.navigate(['/mycard']);
    } else {
      const tempProduct = this.productAddedTocart.find(p => p.id === product.id);
      if (tempProduct === null) {
        this.productAddedTocart.push(product);
        this.storeService.addProductToCart(this.productAddedTocart);
        this.alerts.push({
          id: 1,
          type: 'success',
          message: 'Product added to cart.'
        });
        this.route.navigate(['/mycard']);
      }  else  {
        this.alerts.push({
          id: 2,
          type: 'warning',
          message: 'Product already exist in cart.'
        });
      }

    }

    this.cartItemCount = this.productAddedTocart.length;
    this.storeService.updateCartCount(this.cartItemCount);
  }
}


