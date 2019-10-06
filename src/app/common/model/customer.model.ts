import { Invoice } from './invoice.model';
export interface Customer {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    company: string;
    invoices: Invoice[];
}
