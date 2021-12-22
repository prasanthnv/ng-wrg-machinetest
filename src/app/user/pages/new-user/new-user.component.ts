import { UsersService } from './../../services/users/users.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  userForm: FormGroup = new FormGroup({
    gender: new FormControl(),
    name: new FormGroup({
      title: new FormControl('', Validators.required),
      first: new FormControl('', Validators.required),
      last: new FormControl('', Validators.required)
    }),
    email: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required), 
    dob: new FormControl('', Validators.required), 
    phone: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })
  constructor(
    private userService: UsersService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  saveUser(): void{
    this.userService.saveUser({
      user:this.userForm.value
    });
    this.router.navigate(['/user'])
  }

}
