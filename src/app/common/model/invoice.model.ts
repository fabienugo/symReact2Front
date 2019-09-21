import { Customer } from './customer.model';
import { InvoiceStatusEnum } from '../enum/invoiceStatusEnum';

export interface Invoice {
    amount: number;
    sentAt: string;
    status: InvoiceStatusEnum;
    customer: Customer;
    chrono: number;
}
