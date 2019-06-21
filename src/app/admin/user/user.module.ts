import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }      from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserAdditionComponent } from './user-addition/user-addition.component';

@NgModule({
  declarations: [UserComponent, UserListComponent, UserDetailComponent, UserAdditionComponent],
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule
  ],
  providers: [
  ]
})
export class UserModule { }
