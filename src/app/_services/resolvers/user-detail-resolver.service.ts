import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap, take, catchError } from 'rxjs/operators';
import { User } from 'src/app/_models/user';
import { UserService } from '../user.service';
 
@Injectable({
  providedIn: 'root',
})
export class UserDetailResolverService implements Resolve<User> {
  constructor(private service: UserService, private router: Router) {}
 
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> | Observable<never> {
    let id = route.paramMap.get('id');
 
    return this.service.get(+id).pipe(
      take(1),
      mergeMap(user => {
          console.log(user);
        if (user) {
          return of(user);
        } else { // id not found
          this.router.navigate(['/error/404']);
          return EMPTY;
        }
      }),
      catchError( err => {
        this.router.navigate(['/error/404']);
          return EMPTY;
      }
      )
    );
  }
}
