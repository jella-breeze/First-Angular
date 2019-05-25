import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-service',
  template:`
     <h3>Are you sure to purchase this item number {{productId}}?</h3>
     <p class="aa">
        <a routerLink="/list" routerLinkActive="active">Cancel    </a>
        <button routerLink='/confirm'>Confirm</button> 
        </p>
  `,
  styles: []
})
export class ServiceComponent implements OnInit {
  public productId: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.productId =id;
  }

}
