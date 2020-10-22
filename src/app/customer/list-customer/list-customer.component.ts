import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Customer } from '../models/customer';
import { Store, select } from '@ngrx/store';
import { CustomerState } from 'src/app/reducers/customer.reducer';
import { selectCustomers } from 'src/app/selector/customer.selectors';
import { loadCustomers } from 'src/app/actions/customer.actions';
import { MessageSnackbarService } from 'src/app/shared/message-snackbar/message-snackbar.service';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.scss']
})
export class ListCustomerComponent implements OnInit {

 customers$: Observable<Customer[]>;


  constructor(private store: Store<CustomerState>,
  private messageSnackbar: MessageSnackbarService) {

    this.customers$ = this.store.pipe(select(selectCustomers));

  }

  ngOnInit(): void {
  }

  addCustomer(customerName: string): void {

    const customer = new Customer();

    customer.name = customerName;

    this.store.dispatch(loadCustomers(customer));


  }

  showSnackInfo(){
    this.messageSnackbar.openSnackBar({
      duration: 15000,
      message: "yahooooooooo",
      type:  "INFO"
    });
  }
  showSnackError(){
    this.messageSnackbar.openSnackBar({
      duration: 15000,
      message: "yahooooooooo",
      type:  "ERROR"
    });
  }
  showSnackSuccess(){
    this.messageSnackbar.openSnackBar({
      duration: 15000,
      message: "yahooooooooo",
      type:  "SUCCESS"
    });
  }
}
