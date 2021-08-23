import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'cxLoyalty';
  tabsData = [
    { id: 'flights', name: 'Flights', icon: 'faPlane' },
    { id: 'hotels', name: 'Hotels', icon: 'faPlane' },
    { id: 'bus', name: 'Bus', icon: 'faPlane' },
    { id: 'train', name: 'Train', icon: 'faPlane' },
    { id: 'cabs', name: 'Cabs', icon: 'faPlane' },
  ];
}
