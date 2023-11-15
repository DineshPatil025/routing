import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  logInForm !: FormGroup;
  SignUpForm !:FormGroup;
  haveAcnt : boolean = false;


  private _router = inject(Router);
  private _authService = inject(AuthService);

  constructor() { }

  ngOnInit(): void {
    this.createLogInForm();
    this.createSignUpForm();
  }

  createLogInForm(){
    this.logInForm = new FormGroup({
      email : new FormControl(null, [Validators.required]),
      password : new FormControl(null, [Validators.required]),
    })
  }

  createSignUpForm(){
    this.logInForm = new FormGroup({
      email : new FormControl(null, [Validators.required]),
      password : new FormControl(null, [Validators.required]),
      Confirmpassword : new FormControl(null, [Validators.required]),
    })
  }
  onLogIn(){
  let userEmailObj = this.logInForm.value;
  console.log(userEmailObj);
  
    this._authService.logIn(userEmailObj)
  }

  

}
