import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { JwtToken } from '../model/jwt-token.model';
import { User } from '../model/user.model';

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

  /**
   * Initialisation du token
   */
  private initToken(): void {
    const token = localStorage.getItem('jwt');
    if (token) {
      this.jwtToken.next({
        isAuthenticated: true,
        token
      });
    } else {
      this.jwtToken.next({
        isAuthenticated: false,
        token: null
      });
    }
  }

  /**
   * Permet à un utilisateur de s'inscrire
   * @param user le user qui s'inscrit
   */
  signup(user: User): Observable<User> {
    return this.http.post<User>('/api/users', user);
  }

  /**
   * Permet à un utilisateur de se connecter
   * @param credentials le login/mot de passe
   */
  signin(credentials: { username: string, password: string }): Observable<string> {
    return this.http.post<string>('/api/login_check', credentials).pipe(
      tap((token: string) => {
        this.jwtToken.next({
          isAuthenticated: true,
          token
        });
        localStorage.setItem('jwt', JSON.stringify(token)); // Stock notre token de manière persistente
      })
    );
  }

  /**
   * Permet de se déconnecter et de supprimer le token
   */
  logout() {
    this.jwtToken.next({
      isAuthenticated: false,
      token: null
    });
    localStorage.removeItem('jwt');
  }
}
