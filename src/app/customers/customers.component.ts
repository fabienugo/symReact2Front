import { Component, OnInit } from '@angular/core';
import { Customer } from '../common/model/customer.model';
import { CustomerService } from '../common/services/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  customers: Customer[];
  invoicesNumber: number;

  cols: any[];


  constructor(
    private customerService: CustomerService) { }

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

  getCustomers() {
    this.customerService.getCustomers().subscribe((customers: Customer[]) => {
      this.customers = customers;
    });
  }

}
