import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    this.http.get('/api/customers').subscribe((response) => {
      console.log('TCL: CustomersComponent -> getCustomers -> response', response);
    });
  }

}
