import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Data for string interpolation
  homeTitle = 'Welcome to your Wild Code School application !';

  // Data for two-way data binding
  userName = '';

  constructor() { }

  ngOnInit() {
  }

}
