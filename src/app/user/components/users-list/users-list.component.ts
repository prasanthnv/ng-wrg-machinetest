import { User } from './../../models/users.model';
import { UsersService } from './../../services/users/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users: Array<User> = [];
  searchResults: Array<User> = [];
  searched!: boolean;
  searchKey = ''
  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void{
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    })
  }

  searchUsers(){
    this.searched = true;
  this.userService.searchUsers(this.searchKey).subscribe(res=>{
      console.log(res);
      this.searchResults = res;
    })
  }

  clearSearch(): void{
    this.searched = false;
    this.searchResults = [];
    this.searchKey = '';
  }

}
