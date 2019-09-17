import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public currentUser: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient) { }

}
