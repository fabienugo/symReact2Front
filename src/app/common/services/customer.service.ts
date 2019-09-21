import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../model/customer.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) {}

  /**
   * Retourne la liste des clients de l'utilisateur connecté
   */
  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>('/api/customers');
  }
}
