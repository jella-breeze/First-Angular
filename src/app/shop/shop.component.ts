import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  count: number;
  control: string='Add Product';
  productList:string="Apple";
  lists=[];

  constructor() { }

  ngOnInit() {
    this.count=this.lists.length;
  }
  addProduct(){
    this.lists.push(this.productList);
    this.productList="";
    this.count=this.lists.length;
  }

}
