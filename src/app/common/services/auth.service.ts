import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { JwtToken } from '../models/jwt-token.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Initialisation du behaviorSubject
  public jwtToken: BehaviorSubject<JwtToken> = new BehaviorSubject({
    isAuthenticated: null,
    token: null
  });

  constructor(
    private http: HttpClient
  ) {
    this.initToken();
  }

  private initToken(): void {
    const token = localStorage.getItem('jwt');
    if (token) {
      this.jwtToken.next({
        isAuthenticated: true,
        // tslint:disable-next-line:object-literal-shorthand
        token: token
      });
    } else {
      this.jwtToken.next({
        isAuthenticated: false,
        token: null
      });
    }
  }

  /**
   * Permet à un utilisateur de s'inscrirew
   * @param user le user qui s'inscrit
   */
  signup(user: User): Observable<User> { 
    return this.http.post<User>('/api/login_check', user);
  }

  signin(credentials: { email: string, password: string }): Observable<string> {
    return this.http.post<string>('http://localhost:8000/api/login_check', credentials).pipe(
      tap((token: string) => {
        console.log('dans le post');
        this.jwtToken.next({
          isAuthenticated: true,
          // tslint:disable-next-line:object-literal-shorthand
          token: token
        });
        console.log('token ', this.jwtToken);
        localStorage.setItem('jwt', token); // Stock notre token de manière persistente
      })
    );
  }
}
