import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wilders-list',
  templateUrl: './wilders-list.component.html',
  styleUrls: ['./wilders-list.component.css']
})
export class WildersListComponent implements OnInit {
  namePlaceholder = 'Name';
  rolePlaceholder = 'Role';

  constructor() {}

  ngOnInit() {}

  addWilder() {
    alert('You added a Wilder !');
  }
  removeWilder(value) {
    alert(value);
  }
}
