import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import {StoreModule} from '@ngrx/store';
import {customerFeatureKey, reducer} from '../reducers/customer.reducer';


@NgModule({
  declarations: [ListCustomerComponent],
  imports: [
    CommonModule,
     StoreModule.forFeature(customerFeatureKey, reducer),
  ],
  exports: [ListCustomerComponent]
})
export class CustomerModule { }
