import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ResProduct } from 'src/app/models/product.model';
@Component({
  selector: 'app-stock-home',
  templateUrl: './stock-home.component.html',
  styleUrls: ['./stock-home.component.css']
})
export class StockHomeComponent implements OnInit {

  displayedColumns : string[] = ['image', 'name', 'price', 'stock', 'action'];
  dataSource = new MatTableDataSource<ResProduct>();

  constructor() { }

  ngOnInit(): void {
    this.feedData();
  }

  feedData(){
    const mockupProduct = [
      new ResProduct(),
      new ResProduct(),
      new ResProduct()
    ]
    this.dataSource.data = mockupProduct; 
  }



}
