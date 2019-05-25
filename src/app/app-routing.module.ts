import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ShopComponent } from './shop/shop.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminComponent } from './admin/admin.component';
import { ServiceComponent } from './service/service.component';
import { ListComponent } from './list/list.component';
import { ConfirmComponent } from './confirm/confirm.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'shop', component: ShopComponent},
  { path: 'aboutUs', component: AboutUsComponent},
  { path: 'list', component: ListComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'service/:id', component: ServiceComponent},
  { path: 'confirm', component: ConfirmComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
