import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EditCustomerComponent } from 'src/app/customers/edit-customer/edit-customer.component';
import { Customer } from '../model/customer.model';

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
    const dialogRef = this.dialog.open(EditCustomerComponent, {
      width: '50%',
      data: customer
    });
    dialogRef.afterClosed().subscribe(result => {
      customer = result;
    });
  }

}
