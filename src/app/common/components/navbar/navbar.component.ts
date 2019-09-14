import { Component, OnInit, OnDestroy } from '@angular/core';
import { JwtToken } from '../../model/jwt-token.model';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  public jwtToken: JwtToken;
  public subscription: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.subscription = this.authService.jwtToken.subscribe((jwtToken: JwtToken) => {
      this.jwtToken = jwtToken;
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  /**
   * Permet de se déconnecter
   */
  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
