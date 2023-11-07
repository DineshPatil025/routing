import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  private _router = inject(Router)

  constructor() { }

  ngOnInit(): void {
  }


  onLogIn() {
    console.log('log in clicked');
    localStorage.setItem('token', 'token')
    this._router.navigate([""])

  }

  onLogOut() {
    localStorage.removeItem('token')
    this._router.navigate([""])

  }

}
