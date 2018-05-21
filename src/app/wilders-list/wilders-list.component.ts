import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wilders-list',
  templateUrl: './wilders-list.component.html',
  styleUrls: ['./wilders-list.component.css']
})
export class WildersListComponent implements OnInit {

  // Removed eventEmitters and inputs since we added routes so no more parent component
  namePlaceholder = 'Name';
  rolePlaceholder = 'Role';

  constructor() {}

  ngOnInit() {}

  addWilder(value) {
    alert(value);
  }

  removeWilder() {
    alert('You removed a Wilder !');
  }
}
