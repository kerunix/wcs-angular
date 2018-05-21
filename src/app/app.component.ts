import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  // Input data for children component
  wilder = {
    name: 'Justine',
    role: 'Campus Manager'
  };

  // Runs when associated event is emitted
  // Uses the event
  onWilderAdded(event) {
    alert(event);
  }

  // Runs when associated event is emitted
  // Does not the event
  onWilderRemoved() {
    alert('You removed a wilder !');
  }
}
