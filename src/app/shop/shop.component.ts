import { Component, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { FormBuilder} from '@angular/forms';
import { StoreService} from '../store.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  pForm: FormGroup;
  count: number;
  private lists: any;

  constructor(fb: FormBuilder, private storeService: StoreService, private route: Router) { }

  ngOnInit() {
    this.count = this.lists.length;
  }
  addProducts() {
   this.storeService.addProduct(this.pForm.value).subscribe(response => {'Products added'; });
  }

}
