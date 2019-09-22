import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Invoice } from '../model/invoice.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private http: HttpClient) { }

  /**
   * Retourne la liste de la totalité des factures de l'utilisateur connecté
   */
  getInvoices(): Observable<Invoice[]> {
    return this.http.get<Invoice[]>('/api/invoices');
  }
}
