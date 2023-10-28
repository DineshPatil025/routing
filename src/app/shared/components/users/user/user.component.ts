import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iusers } from 'src/app/shared/models/products';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
userid !: string;
singleUserObj !: Iusers;

  constructor(private _userService : UsersService, private _route : ActivatedRoute) { }

  ngOnInit(): void {

    this.userid = this._route.snapshot.params['userId']
    this.singleUserObj = this._userService.getSingleUser(this.userid)
    console.log(this.singleUserObj);
    
  }

}
