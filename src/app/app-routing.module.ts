import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'error', loadChildren: () => import('./error/error.module').then(mod => mod.ErrorModule)},
  {path: '', loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule)},
  {path: '**', redirectTo: '/error/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
