import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { faArchive, faBus, faCar, faHotel, faPlane, faTrain } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tab-factory',
  templateUrl: './tab-factory.component.html',
  styleUrls: ['./tab-factory.component.css'],
})
export class TabFactoryComponent implements OnInit, AfterViewInit {
  @Input() tabsData: any;

  faPlane = faPlane;
  faBus = faBus;
  faHotel = faHotel;
  faTrain = faTrain;
  faCar = faCar;
  faArchive = faArchive;
  


  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    let flightTab = document.getElementById('flights');
    if(flightTab)
    flightTab.className = flightTab?.className.concat(' active');
  }

  ngOnInit(): void {
   
  }

  getIcon(index: any) {
    if( index === 0) {
      return this.faPlane
    } else if( index === 1) {
      return this.faHotel;
    } else if( index === 2) {
      return this.faBus;
    } else if( index === 3) {
      return this.faTrain;
    } else if( index === 4) {
      return this.faCar;
    } else {
      return this.faArchive;
    }
  }

  openTab(tabId: string) {
    let i, tablinks;
    tablinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(' active', '');
    }
    let tab = document.getElementById(tabId);
    if (tab) {
      tab.style.display = 'block';
      tab.className += ' active';
    }
    if( tabId === 'flights') {
      this.router.navigate(['flights']);
    } else if( tabId === 'hotels') {
      this.router.navigate(['hotels']);
    }
    
  }
}
