import { Invoice } from './invoice.model';
export interface Customer {
    firstName: string;
    lastName: string;
    email: string;
    company: string;
    invoices: Invoice[];
}
