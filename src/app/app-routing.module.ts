import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ShopComponent } from './shop/shop.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminComponent } from './admin/admin.component';
import { ServiceComponent } from './service/service.component';
import { ListComponent } from './list/list.component';
import { ConfirmComponent } from './confirm/confirm.component';
import {UserShowComponent} from './user-show/user-show.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ListGuardGuard} from './list-guard.guard';
import {CustomerViewComponent} from './customer-view/customer-view.component';
import {CustomerPurchaseComponent} from './customer-purchase/customer-purchase.component';
import {MarketComponent} from './market/market.component';
import {OrderListComponent} from './order-list/order-list.component';
import {MycartComponent} from './mycart/mycart.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'shop', component: ShopComponent},
  { path: 'aboutUs', component: AboutUsComponent},
  { path: 'list', component: ListComponent, canActivate: [ListGuardGuard]},
  { path: 'admin',
    component: AdminComponent,
    canDeactivate: [ListGuardGuard]
  },
  { path: 'service/:id', component: ServiceComponent},
  { path: 'confirm', component: ConfirmComponent},
  { path: 'user', component: UserShowComponent},
  { path: 'product', component: ProductListComponent},
  { path: 'customer', component: CustomerViewComponent},
  { path: 'purchase', component: CustomerPurchaseComponent},
  { path: 'market', component: MarketComponent,

    canDeactivate: [ListGuardGuard]},
  { path: 'order', component: OrderListComponent},
  { path: 'mycard', component: MycartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
