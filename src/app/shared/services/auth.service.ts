import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginStatus: boolean = false;

  constructor() { }

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

}
