import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  demoMailNoti: any;
  demoNoti :any;
  constructor() { }

  ngOnInit(): void {
    this.demoMailNoti = 10;
    this.demoNoti = 90;
  }

}
