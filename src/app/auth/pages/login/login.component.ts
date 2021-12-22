import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  formSubmited!: boolean;
  loginError!: boolean;

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
   
  }


  login(): void{
    this.formSubmited = true;
    console.log(this.loginForm)
    if(this.loginForm.valid){
      // console.log(this.loginForm.value)
      this.authService.login({
        username: this.loginForm.value.username,
        password: this.loginForm.value.password
      }).subscribe(res=>{
        console.log(res)
        if(res.status){
          this.loginError = false;
          this.router.navigate(['/user'])
        }else{
          this.loginError = true
        }
      })
    }
   
  }



}
