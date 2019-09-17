import { Route } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CustomersComponent } from './customers/customers.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './common/guards/auth.guard';


export const APP_ROUTING: Route[] = [
    { path: '', component: HomepageComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'customers', component: CustomersComponent },
    { path: 'invoices', component: InvoicesComponent },
    { path: 'profile', canActivate: [AuthGuard], component: ProfileComponent },
    { path: '**', component: HomepageComponent }
];
