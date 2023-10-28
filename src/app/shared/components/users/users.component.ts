import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iusers } from '../../models/products';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  usersArr: Array<Iusers> = []
  constructor(private _router: Router,
    private _userService: UsersService
  ) { }

  ngOnInit(): void {
    this.usersArr = this._userService.getAllUsers();

  }
  toHome() {
    this._router.navigate([""])
  }
}
