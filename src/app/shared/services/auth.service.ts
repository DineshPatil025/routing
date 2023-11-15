import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authService$: Subject<boolean> = new Subject();
  authServiceAsObs = this.authService$.asObservable()
  isLoggedIn !: boolean;
  loginStatus: boolean = false;
  private _router = inject(Router)


  constructor() {
  }

  isAUthenticated() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (localStorage.getItem('token')) {
          this.loginStatus = true

        } else {
          this.loginStatus = false
        }
        resolve(this.loginStatus)
      }, 100);
    })
  }

  logIn() {
    console.log('log in clicked');
    localStorage.setItem('token', 'token')
    this._router.navigate(["home"])
    this.isLoggedIn = true;
    this.authService$.next(this.isLoggedIn);

  }
  logOut() {
    localStorage.removeItem('token')
    this._router.navigate([""])
    this.isLoggedIn = false
    this.authService$.next(this.isLoggedIn);

  }

}
