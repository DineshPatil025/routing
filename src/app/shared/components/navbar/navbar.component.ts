import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  show: boolean = false;
  isLoggedIn !: boolean;
  getUserRole !: string;
  
  private _router = inject(Router)
  private _authService = inject(AuthService)
  
  constructor() { }

  ngOnInit(): void {

    this._authService.authServiceAsObs$.subscribe(res =>this.isLoggedIn = res );
    this.getUserRole = localStorage.getItem("userRole")!;
    
  }

  onLogOut() {
    this._authService.logOut();
    this.isLoggedIn = false;
    this._authService.authServiceAsObs$.subscribe(res =>this.isLoggedIn = res )

  }

}
