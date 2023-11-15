import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './shared/services/auth.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isLoggedIn !: boolean;

  private _router = inject(Router)
  private _authService = inject(AuthService)
  ngOnInit(): void {
    this._router.navigate([''])
    this._authService.authServiceAsObs$.subscribe(res => this.isLoggedIn = res)
    // this._authService.logOut();
  }

  title = 'routing';
  
}
