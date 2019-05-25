import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';

@Component({
  selector: 'app-confirm',
  template: `
    
    <div class="aaa"> <form>
    <p>
      Your Order will be delivered: Please fill in the forms:
    </p>
    Email: 
      <input type="email" placeholder="email"><br><br>
    Contact Number: <input type="" placeholder="Phone Number"><br><br>
    <input type="submit" value="Submit"></form>
    </div>
  `,
  styles: [`
    .aaa{
      position:absolute;
      left:400px;
      background-color:#383535;
      top:300px;
    }
  `]
})
export class ConfirmComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
}