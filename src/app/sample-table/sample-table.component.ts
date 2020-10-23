import { AfterViewInit, Component, OnInit, ViewChild, Input, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { SampleTableDataSource, SampleTableItem } from './sample-table-datasource';

@Component({
  selector: 'app-sample-table',
  templateUrl: './sample-table.component.html',
  styleUrls: ['./sample-table.component.scss']
})
export class SampleTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<SampleTableItem>;
  dataSource: SampleTableDataSource;
constructor(){}
  @Input()
  myCustomData: SampleTableItem[];

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new SampleTableDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.dataSource) {
      this.dataSource.data = null;
      this.dataSource.data = this.myCustomData ? changes.myCustomData.currentValue : [];
      this.paginator._changePageSize(this.paginator.pageSize);
    }
  }
}
