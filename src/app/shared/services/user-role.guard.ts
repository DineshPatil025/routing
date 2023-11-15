import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRoleGuard implements CanActivate {

  private _router = inject(Router)
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let logedInUserRole: string = localStorage.getItem('userRole')!
    let userRolArr: Array<string> = route.data['userRole']

    if (userRolArr.includes(logedInUserRole)) { 

      return true;
    }else{
      const urlTree : UrlTree =  this._router.createUrlTree(['home'])
      return urlTree
    }
  }
}
