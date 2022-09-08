import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  role: any;
  constructor() { }

  checkRole(): string {
    return sessionStorage.getItem('grantList');
  }

  ngOnInit(): void {
    this.checkRole();
    console.log(this.role);
  }
}
