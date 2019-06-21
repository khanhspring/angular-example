import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Observable } from 'rxjs';

import { DataResponse } from '../_models/data-response';
import { User } from '../_models/user';
import { Page } from '../_models/page';
import { AdminModule } from '../admin/admin.module';
import { UserDetail } from '../_models/user-detail';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly USER_URL: string = environment.rootPath + 'users'; 

  constructor(private http: HttpClient) {}

  getList(): Observable<Page<User>> {
    return this.http.get<Page<User>>(this.USER_URL);
  }

  get(id: number): Observable<DataResponse<UserDetail>> {
    return this.http.get<DataResponse<UserDetail>>(this.USER_URL + '/' + id);
  }
}
