import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styles: [`
  .login1{
    position:relative;
    background-color:#28292d;
    left:420px;
    top:100px;
    text-align:center;
  }
  `  ]
})
export class AdminComponent implements OnInit {
  loginForm: FormGroup;
  post: any;
  name: string = '';
  pass: string = ''
  constructor(fb: FormBuilder) {
    this.loginForm = fb.group({
      'name': [null, Validators.required],
      'pass': [null, Validators.required],
      'validate': ''
    });
  }

  ngOnInit() { }
  addPost(post: any) {
    this.name = post.name;
    this.pass = post.pass;
  }

}
