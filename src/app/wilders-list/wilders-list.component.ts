import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-wilders-list',
  templateUrl: './wilders-list.component.html',
  styleUrls: ['./wilders-list.component.css']
})
export class WildersListComponent implements OnInit {

  // Declare Input data from parent component
  @Input() wilder;

  // Declare output events to be emitted to the parent
  @Output() removeWilder = new EventEmitter();
  @Output() addWilder = new EventEmitter();

  namePlaceholder = 'Name';
  rolePlaceholder = 'Role';

  constructor() {}

  ngOnInit() {}

  remove() {
    this.removeWilder.emit(null);
  }
}
