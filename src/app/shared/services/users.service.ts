import { Injectable } from '@angular/core';
import { Iusers } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  usersArray: Array<Iusers> = [
    {
      userName: 'Jhon',
      userId: '1',
      userRole: "admin"
    },
    {
      userName: 'June',
      userId: '2',
      userRole: "users"
    },
    {
      userName: 'May',
      userId: "3",
      userRole: "admin"
    },
    {
      userName: 'James',
      userId: "4",
      userRole: "users"
    },
    {
      userName: "July",
      userId: "5",
      userRole: "admin"
    },
  ];
  constructor() { }

  getAllUsers() {
    return this.usersArray;
  }

  getSingleUser(id: string) {
    return this.usersArray.find(user => user.userId === id)!
  }

  addNewUser(newUserObj: Iusers) {
    this.usersArray.push(newUserObj)
  }

  updateUser(userObj : Iusers){
    let getIndex = this.usersArray.findIndex(user => user.userId === userObj.userId )
    this.usersArray[getIndex].userName = userObj.userName;
    this.usersArray[getIndex].userRole = userObj.userRole;
  }
}
