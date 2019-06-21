import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserAdditionComponent } from './user-addition/user-addition.component';
import { UserDetailResolverService } from 'src/app/_services/resolvers/user-detail-resolver.service';

const routes: Routes = [
  {
    path: '', 
    component: UserComponent,
    children:[
      {path: 'add', component: UserAdditionComponent},
      {
        path: 'detail/:id', 
        component: UserDetailComponent,
        resolve: {
          user: UserDetailResolverService
        }
      },
      {path: '', component: UserListComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
