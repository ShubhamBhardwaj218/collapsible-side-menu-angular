import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

import { IProduct } from '../../modal/product';
import { productPriceDetail } from '../../productconstants/productconstant';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, CommonModule],
})
export class DashboardComponent implements AfterViewInit {
  displayedColumns: string[] = ['fruitName', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  productDetail = new MatTableDataSource<IProduct>(productPriceDetail);


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.productDetail.paginator = this.paginator;
  }
}

