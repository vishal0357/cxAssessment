import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { faArrowLeft, faArrowRight, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { FlightsService } from './service/flights.service';
import * as _ from 'lodash';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit, OnDestroy {

  flightForm: any;
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;
  faPencilAlt = faPencilAlt;
  flightSearchData: any;
  showFlightForm = true;
  showFlightData = false;
  showSortByUI = false;
  showFilterByUI = false;
  selectedRadio: any;
  filterByForm: any;
  filterByData: any;
  filterConditions: any = {};
  destroy$: Subject<boolean> = new Subject<boolean>();

  sortByData = [
    'Price (Lowest to Highest)',
    'Price (Highest to Lowest)',
    'Duration (Shortest to Longest)',
    'Duration (Longest to Shortest)',
    'Departure (Earliest to Latest)',
    'Departure (Latest to Earliest)',
    'Airline (A to Z)',
    'Airline (Z to A)'
  ]

  constructor(private formBuilder: FormBuilder, private flightService: FlightsService) {
    this.flightSearchData = {...this.flightService.searchResult};
  }

  ngOnInit(): void {
    this.flightForm = this.formBuilder.group({
      departure: ['', [Validators.required]],
      destination: ['', [Validators.required]],
      departureDate: ['', [Validators.required]],
      returnDate: ['', [Validators.required]],
      travellers: ['', [Validators.required]],
      flightClass: ['', [Validators.required]],
    });

    this.filterByForm = this.formBuilder.group({
      minimumPrice: [],
      maximumPrice: [],
      basicEconomy: [],
      mainCabin: [],
      economy: [],
      business: []
    });

    this.setFilterByData(this.flightService.searchResult);
  }

  onSubmit(): void {
    this.flightService.selectedSearchData = this.flightForm.value;
    this.flightService.getFlightsData(this.flightForm.value).pipe(takeUntil(this.destroy$)).subscribe(data => {
      this.flightSearchData = _.cloneDeep(data);
      this.setFilterByData(data);
      this.showFlightData = true;
      this.showFlightForm = false;
    });
  }

  setFilterByData(data: any): void {
     this.filterByData = [
      { type : 'Basic economy', count: 0, minimumPrice: 0, controlName:'basicEconomy' },
      { type : 'Main cabin', count: 0 , minimumPrice: 0 , controlName:'mainCabin'},
      { type : 'Economy', count: 0 , minimumPrice: 0, controlName:'economy' },
      { type : 'Business', count: 0 , minimumPrice: 0 , controlName:'business'},
    ];

    data.flights.forEach((flight: any) => {
        flight.class.forEach((flightClass: any) => {
            if(flightClass.type === 'Basic economy') {
              this.filterByData[0].count++;
              if((this.filterByData[0].minimumPrice > flightClass.price) || this.filterByData[0].minimumPrice === 0) {
                this.filterByData[0].minimumPrice = flightClass.price;
              }
            } else if(flightClass.type === 'Main cabin') {
              this.filterByData[1].count++;
              if((this.filterByData[1].minimumPrice > flightClass.price) || this.filterByData[1].minimumPrice === 0) {
                this.filterByData[1].minimumPrice = flightClass.price;
              }
            } else if(flightClass.type === 'Economy') {
              this.filterByData[2].count++;
              if((this.filterByData[2].minimumPrice > flightClass.price) || this.filterByData[2].minimumPrice === 0) {
                this.filterByData[2].minimumPrice = flightClass.price;
              }
            } else if(flightClass.type === 'Business') {
              this.filterByData[3].count++;
              if((this.filterByData[3].minimumPrice > flightClass.price) || this.filterByData[3].minimumPrice === 0) {
                this.filterByData[3].minimumPrice = flightClass.price;
              }
            }
        });
    });
  }

  onSortByClick(): void {
    this.showSortByUI = true;
    this.showFlightData = false;
    this.showFlightForm = false;
    this.showFilterByUI = false;
  }

  onFilterByClick(): void {
    this.showSortByUI = false;
    this.showFlightData = false;
    this.showFlightForm = false;
    this.showFilterByUI = true;
  }

  onBackButtonClick(): void {
    if(this.showFlightData) {
      this.showSortByUI = false;
      this.showFlightData = false;
      this.showFlightForm = true;
      this.showFilterByUI = false;
    } else if(this.showSortByUI) {
      this.showSortByUI = false;
      this.showFlightData = true;
      this.showFlightForm = false;
      this.showFilterByUI = false;
    } else if(this.showFilterByUI) {
      this.showSortByUI = false;
      this.showFlightData = true;
      this.showFlightForm = false;
      this.showFilterByUI = false;
    }
    
  }

  onEditFormClick(): void {
    if(this.showFlightData) {
      this.showSortByUI = false;
      this.showFlightData = false;
      this.showFlightForm = true;
      this.showFilterByUI = false;
    }
  }

  onSortBySubmit(): void {
    if(this.selectedRadio === 0) {
      this.flightSearchData.flights = this.flightSearchData.flights.sort((a: any, b: any) => {
        return a.class[0].price - b.class[0].price;
      });
    } else if(this.selectedRadio === 1) {
      this.flightSearchData.flights = this.flightSearchData.flights.sort((a: any, b: any) => {
        return b.class[3].price - a.class[3].price;
      });
    }
    
    else if (this.selectedRadio === 6) {
      this.flightSearchData.flights = this.flightSearchData.flights.sort((a: any, b: any) => {
        if (a.airlineName < b.airlineName) {
          return -1;
        } else if (a.airlineName > b.airlineName) {
          return 1;
        } else {
          return 0;
        }
      });
    } else if (this.selectedRadio === 7) {
      this.flightSearchData.flights = this.flightSearchData.flights.sort((a: any, b: any) => {
        if (a.airlineName > b.airlineName) {
          return -1;
        } else if (a.airlineName < b.airlineName) {
          return 1;
        } else {
          return 0;
        }
      });
    }

    this.showSortByUI = false;
    this.showFlightData = true;
    this.showFlightForm = false;
  }

  onFilterBySubmit(): void {

    let value =  this.filterByForm.value;
    let clonedResults  = _.cloneDeep(this.flightService.searchResult);
     
    if(!value.minimumPrice) {
      this.filterConditions.minimumPrice = 0;
    } else {
      this.filterConditions.minimumPrice = value.minimumPrice;
    }
    if(!value.maximumPrice) {
      this.filterConditions.maximumPrice = 10000000;
    } else {
      this.filterConditions.maximumPrice = value.maximumPrice;
    }
    if(!value.basicEconomy && !value.mainCabin && !value.economy && !value.business) {

      this.filterConditions['Basic economy'] = true;
      this.filterConditions['Main cabin'] = true;
      this.filterConditions['Economy'] = true;
      this.filterConditions['Business'] = true;
    }
    else {

      this.filterConditions['Basic economy'] = value.basicEconomy ? true : false ;
      this.filterConditions['Main cabin'] =  value.mainCabin ? true : false ;
      this.filterConditions['Economy'] =  value.economy ? true : false ;
      this.filterConditions['Business'] =  value.business ? true : false ;
    }


    this.flightSearchData.flights = clonedResults.flights.filter((flight: any) => {

      flight.class = flight.class.filter( (f: any) => this.filterConditions[f.type]);

        let temp = flight.class.some((flightClass: any) => {
          if((flightClass.price > this.filterConditions.minimumPrice) && (flightClass.price < this.filterConditions.maximumPrice)) {
            return true;
          } else {
            return false;
          }
        })

        if(temp) {
          return true;
        } else {
          return false;
        }
      });
  
      this.showSortByUI = false;
      this.showFlightData = true;
      this.showFlightForm = false;
      this.showFilterByUI = false;

  }

  onFilterByReset(): void {
    this.filterByForm.reset();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
