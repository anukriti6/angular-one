import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import {StoreModule} from '@ngrx/store';
import {customerFeatureKey, reducer} from '../reducers/customer.reducer';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MessageSnackbarModule } from '../shared/message-snackbar/message-snackbar.module';
import { SampleTableComponent } from '../sample-table/sample-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [ListCustomerComponent,SampleTableComponent],
  imports: [
    CommonModule,
     StoreModule.forFeature(customerFeatureKey, reducer),
     MessageSnackbarModule,
     MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FlexLayoutModule
  ],
  exports: [ListCustomerComponent]
})
export class CustomerModule { }
