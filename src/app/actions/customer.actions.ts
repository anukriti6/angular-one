import { createAction, props } from '@ngrx/store';
import { Customer } from '../customer/models/customer';

export const loadCustomers = createAction(
  '[Customer] Load Customers',(customer: Customer) => ({customer})
);




