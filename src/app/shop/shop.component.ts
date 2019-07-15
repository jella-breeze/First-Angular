import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators} from '@angular/forms';
import { FormBuilder} from '@angular/forms';
import { StoreService} from '../store.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  user: any;
  pForm: FormGroup;

  count: number;

  constructor(fb: FormBuilder, private storeService: StoreService, private route: Router) {
    this.user = this.storeService.user;
    this.pForm = fb.group({
      product: [null, Validators.required],
      price: [null, Validators.required],
      validate: ''
    });
  }

  ngOnInit() {
  }
  addProducts() {
   this.storeService.addProduct(this.pForm.value).subscribe(response => { this.route.navigate(['/list']); });
  }
}
