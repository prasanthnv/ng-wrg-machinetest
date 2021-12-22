import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { NamePipe } from './pipes/name/name.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewUserComponent } from './pages/new-user/new-user.component';


@NgModule({
  declarations: [
    NavbarComponent,HomeComponent, UsersListComponent, NamePipe, NewUserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,ReactiveFormsModule
  ]
})
export class UserModule { }
