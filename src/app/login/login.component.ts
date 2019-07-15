import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { StoreService} from '../store.service';
import { Router } from '@angular/router';
import {filter, map} from 'rxjs/operators';
import {debug} from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
  .login1{
    position:relative;
    background-color:#aeb4cc;
    left:420px;
    text-align:center;
    box-shadow: 5px 6px 3px gray;
    
  }
  `]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  name = '';
  pass = ''
  descripiton: '';
  user: any;

  constructor(fb: FormBuilder, private storeService: StoreService, private route: Router) {
    this.loginForm = fb.group({
      name: [null, Validators.required],
      pass: [null, Validators.required],
      validate: ''
    });
  }

  ngOnInit() {
  }

  addUser(user: any) {
    this.storeService.getUser().subscribe(response => {
      const found = response.find(u => {
                                         return u.username === this.loginForm.value.name && u.password ===
                                             this.loginForm.value.pass;
      });
      if (found) {
        localStorage.setItem('user', JSON.stringify({user: found}));
        alert('Now you are logged in as' + found.username);

        console.log(localStorage.getItem('localData'));
        if (found.username === 'Sonam' && found.password === 'apple') {
          this.route.navigate(['/list']);
        } else {
          this.route.navigate(['/customer']);
        }

      } else {
        alert('Invalid Input');
      }
    });

  }
}

