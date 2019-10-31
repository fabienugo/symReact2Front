import { Component, OnInit, OnChanges, AfterViewChecked, AfterViewInit } from '@angular/core';
import { Customer } from '../common/model/customer.model';
import { CustomerService } from '../common/services/customer.service';
import { DialogService } from '../common/services/dialog.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit, AfterViewChecked {

  customers: Customer[];

  cols: any[];


  constructor(
    private customerService: CustomerService,
    private dialogService: DialogService) { }

  ngOnInit() {
    // Permet de faire fonctionner la recherche global
    this.cols = [
      { field: 'firstName', header: 'Prénom' },
      { field: 'lastName', header: 'Nom' },
      { field: 'email', header: 'Email' },
      { field: 'company', header: 'Enreprise' },
      { field: 'invoices', header: 'Factures' }
    ];

    this.getCustomers();
  }

  ngAfterViewChecked() {
    this.getCustomers();
  }

  /**
   * Permet de récupérer la liste des clients de l'utilisateur connecté
   */
  getCustomers() {
    this.customerService.getCustomers().subscribe((customers: Customer[]) => {
      this.customers = customers;
    });
  }

  /**
   * Permet d'appeler la fonction pour ouvrir la popup d'édition d'un client
   * @param customer le client à modifier
   */
  openEditCustomerDialog(customer: Customer) {
    this.dialogService.openEditCustomerDialog(customer);
  }

  /**
   * Permet d'appeler la fonction pour ouvrir la popup d'ajout d'un client
   */
  addCustomer() {
    this.dialogService.openAddCustomerDialog();
  }

  /**
   * Permet d'ouvrir la popup de suppression d'un client
   * @param customer le client à supprimer
   */
  openDeleteCustomerDialog(customer: Customer) {
    this.dialogService.openDeleteCustomerDialog(customer);
  }
}
