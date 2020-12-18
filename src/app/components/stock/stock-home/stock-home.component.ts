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
    const mockupProduct : ResProduct[] = [
     { name : "macbook", stock : 1234, price : 1000, image : "https://cf.shopee.co.th/file/441a198a2c67336315b6f1fbabdae47d" },
     { name : "macbook", stock : 3410, price : 1000, image : "https://cf.shopee.co.th/file/441a198a2c67336315b6f1fbabdae47d" },
     { name : "macbook", stock : 4234, price : 1000, image : "https://cf.shopee.co.th/file/441a198a2c67336315b6f1fbabdae47d" },
     { name : "macbook", stock : 43534, price : 1000, image : "https://cf.shopee.co.th/file/441a198a2c67336315b6f1fbabdae47d" },
     { name : "macbook", stock : 43534, price : 1000, image : "https://cf.shopee.co.th/file/441a198a2c67336315b6f1fbabdae47d" },
    ];

    this.dataSource.data = mockupProduct; 
  }



}
