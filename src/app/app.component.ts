import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  displayNav = true;

  titleClasses = {
    'red': true,
    'underlined': true,
  };

  wilder = {
    name: 'Justine',
    role: 'Campus Manager'
  };
}
