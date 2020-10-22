import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import {StoreModule} from '@ngrx/store';
import {customerFeatureKey, reducer} from '../reducers/customer.reducer';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MessageSnackbarModule } from '../shared/message-snackbar/message-snackbar.module';


@NgModule({
  declarations: [ListCustomerComponent],
  imports: [
    CommonModule,
     StoreModule.forFeature(customerFeatureKey, reducer),
     MessageSnackbarModule
  ],
  exports: [ListCustomerComponent]
})
export class CustomerModule { }
