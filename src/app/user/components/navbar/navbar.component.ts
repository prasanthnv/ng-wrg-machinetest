import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthStatus } from 'src/app/core/models/auth-status.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  logout(): void{
    localStorage.removeItem(AuthStatus.userlogged);
    this.router.navigate(['login'])
  }

}
