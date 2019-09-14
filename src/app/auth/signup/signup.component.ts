import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/common/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  form: FormGroup;
  error: string;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    // Initialisation du formulaire d'inscription
    this.form = this.fb.group({
      email: new FormControl(''),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      password: new FormControl('')
    });
  }

  /**
   * Permet à un utilisateur de s'inscrire
   */
  public submit(): void {
    this.authService.signup(this.form.value).subscribe(() => {
      this.router.navigate(['/signin']);
    }, err => {
        this.error = err;
    });
  }

}
