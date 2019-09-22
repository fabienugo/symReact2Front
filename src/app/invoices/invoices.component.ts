import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../common/services/invoice.service';
import { Invoice } from '../common/model/invoice.model';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {

  invoices: Invoice[] = [];

  constructor(private invoiceService: InvoiceService) { }

  ngOnInit() {
    this.getInvoices();
  }

  getInvoices() {
    this.invoiceService.getInvoices().subscribe((invoices: Invoice[]) => {
      this.invoices = invoices;
    });
  }

}
