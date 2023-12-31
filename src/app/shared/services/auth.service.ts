import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginStatus: boolean = false;
  isLoggedIn !: boolean;
  private authService$: BehaviorSubject<boolean> = new BehaviorSubject(this.isLoggedIn);
  authServiceAsObs$ = this.authService$.asObservable()
  private _router = inject(Router)


  constructor() {
  }

  isAUthenticated() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (localStorage.getItem('token')) {
          this.loginStatus = true
          this.authService$.next(this.isLoggedIn);
        } else {
          this.loginStatus = false
          this.authService$.next(this.isLoggedIn);
        }
        resolve(this.loginStatus)
      }, 100);
    })
  }

  logIn(userEmailObj: any) {

    if (userEmailObj.email === "admin@admin.com") {

      localStorage.setItem('token', 'token')
      this._router.navigate(["home"])
      this.isLoggedIn = true;
      this.authService$.next(this.isLoggedIn);
      localStorage.setItem("userRole", 'admin')

    } else if (userEmailObj.email === "user@user.com") {
      localStorage.setItem('token', 'token')
      this._router.navigate(["home"])
      this.isLoggedIn = true;
      this.authService$.next(this.isLoggedIn);
      localStorage.setItem("userRole", 'user')

    }

  }
  logOut() {
    localStorage.removeItem('token')
    this._router.navigate([""])
    this.isLoggedIn = false
    this.authService$.next(this.isLoggedIn);
    localStorage.removeItem("userRole")

  }

}
