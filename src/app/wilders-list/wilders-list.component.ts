import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wilders-list',
  templateUrl: './wilders-list.component.html',
  styleUrls: ['./wilders-list.component.css']
})
export class WildersListComponent implements OnInit {

  // Declare empty search term
  searchTerm = '';
  name = 'Name';
  role = 'Role';

  wilders = [
    {
      name: 'Justine',
      role: 'Campus Manager'
    },
    {
      name: 'Benoit',
      role: 'Gourou du JS'
    },
    {
      name: 'Bastien',
      role: 'Inventeur de Java'
    }
  ];

  constructor() {}

  ngOnInit() {}

  addWilder(value) {
    this.wilders.push({name: this.name, role: this.role});
  }

  removeWilder(index) {
    this.wilders.splice(index, 1);
  }
}
