import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EditCustomerComponent } from 'src/app/customers/edit-customer/edit-customer.component';
import { Customer } from '../model/customer.model';
import { AddCustomerComponent } from 'src/app/customers/add-customer/add-customer.component';
import { DeleteCustomerComponent } from 'src/app/customers/delete-customer/delete-customer.component';
import { HttpClient } from '@angular/common/http';
import { CustomerService } from './customer.service';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(
    public dialog: MatDialog,
    public customerService: CustomerService) { }

  /**
   * Permet d'ouvrir la popup d'édition d'un client
   * @param customer le client à modifier
   */
  openEditCustomerDialog(customer: Customer) {
    this.dialog.open(EditCustomerComponent, {
      width: '40%',
      data: customer
    });
  }

  /**
   * Permet d'ouvrir la popup d'ajout d'un client
   */
  openAddCustomerDialog() {
    this.dialog.open(AddCustomerComponent, {
      width: '40%',
    });
  }

  /**
   * Permet d'ouvrir le popup de suppression d'un client
   * @param customer le client à supprimer
   */
  openDeleteCustomerDialog(customer: Customer) {
    const dialogRef = this.dialog.open(DeleteCustomerComponent, {
      width: '40%',
      data: customer
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        this.customerService.deleteCustomer(customer.id).subscribe(() => {});
      }
    });
  }

}
