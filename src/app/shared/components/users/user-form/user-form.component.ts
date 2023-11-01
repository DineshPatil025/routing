import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iusers } from 'src/app/shared/models/products';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { UsersService } from 'src/app/shared/services/users.service';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {


  userForm !: FormGroup
  newUserObj !: Iusers;
  userId !: string;
  inEditMode: boolean = false;
  editUserObject !: Iusers;
  // editId !: string; 

  private _uuidService = inject(UuidService);
  private _usersService = inject(UsersService);
  private _snackBar = inject(SnackbarService);
  private _actRoute = inject(ActivatedRoute)

  constructor(private _route: Router) { }

  ngOnInit(): void {
    this.createUserForm();
    this._actRoute.params.subscribe((param: Params) => {
      this.userId = param['userId']
      if (this.userId) {
        this.inEditMode = true;
        this.editUserObject = this._usersService.getSingleUser(this.userId)
        this.userForm.patchValue(this.editUserObject)
      }
    })
  }

  createUserForm() {
    this.userForm = new FormGroup({
      userName: new FormControl(null, [Validators.required]),
      userRole: new FormControl(null, [Validators.required])
    })
  }
  createUser() {
    if (this.userForm.valid) {

      this.newUserObj = { ...this.userForm.value, userId: this._uuidService.uuid() };
      this._usersService.addNewUser(this.newUserObj)
      this.userForm.reset();
      this._snackBar.openSnackBar(`New user ${this.newUserObj.userName} added successfully`, 'close')
      this._route.navigate(['/users'])
    }
    else {
      this._snackBar.openSnackBar('Add user name and role', 'close')
    }
  }

  updateUser() {

    if (this.userForm.valid) {
      let updUser = { ...this.userForm.value, userId: this.userId };
      console.log(updUser);
      this._usersService.updateUser(updUser);
      this.userForm.reset();
      this._snackBar.openSnackBar(`User updated successfully`, 'close')


      this._route.navigate(['/users'])

    }

  }
}
