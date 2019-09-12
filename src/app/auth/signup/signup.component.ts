import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/common/services/auth.service';
import { User } from 'src/app/common/models/user.model';

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
    this.form = this.fb.group({
      email: new FormControl(''),
      name: new FormControl(''),
      password: new FormControl('')
    });
  }

  public submit(): void {
    this.authService.signup(this.form.value).subscribe((user: User) => {
      this.router.navigate(['/signin']);
    }, err => {
        this.error = err;
    });
  }

}
