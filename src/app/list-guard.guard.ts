import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate, CanDeactivate} from '@angular/router';
import {AdminComponent} from './admin/admin.component';


@Injectable({
  providedIn: 'root'
})
export class ListGuardGuard implements CanActivate, CanDeactivate<AdminComponent> {

  canActivate(route: ActivatedRouteSnapshot): boolean {

    return true;
  }

  canDeactivate(component: AdminComponent): boolean {
    if (component.loginForm.dirty) {
      return confirm(' Discard changes?');
    }
    return true;
  }

}
