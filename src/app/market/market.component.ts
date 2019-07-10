import {Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup, FormBuilder, Validators, NgForm} from '@angular/forms';
import { StoreService } from '../store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styles: [`
  .login1{
    position:relative;
    background-color:#c6c9d4;
    left:420px;
    top:100px;
    text-align:center;
    box-shadow: 1px 2px 5px 4px;
  }
  `  ]
})
export class MarketComponent implements OnInit {

  loginForm: FormGroup;

  constructor(fb: FormBuilder, private storeService: StoreService, private route: Router) {

    this.loginForm = fb.group({
      username: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, Validators.required],
      validate: ''
    });
  }

  ngOnInit() { }
  addUser() {
    this.storeService.getUser().subscribe(response => {
      const found = response.find(u => {
        return u.username === this.loginForm.value.username && u.email === this.loginForm.value.email;
      });
      if (found) {
        alert('already registered!');
        this.route.navigate(['/admin']);
      } else {
        {
          this.storeService.addUser(this.loginForm.value).subscribe(add  => {
            this.route.navigate(['/login']);
          });
        }
      }
    });
  }
}

