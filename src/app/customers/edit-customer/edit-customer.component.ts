import { Component, OnInit, Inject } from '@angular/core';
import { Customer } from 'src/app/common/model/customer.model';
import { CustomerService } from 'src/app/common/services/customer.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private customerService: CustomerService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.form = new FormGroup({
      firstName: new FormControl(this.data.firstName, Validators.required),
      lastName: new FormControl(this.data.lastName, Validators.required),
      email: new FormControl(this.data.email, Validators.required),
      company: new FormControl(this.data.company, Validators.required)
    });
  }

  /**
   * Permet de persister les modifications des informations du client
   */
  editCustomer(customer: Customer, customerId: number) {
    this.customerService.editCustomer(customer, customerId);
  }

}
