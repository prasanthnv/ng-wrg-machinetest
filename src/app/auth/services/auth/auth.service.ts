import { LoginPayload } from './../../models/login-payload.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponse } from '../../models/login-response.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AuthStatus } from 'src/app/core/models/auth-status.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(
    private http: HttpClient
  ) { }

  login(payload: LoginPayload): Observable<LoginResponse>{
    return this.http.get<any>('../../../../assets/json/authdata.json').pipe(
      map(res => {
        let response: LoginResponse = {
          username: payload.username
        };
        if(res.username === payload.username && res.password === payload.password){
          response.status = true;
          localStorage.setItem(AuthStatus.userlogged, "true")
          return response;
        }else{
          response.status = false;
          response.message = "Login error.. Invalid credentials !!";
        }
        return response;
      })
    );
  }

  isLogged(): boolean{
    return localStorage.getItem(AuthStatus.userlogged) ? true : false;
  }
}
