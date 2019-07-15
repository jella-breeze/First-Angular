import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Product } from '../Models/Product.Model';
import { ProductService } from '../Services/product.service';
import { IAlert } from '../Models/IAlert';
import { OrderDetail } from '../Models/OrderDetail.Model';
import { Registration } from '../Models/User.Models';
import { AuthenticationService } from '../Services/authentication.service';
import { OrderService } from '../Services/order.service';
import { OrderItem } from '../Models/OrderItem.Model';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.scss']
})
export class MycartComponent implements OnInit {
  dafualtQuantity = 1;
  productAddedTocart: Product[];
  allTotal;
  currentUser: Registration[];
  orderDetail: OrderDetail;
  orderItem: OrderItem[];

  public globalResponse: any;
  public alerts: Array<IAlert> = [];

  deliveryForm: FormGroup;


  constructor(private productService: ProductService, private fb: FormBuilder,
              private authService: AuthenticationService, private orderService: OrderService) { }

  ngOnInit() {
    this.productAddedTocart = this.productService.getProductFromCart();
    for (let i in this.productAddedTocart) {
      this.productAddedTocart[i].quantity = 1;
   }
  }
}
