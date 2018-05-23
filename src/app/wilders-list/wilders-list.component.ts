import { Component, OnInit } from '@angular/core';
// Import Service
import { WildersService } from '../wilders.service';

@Component({
  selector: 'app-wilders-list',
  templateUrl: './wilders-list.component.html',
  styleUrls: ['./wilders-list.component.css']
})
export class WildersListComponent implements OnInit {

  searchTerm = '';
  name = 'Name';
  role = 'Role';

  // Declare local variable
  wilders;

  // Instantiate service
  constructor(private wildersService: WildersService) {}

  ngOnInit() {
    /**
     * Use service
     * Subscribe to returned Observable and assign value to our variable
     */
    this.wildersService.getWilders().subscribe(
      (wilders) => this.wilders = wilders
    );
  }

  addWilder(value) {
    this.wilders.push({name: this.name, role: this.role});
  }

  removeWilder(index) {
    this.wilders.splice(index, 1);
  }
}
