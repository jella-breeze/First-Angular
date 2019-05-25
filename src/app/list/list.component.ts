import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'


@Component({
  selector: 'app-list',
  template: `
    <h3>Purchase Here</h3>
    <li class="" (click)="onSelect(department)" *ngFor="let department of departments">
        <span class="apple"> {{department.id}}</span>.<span class="apple2">{{department.name}}</span>
        <br><br>
        </li>
  `,
  styles: [`
  .apple{
    background-color:#2c2d2d;
  }
  .apple2{
    background-color:#454c4c;
  }
  `]
})
export class ListComponent implements OnInit {
  departments=[
    { "id": 1, "name": "Pencil" },
    { "id": 2, "name": "Pen" },
    { "id": 3, "name": "Erazor" },
    { "id": 4, "name": "Sharpner" },
  ]
  constructor(private router:Router) { }

  ngOnInit() {
  }
  onSelect(department){
    this.router.navigate(['/service',department.id]);
  }
}
