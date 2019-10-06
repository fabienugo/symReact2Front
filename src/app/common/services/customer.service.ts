import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../model/customer.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  /**
   * Retourne la liste des clients de l'utilisateur connecté
   */
  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>('/api/customers');
  }

  /**
   * Permet de modifer les données d'un utilisateur
   * @param customer the customer
   * @param id the customer's id
   */
  editCustomer(customer: Customer, id: number): Observable<Customer> {
    return this.http.put<Customer>('/api/customers/' + id, customer);
  }
}
