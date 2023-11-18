import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { SnackbarService } from '../../services/snackbar.service';
import { SweetAlertService } from '../../services/sweet-alert.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  logInForm !: FormGroup;
  SignUpForm !: FormGroup;
  haveAcnt: boolean = false;


  private _router = inject(Router);
  private _authService = inject(AuthService);
  private _snackBarService = inject(SnackbarService);
  private _swalService = inject(SweetAlertService);

  constructor() { }

  ngOnInit(): void {
    this.createLogInForm();
    this.createSignUpForm();
  }

  createLogInForm() {
    this.logInForm = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    })
  }

  createSignUpForm() {
    this.logInForm = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      Confirmpassword: new FormControl(null, [Validators.required]),
    })
  }
  onLogIn() {
    let userEmailObj = this.logInForm.value;
    if (userEmailObj.email === 'admin@admin.com') {
      this._authService.logIn(userEmailObj)

      this._snackBarService.openSnackBar('Logged in as ADMIN', 'close')

    } else if (userEmailObj.email === 'user@user.com') {
      this._authService.logIn(userEmailObj)
      this._snackBarService.openSnackBar('Logged in as USER ', 'close')

    } else {
      this._swalService.swalWarn();
      this._snackBarService.openSnackBar('Enter Valid Email Id & Password', 'close')
    }
  }



}
