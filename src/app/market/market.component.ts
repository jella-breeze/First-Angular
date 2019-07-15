import {Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup, FormBuilder, Validators, NgForm} from '@angular/forms';
import { StoreService } from '../store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styles: [`
    .login{
      position: absolute;
      top: 194px;
      right: 0;
      color: blue;
    }
  .login1{
    position:relative;
    background-color:#c6c9d4;
    left:420px;
    text-align:center;
    box-shadow: 1px 2px 5px 4px;
  }
  .login3{
    position: absolute;
    right: 193px;
    top: 193px;
  }
  `  ]
})
export class MarketComponent implements OnInit {
  user: any;
  loginForm: FormGroup;

  constructor(fb: FormBuilder, private storeService: StoreService, private route: Router) {
    this.user = this.storeService.user;

    this.loginForm = fb.group({
      productId: [null, Validators.required],
      name: [null, Validators.required],
      quantity: [null, Validators.required],
      number: [null, Validators.required],
      validate: ''
    });
  }

  ngOnInit() { }
  addUser() {
          this.storeService.addDetail(this.loginForm.value).subscribe(add  => {
            this.route.navigate(['/purchase']);
          });
        }
}

