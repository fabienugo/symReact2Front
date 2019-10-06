import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EditCustomerComponent } from 'src/app/customers/edit-customer/edit-customer.component';
import { Customer } from '../model/customer.model';
import { AddCustomerComponent } from 'src/app/customers/add-customer/add-customer.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public dialog: MatDialog) { }

  /**
   * Permet d'ouvrir la popup d'édition d'un client
   * @param customer le client à modifier
   */
  openEditCustomerDialog(customer: Customer) {
    this.dialog.open(EditCustomerComponent, {
      width: '50%',
      data: customer
    });
  }

  /**
   * Permet d'ouvrir la popup d'ajout d'un client
   */
  openAddCustomerDialog() {
    this.dialog.open(AddCustomerComponent, {
      width: '50%',
    });
  }

}
