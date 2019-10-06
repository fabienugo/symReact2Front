import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Customer } from 'src/app/common/model/customer.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {

  public addCustomerForm: FormGroup;

  constructor(
    private http: HttpClient,
    private router: Router) { }

  ngOnInit() {
    this.addCustomerForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      company: new FormControl('', Validators.required)
    });
  }

  addCustomer(customer: Customer) {
    this.http.post<Customer>('/api/customers', customer).subscribe((result) => {
    });
  }

}
