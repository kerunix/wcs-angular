import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wilders-list',
  templateUrl: './wilders-list.component.html',
  styleUrls: ['./wilders-list.component.css']
})
export class WildersListComponent implements OnInit {

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

  // Add a wilder using two-way data binding
  addWilder(value) {
    this.wilders.push({name: this.name, role: this.role});
  }

  // Remove a wilder at a specific index
  removeWilder(index) {
    this.wilders.splice(index, 1);
  }
}
