import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { APP_ROUTING } from './app.routing';
import { NavbarComponent } from './common/components/navbar/navbar.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { CustomersComponent } from './customers/customers.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthInterceptor } from './common/services/auth-interceptor.service';
import { PrimengModule } from './primeng/primeng.module';
import { EditCustomerComponent } from './customers/edit-customer/edit-customer.component';
import { AddCustomerComponent } from './customers/add-customer/add-customer.component';
import { DeleteCustomerComponent } from './customers/delete-customer/delete-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SigninComponent,
    SignupComponent,
    HomepageComponent,
    CustomersComponent,
    InvoicesComponent,
    ProfileComponent,
    EditCustomerComponent,
    AddCustomerComponent,
    DeleteCustomerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularMaterialModule,
    PrimengModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(APP_ROUTING)
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  entryComponents: [
    EditCustomerComponent,
    AddCustomerComponent,
    DeleteCustomerComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
