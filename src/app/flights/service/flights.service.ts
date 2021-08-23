import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FlightSearch } from '../model/flights.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  selectedSearchData: any;

  public searchResult: any =  {
    departure: 'Delhi',
    destination: 'CPT',
    departureDate: '2021-08-05',
    returnDate: '2021-08-21',
    travellers: '3',
    flights: [
      {
        airlineName: 'Air Asia',
        airlineIconUrl: 'https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/I5.png',
        startTime: '02:30 PM',
        startLocation: 'Delhi',
        endTime: '04:50 PM',
        endLocation: 'CPT',
        totalTime: '14h 20m',
        stops: '1 Stop(ADD)',
        class: [
          {
            type: 'Basic economy',
            price: 100,
            seatsLeft: 3
          },
          {
            type: 'Main cabin',
            price: 200,
            seatsLeft: 1
          },
          {
            type: 'Economy',
            price: 300,
            seatsLeft: 3
          },
          {
            type: 'Business',
            price: 400,
            seatsLeft: 3
          }
        ]
      },
      {
        airlineName: 'Go first',
        airlineIconUrl: 'https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/G8.png',
        startTime: '02:30 PM',
        startLocation: 'Delhi',
        endTime: '04:50 PM',
        endLocation: 'CPT',
        totalTime: '14h 20m',
        stops: '1 Stop(ADD)',
        class: [
          {
            type: 'Basic economy',
            price: 500,
            seatsLeft: 3
          },
          {
            type: 'Economy',
            price: 700,
            seatsLeft: 3
          },
          {
            type: 'Business',
            price: 800,
            seatsLeft: 3
          }
        ]
      },
      {
        airlineName: 'Spice Jet',
        airlineIconUrl: 'https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/SG.png',
        startTime: '02:30 PM',
        startLocation: 'Delhi',
        endTime: '04:50 PM',
        endLocation: 'CPT',
        totalTime: '14h 20m',
        stops: '1 Stop(ADD)',
        class: [
          {
            type: 'Basic economy',
            price: 900,
            seatsLeft: 3
          },
          {
            type: 'Main cabin',
            price: 1000,
            seatsLeft: 1
          },
          {
            type: 'Economy',
            price: 1100,
            seatsLeft: 3
          }
        ]
      },
      {
        airlineName: 'Indigo',
        airlineIconUrl: 'https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/6E.png',
        startTime: '02:30 PM',
        startLocation: 'Delhi',
        endTime: '04:50 PM',
        endLocation: 'CPT',
        totalTime: '14h 20m',
        stops: '1 Stop(ADD)',
        class: [
          {
            type: 'Basic economy',
            price: 1300,
            seatsLeft: 3
          },
          {
            type: 'Main cabin',
            price: 1400,
            seatsLeft: 1
          },
          {
            type: 'Economy',
            price: 1500,
            seatsLeft: 3
          },
          {
            type: 'Business',
            price: 1600,
            seatsLeft: 3
          }
        ]
      }
    ]
  }

  constructor(private http: HttpClient) { }

  getFlightsData(searchData: FlightSearch): Observable<any> {

    this.searchResult.departure = searchData.departure;
    this.searchResult.destination = searchData.destination;
    this.searchResult.departureDate = searchData.departureDate;
    this.searchResult.returnDate = searchData.returnDate;
    this.searchResult.travellers = searchData.travellers;
    return of(this.searchResult);
    
  }
}
