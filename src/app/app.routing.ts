import { Route } from '@angular/router';
import { componentFactoryName } from '@angular/compiler';
import { HomepageComponent } from './homepage/homepage.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';


export const APP_ROUTING: Route[] = [
    { path: '', component: HomepageComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent }
];
