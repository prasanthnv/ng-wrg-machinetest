import { UsersResponse } from './../../models/users-response.model';
import { User } from './../../models/users.model';
import { filter, map, switchMap } from 'rxjs/operators';
import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users$:BehaviorSubject<Array<User>> = new BehaviorSubject<Array<User>>([]);
  constructor(
    private http: HttpClient
  ) { }

  getUsers(){
    const usersList = JSON.parse(localStorage.getItem('users') || '[]');
    if(usersList.length){
      return of(usersList)
    }else{
     return  this.fetchUsers()
    }
  }

  fetchUsers(): Observable<Array<User>>{
    console.log("Fetching from API !!!!");
    return this.http.get<UsersResponse>(`${environment.api.users}?results=20`).pipe(
      map(res=>{
        localStorage.setItem('users', JSON.stringify(res.results));
        return res.results;
      })
    )
  }

  saveUser(user: User): void{
    let usersList:Array<User> = JSON.parse(localStorage.getItem('users') || '[]');
    usersList.push(user);
    console.log("here", usersList)
    localStorage.setItem('users', JSON.stringify(usersList));
  }

  searchUsers(key: string){
    return this.getUsers().pipe(
      map((res: Array<User>) => {
        let results: Array<User> =[];
        console.log(res);
        results = res.filter(user => {
          return user.user.name.first.indexOf(key) !== -1
          || user.user.name.last.indexOf(key)  !== -1
          || user.user.email.indexOf(key)  !== -1
          || user.user.username.indexOf(key)  !== -1
          || user.user.phone.indexOf(key)  !== -1
        })
        return results;
      })
    )
  }
}
